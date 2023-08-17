import {
   GroupEntity,
   entityKindSchemaValidator,
} from '@backstage/catalog-model'
import { generateApis, generateGroups } from './generate-fake-catalog'

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
})
