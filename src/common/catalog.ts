import fs from 'fs'
import path from 'path'

import {
   ApiEntity,
   ComponentEntity,
   DomainEntity,
   GroupEntity,
   SystemEntity,
} from '@backstage/catalog-model'

import { BackstageToolkitConfig } from '../models/BackstageToolkitConfig.js'
import { CentralizedCatalog } from '../models/CentralizedCatalog.js'
import { JSONToYAML, createFolder } from './file-utils.js'

export function exportGroups(
   groups: GroupEntity[],
   config: BackstageToolkitConfig
) {
   const groupsFolder = path.join(config.output, 'groups')

   createFolder(groupsFolder)

   groups.forEach((group: GroupEntity) => {
      const groupYAML = JSONToYAML(group)
      const groupPath = path.join(groupsFolder, `${group.metadata.name}.yaml`)
      fs.writeFileSync(groupPath, groupYAML)
   })
}

export function exportApis(apis: ApiEntity[], config: BackstageToolkitConfig) {
   const apisFolder = path.join(config.output, 'apis')

   createFolder(apisFolder)

   apis.forEach((api: ApiEntity) => {
      const apiYAML = JSONToYAML(api)
      const apiPath = path.join(apisFolder, `${api.metadata.name}.yaml`)
      fs.writeFileSync(apiPath, apiYAML)
   })
}

export function exportComponents(
   components: ComponentEntity[],
   config: BackstageToolkitConfig
) {
   const componentsFolder = path.join(config.output, 'components')

   createFolder(componentsFolder)

   components.forEach((component: ComponentEntity) => {
      const componentYAML = JSONToYAML(component)
      const componentPath = path.join(
         componentsFolder,
         `${component.metadata.name}.yaml`
      )
      fs.writeFileSync(componentPath, componentYAML)
   })
}

export function exportDomains(
   domains: DomainEntity[],
   config: BackstageToolkitConfig
) {
   const domainsFolder = path.join(config.output, 'domains')

   createFolder(domainsFolder)

   domains.forEach((domain: DomainEntity) => {
      const domainYAML = JSONToYAML(domain)
      const domainPath = path.join(
         domainsFolder,
         `${domain.metadata.name}.yaml`
      )
      fs.writeFileSync(domainPath, domainYAML)
   })
}

export function exportSystems(
   systems: SystemEntity[],
   config: BackstageToolkitConfig
) {
   const systemsFolder = path.join(config.output, 'systems')

   createFolder(systemsFolder)

   systems.forEach((system: SystemEntity) => {
      const systemYAML = JSONToYAML(system)
      const systemPath = path.join(
         systemsFolder,
         `${system.metadata.name}.yaml`
      )
      fs.writeFileSync(systemPath, systemYAML)
   })
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
   exportGroups(catalog.groups, config)
   exportComponents(catalog.components, config)
   exportApis(catalog.apis, config)
   exportGroups(catalog.groups, config)
   exportDomains(catalog.domains, config)
   exportSystems(catalog.systems, config)
}
