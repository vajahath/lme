# Test for custom color config

## Why this extra directory?
- This directory has `lmeconfig.json` file.
- The `index.js` file uses `lme.d()` method to output something. It should be in the color configuration specified in `lmeconfig.json`.
- _Some mocha tests will eventually replace this directory._

## How should I use this directory?
- `cd` to this directory.
- `npm install ../` (installs the current local copy of `lme` present in the parent dir.)
- `node index.js`
- verify that it is in the color specified in `lmeconfig.json`.

## How to update lme in this directory?
- run `npm install ../` again.

## How I created this dir?
- New Folder with this name
- `npm init` -> with dummy values _(I think this is required for `app-root-path` to properly work.)_
- `npm install ../`
- created `index.js`
