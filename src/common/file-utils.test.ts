import { JSONToYAML } from './file-utils'

describe('JSONToYAML', () => {
   it('should return an error when JSON is invalid', () => {
      expect(() => JSONToYAML('')).toThrowError('JSON is invalid')
   })

   it('should return a YAML string', () => {
      const group = {
         apiVersion: 'backstage.io/v1alpha1',
         kind: 'Group',
         metadata: {
            name: `group-0`,
         },
         spec: {
            type: 'team',
            children: [],
         },
      }

      const expectedYAML = `apiVersion: backstage.io/v1alpha1
kind: Group
metadata:
  name: group-0
spec:
  type: team
  children: []
`

      expect(JSONToYAML(group)).toBe(expectedYAML)
   })
})
