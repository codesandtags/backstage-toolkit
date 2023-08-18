import {
   generateApis,
   generateComponents,
   generateDomains,
   generateGroups,
   generateSystems,
} from './generate-fake-catalog'

describe('Generate fake catalog', () => {
   describe('Generate groups', () => {
      it('should return an error when number of groups is invalid', () => {
         expect(() => generateGroups(-1)).toThrowError(
            'Total groups is invalid'
         )
      })

      it('should return an array with groups generated with the correct schema', () => {
         const groups = generateGroups(10)

         expect(groups.length).toBe(10)

         for (const group of groups) {
            expect(group.kind).toBe('Group')
         }
      })
   })

   describe('Generate apis', () => {
      it('should return an error when number of apis is invalid', () => {
         expect(() => generateApis(-1)).toThrowError('Total apis is invalid')
      })

      it('should return an array with apis generated with the correct schema', () => {
         const apis = generateApis(10)

         expect(apis.length).toBe(10)

         for (const api of apis) {
            expect(api.kind).toBe('API')
         }
      })
   })

   describe('Generate components', () => {
      it('should return an error when number of components is invalid', () => {
         expect(() => generateComponents(-1)).toThrowError(
            'Total components is invalid'
         )
      })

      it('should return an array with components generated with the correct schema', () => {
         const components = generateComponents(10)

         expect(components.length).toBe(10)

         for (const component of components) {
            expect(component.kind).toBe('Component')
         }
      })
   })

   describe('Generate domains', () => {
      it('should return an error when number of domains is invalid', () => {
         expect(() => generateDomains(-1)).toThrowError(
            'Total domains is invalid'
         )
      })

      it('should return an array with domains generated with the correct schema', () => {
         const domains = generateDomains(10)

         expect(domains.length).toBe(10)

         for (const domain of domains) {
            expect(domain.kind).toBe('Domain')
         }
      })
   })

   describe('Generate systems', () => {
      it('should return an error when number of systems is invalid', () => {
         expect(() => generateSystems(-1)).toThrowError(
            'Total systems is invalid'
         )
      })

      it('should return an array with systems generated with the correct schema', () => {
         const systems = generateSystems(10)

         expect(systems.length).toBe(10)

         for (const system of systems) {
            expect(system.kind).toBe('System')
         }
      })
   })
})
