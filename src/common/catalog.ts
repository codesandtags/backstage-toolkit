import fs from 'fs'
import path from 'path'

import {
   ApiEntity,
   ComponentEntity,
   DomainEntity,
   GroupEntity,
   LocationEntity,
   SystemEntity,
} from '@backstage/catalog-model'

import { BackstageToolkitConfig } from '../models/BackstageToolkitConfig.js'
import { CentralizedCatalog } from '../models/CentralizedCatalog.js'
import { BackstageLocations } from '../models/BackstageLocations.js'
import { JSONToYAML, createFolder } from './file-utils.js'

export function exportLocations(
   config: BackstageToolkitConfig,
   locations: string[],
   prefix: string
) {
   const root = `all-${prefix}.yaml`
   const location: LocationEntity = {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Location',
      metadata: {
         name: root,
      },
      spec: {
         type: 'url',
         targets: locations,
      },
   }
   const locationYAML = JSONToYAML(location)
   const locationFolder = path.join(config.output, root)

   fs.writeFileSync(locationFolder, locationYAML)
   console.log(`✅ Generated [${locations.length}] locations for ${prefix}`)
}

export function exportGroups(
   groups: GroupEntity[],
   config: BackstageToolkitConfig
) {
   const groupsFolder = path.join(config.output, 'groups')
   const locations: string[] = []

   createFolder(groupsFolder)

   groups.forEach((group: GroupEntity) => {
      const groupYAML = JSONToYAML(group)
      const fileName = `${group.metadata.name}.yaml`
      const groupPath = path.join(groupsFolder, fileName)

      fs.writeFileSync(groupPath, groupYAML)
      locations.push(path.join('groups', fileName))
   })

   return locations
}

export function exportApis(apis: ApiEntity[], config: BackstageToolkitConfig) {
   const apisFolder = path.join(config.output, 'apis')
   const locations: string[] = []

   createFolder(apisFolder)

   apis.forEach((api: ApiEntity) => {
      const apiYAML = JSONToYAML(api)
      const fileName = `${api.metadata.name}.yaml`
      const apiPath = path.join(apisFolder, fileName)

      fs.writeFileSync(apiPath, apiYAML)
      locations.push(path.join('apis', fileName))
   })

   return locations
}

export function exportComponents(
   components: ComponentEntity[],
   config: BackstageToolkitConfig
) {
   const componentsFolder = path.join(config.output, 'components')
   const locations: string[] = []

   createFolder(componentsFolder)

   components.forEach((component: ComponentEntity) => {
      const componentYAML = JSONToYAML(component)
      const fileName = `${component.metadata.name}.yaml`
      const componentPath = path.join(componentsFolder, fileName)

      fs.writeFileSync(componentPath, componentYAML)
      locations.push(path.join('components', fileName))
   })

   return locations
}

export function exportDomains(
   domains: DomainEntity[],
   config: BackstageToolkitConfig
) {
   const domainsFolder = path.join(config.output, 'domains')
   const locations: string[] = []

   createFolder(domainsFolder)

   domains.forEach((domain: DomainEntity) => {
      const domainYAML = JSONToYAML(domain)
      const fileName = `${domain.metadata.name}.yaml`
      const domainPath = path.join(domainsFolder, fileName)

      fs.writeFileSync(domainPath, domainYAML)
      locations.push(path.join('domains', fileName))
   })

   return locations
}

export function exportSystems(
   systems: SystemEntity[],
   config: BackstageToolkitConfig
) {
   const systemsFolder = path.join(config.output, 'systems')
   const locations: string[] = []

   createFolder(systemsFolder)

   systems.forEach((system: SystemEntity) => {
      const systemYAML = JSONToYAML(system)
      const fileName = `${system.metadata.name}.yaml`
      const systemPath = path.join(systemsFolder, fileName)

      fs.writeFileSync(systemPath, systemYAML)
      locations.push(path.join('systems', fileName))
   })

   return locations
}

/**
 * Receives a catalog and exports it to a YAML files
 *
 * @param catalog
 */
export function exportCatalog(
   catalog: CentralizedCatalog,
   config: BackstageToolkitConfig
) {
   const outputFolder = path.join(config.output)

   // Clean the output folder if it exists, if not then create the output folder
   if (fs.existsSync(outputFolder)) {
      fs.rmSync(outputFolder, { recursive: true })
   } else {
      fs.mkdirSync(outputFolder)
   }

   // Export Backstage entties to YAML files
   const locations: BackstageLocations = {
      groups: exportGroups(catalog.groups, config) || [],
      components: exportComponents(catalog.components, config) || [],
      apis: exportApis(catalog.apis, config) || [],
      domains: exportDomains(catalog.domains, config) || [],
      systems: exportSystems(catalog.systems, config) || [],
      entities: ['groups', 'components', 'apis', 'domains', 'systems'],
   }

   // Generate locations
   for (const location in locations) {
      exportLocations(
         config,
         locations[location as keyof typeof locations],
         location
      )
   }
}
