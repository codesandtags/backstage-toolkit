import yaml from 'js-yaml'
import fs from 'fs'

export function JSONToYAML(json: any): string {
   if (typeof json !== 'object') {
      throw new Error('JSON is invalid')
   }

   const yamlData = yaml.dump(json)

   return yamlData
}

export function createFolder(pathFolder: string) {
   if (!fs.existsSync(pathFolder)) {
      fs.mkdirSync(pathFolder, { recursive: true })
   }
}
