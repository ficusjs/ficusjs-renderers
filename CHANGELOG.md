# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2021-09-14

### Removed
- remove `document.createElement` renderer as this is now built-in

## [3.4.1] - 2021-08-20

### Fixes
- add jsx-dom to package.json exports

## [3.4.0] - 2021-08-20

### Updates
- ensure jsx-dom is available in the npm package
- uplift dev dependencies

## [3.3.0] - 2021-07-20

### Updates
- update `uhtml` to v2.7.6
- update `htm` to v3.1.0

## [3.2.0] - 2021-05-12

### Updates
- update `uhtml` to v2.7.3
- update `lit-html` to v1.4.1
- uplift dev dependencies

## [3.1.0] - 2021-04-09

### Updates
- rename files to use `.mjs` extension
- update `uhtml` to v2.7.2
- add `ava` unit tests

## [3.0.3] - 2021-03-18

### Fixes
- remove lodash.flatten to use native array flat method

## [3.0.2] - 2021-03-18

### Fixes
- htm with preact export map

## [3.0.1] - 2021-03-18

### Fixes
- htm renderer not rendering arrays

## [3.0.0] - 2021-03-18

### Breaking
- htm renderer uses custom JSX renderer not Preact

### New
- htm-preact renderer uses htm with Preact

## [2.2.1] - 2021-03-04

### Fixes
- Ensure `uhtml` is in the export map

## [2.2.0] - 2021-03-04

### Updates
- Update `uhtml` to v2.5.4

## [2.1.2] - 2021-02-07

### Fixes
- Add missing files to package.json

## [2.1.1] - 2021-02-07

### Fixes
- Add missing exports to package.json

## [2.1.0] - 2021-02-07

### Changed
- Uplift uhtml to v2.3.1
- Set package ES module renderer to uhtml
- Add Types for each renderer

## [2.0.1] - 2021-02-06

### Fixed
- Publish public package

## [2.0.0] - 2021-02-06

### Changed
- Rename package to @ficusjs/renderers

## [1.0.1] - 2020-10-07

### Fixed
- Issue with docs

## [1.0.0] - 2020-10-06

- Initial release
