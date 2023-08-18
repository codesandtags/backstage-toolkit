# Backstage Toolkit

Help teams to generate and validate their `Backstage Entities` for their `Backstage Catalog`.

## How to use it?

1. Install the `backstage-toolkit`:

```bash
npm install -g backstage-toolkit
```

2. Generate the catalog:

```bash
backstage-toolkit generate-catalog --help
```

## Features

### Generate fake catalog

Generate a fake catalog based on the configuration file `backstage-toolkit.config.js`.

```bash
backstage-toolkit generate --fake
```

### Setup custom entities for your catalog

Create a file `backstage-toolkit.config.js` in the root of your project with the following content, to setup your custom entities:

```json
{
   "output": "tmp",
   "generator": {
      "groups": 10,
      "components": 2500,
      "apis": 8400,
      "domains": 5,
      "systems": 10,
      "relations": true,
      "openapiDefinition": "https://github.com/APIs-guru/openapi-directory/blob/dab6854d4d599aafb0eb36e6c7ae1fe0c37509b7/APIs/spotify.com/2021.4.2/openapi.yaml"
   },
   "approach": "centralized"
}
```

## How to install this repo locally?

1. Clone the repo:

```bash
git clone
```

2. Install the dependencies:

```bash
npm install
```

1. Include the backstage-toolkit `cli` globally to run it from anywhere:

```bash
npm install -g ./

backstage-toolkit --help
```
