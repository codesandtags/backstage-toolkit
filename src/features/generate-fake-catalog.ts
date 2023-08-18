/**
 * This file is responsible for generating a fake catalog.
 *
 * The catalog is generated according to a configuration file.
 * the schema for kinds is reused from @backstage/catalog-model
 */
import {
   GroupEntity,
   ApiEntity,
   ComponentEntity,
   DomainEntity,
   SystemEntity,
} from '@backstage/catalog-model'
import fs from 'fs'

import { CentralizedCatalog } from '../models/CentralizedCatalog.js'
import { BackstageToolkitConfig } from '../models/BackstageToolkitConfig.js'
import { exportCatalog } from '../common/catalog.js'

const configBackstage = JSON.parse(
   fs.readFileSync('backstage-toolkit.config.json', 'utf8')
)

export function generateGroups(totalGroups: number): GroupEntity[] {
   if (totalGroups < 0) {
      throw new Error('Total groups is invalid')
   }

   console.log('🤖 Generating groups...')
   const groups: GroupEntity[] = [...Array(totalGroups)].map((_, index) => {
      const group: GroupEntity = {
         apiVersion: 'backstage.io/v1alpha1',
         kind: 'Group',
         metadata: {
            name: `group-${index}`,
            description: `Group ${index}`,
         },
         spec: {
            type: 'team',
            profile: {
               displayName: `Group ${index}`,
               email: `group-${index}@example.com`,
               picture: `https://avatars.dicebear.com/api/identicon/group-${index}.svg?background=%23fff&margin=25`,
            },
            children: [],
         },
      }

      return group
   })

   return groups
}

export function generateApis(totalApis: number): ApiEntity[] {
   if (totalApis < 0) {
      throw new Error('Total apis is invalid')
   }

   console.log('🤖 Generating apis...')
   const apis: ApiEntity[] = [...Array(totalApis)].map((_, index) => {
      const api: ApiEntity = {
         apiVersion: 'backstage.io/v1alpha1',
         kind: 'API',
         metadata: {
            name: `api-${index}`,
         },
         spec: {
            type: 'openapi',
            lifecycle: 'production',
            owner: 'guest',
            definition: configBackstage.generator.openapiDefinition,
         },
      }

      return api
   })

   return apis
}

export function generateComponents(totalComponents: number): ComponentEntity[] {
   if (totalComponents < 0) {
      throw new Error('Total components is invalid')
   }

   console.log('🤖 Generating components...')
   const components: ComponentEntity[] = [...Array(totalComponents)].map(
      (_, index) => {
         const component: ComponentEntity = {
            apiVersion: 'backstage.io/v1alpha1',
            kind: 'Component',
            metadata: {
               name: `component-${index}`,
            },
            spec: {
               type: 'service',
               lifecycle: 'production',
               owner: 'guest',
               providesApis: [],
               consumesApis: [],
               system: 'system-1',
            },
         }

         return component
      }
   )

   return components
}

export function generateDomains(totalDomains: number): DomainEntity[] {
   if (totalDomains < 0) {
      throw new Error('Total domains is invalid')
   }

   console.log('🤖 Generating domains...')
   const domains: DomainEntity[] = [...Array(totalDomains)].map((_, index) => {
      const domain: DomainEntity = {
         apiVersion: 'backstage.io/v1alpha1',
         kind: 'Domain',
         metadata: {
            name: `domain-${index}`,
         },
         spec: {
            owner: 'guest',
         },
      }

      return domain
   })

   return domains
}

export function generateSystems(totalSystems: number): SystemEntity[] {
   if (totalSystems < 0) {
      throw new Error('Total systems is invalid')
   }

   console.log('🤖 Generating groups...')
   const systems: SystemEntity[] = [...Array(totalSystems)].map((_, index) => {
      const system: SystemEntity = {
         apiVersion: 'backstage.io/v1alpha1',
         kind: 'System',
         metadata: {
            name: `system-${index}`,
         },
         spec: {
            owner: 'guest',
         },
      }

      return system
   })

   return systems
}

export async function generateFakeCatalog() {
   // Read config file
   const config: BackstageToolkitConfig = { ...configBackstage }

   // Generate fake catalog according to config
   const centralizedCatalog: CentralizedCatalog = {
      groups: generateGroups(config.generator.groups),
      apis: generateApis(config.generator.apis),
      components: generateComponents(config.generator.components),
      domains: generateDomains(config.generator.domains),
      systems: generateSystems(config.generator.systems),
   }

   // Convert all entities from the catalog to YAML files
   exportCatalog(centralizedCatalog, config)

   //TODO: Export catalog to a file
}
