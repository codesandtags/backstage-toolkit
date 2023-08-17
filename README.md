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

1. Generate a fake catalog to simulate a real world catalog, following the `Centralized Catalog` and `Decentralized Catalog` approaches.
2. Generate catalog from `.csv` files to `.yaml` files.
3. Validate catalog files.

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
