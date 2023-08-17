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
   entityKindSchemaValidator,
} from '@backstage/catalog-model'

import backstageToolkitConfig from '../../backstage-toolkit.config.json'
import { BackstageToolkitConfig } from '../models/BackstageToolkitConfig'
import { CentralizedCatalog } from '../models/CentralizedCatalog'

export function generateGroups(totalGroups: number): GroupEntity[] {
   if (totalGroups < 0) {
      throw new Error('Total groups is invalid')
   }

   const groups: GroupEntity[] = [...Array(totalGroups)].map((_, index) => {
      const group: GroupEntity = {
         apiVersion: 'backstage.io/v1alpha1',
         kind: 'Group',
         metadata: {
            name: `group-${index}`,
         },
         spec: {
            type: 'team',
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
            definition: 'openapi.yaml',
         },
      }

      return api
   })

   return apis
}

export function generateFakeCatalog() {
   // Read config file
   const config: BackstageToolkitConfig = { ...backstageToolkitConfig }

   //TODO: Generate fake catalog according to config
   const centralizedCatalog: CentralizedCatalog = {
      groups: generateGroups(config.generator.groups),
      apis: [],
      components: [],
      domains: [],
      systems: [],
   }

   //TODO: Verify the generated catalog against the config and the schema
   //TODO: Export catalog to a file
}

export default generateFakeCatalog
