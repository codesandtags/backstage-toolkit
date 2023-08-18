import {
   exportApis,
   exportDomains,
   exportGroups,
   exportSystems,
} from './catalog'
import {
   generateApis,
   generateDomains,
   generateGroups,
   generateSystems,
} from '../features/generate-fake-catalog'
import { BackstageToolkitConfig } from '../models/BackstageToolkitConfig'

import fs from 'fs'
import * as fileUtils from './file-utils'

const fsWriteFileSync = jest.spyOn(fs, 'writeFileSync')
const JSONToYAML = jest.spyOn(fileUtils, 'JSONToYAML')

const configBackstageToolkit: BackstageToolkitConfig = {
   generator: {
      groups: 2,
      components: 2,
      apis: 2,
      domains: 2,
      systems: 2,
      relations: true,
   },
   output: 'tmp',
   approach: 'centralized',
}

describe('Catalog', () => {
   beforeEach(() => {
      jest.clearAllMocks()
   })

   it('should export groups', () => {
      const totalEntities = 5
      const groups = generateGroups(totalEntities)
      exportGroups(groups, configBackstageToolkit)

      expect(JSONToYAML).toHaveBeenCalledTimes(totalEntities)
      expect(fsWriteFileSync).toHaveBeenCalledTimes(totalEntities)
   })

   it('should export apis', () => {
      const totalEntities = 5
      const apis = generateApis(totalEntities)
      exportApis(apis, configBackstageToolkit)

      expect(JSONToYAML).toHaveBeenCalledTimes(totalEntities)
      expect(fsWriteFileSync).toHaveBeenCalledTimes(totalEntities)
   })

   it('should export domains', () => {
      const totalEntities = 5
      const domains = generateDomains(totalEntities)
      exportDomains(domains, configBackstageToolkit)

      expect(JSONToYAML).toHaveBeenCalledTimes(totalEntities)
      expect(fsWriteFileSync).toHaveBeenCalledTimes(totalEntities)
   })

   it('should export systems', () => {
      const totalEntities = 5
      const systems = generateSystems(totalEntities)
      exportSystems(systems, configBackstageToolkit)

      expect(JSONToYAML).toHaveBeenCalledTimes(totalEntities)
      expect(fsWriteFileSync).toHaveBeenCalledTimes(totalEntities)
   })
})
