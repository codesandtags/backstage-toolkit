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
