#!/usr/bin/env node

const args = process.argv.slice(2)
const command = args[0]

console.log(`
Welcome to backstage-toolkit!

Running backstage-toolkit ${command}...
`)

const usage = `
Usage: backstage-toolkit <command>

Commands:
  help        Show this help message
  version     Show the version of backstage-toolkit
  generate    Generate the catalog based on configuration
    --fake
`

switch (command) {
   case 'help':
      console.log(usage)
      break

   case 'version':
      break

   case 'generate':
      const fake = args[1] === '--fake'
      console.log(`Generating catalog with fake=${fake}`)
      break

   default:
      console.log(`Unknown command: ${command}`)
      console.log(usage)
      process.exit(1)
}
