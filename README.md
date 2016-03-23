# conditional-travis-deploy

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/conditional-travis-deploy
[travis-image]: https://img.shields.io/travis/tlvince/conditional-travis-deploy.svg
[npm-url]: https://www.npmjs.com/package/conditional-travis-deploy
[npm-image]: https://img.shields.io/npm/v/conditional-travis-deploy.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/conditional-travis-deploy.svg

> Generic conditions for TravisCI deployment

Intended to be used within Travis's `before_deploy` block. Tries to determine
which build/deployment type to perform based on the following conventions:

* Pushes to `develop`: deploy to `development`
* Pushes to `master`: deploy to `staging`
* Tags: deploy to `production`

Throw on all other triggers.

## Installation

```shell
npm install --save conditional-travis-deploy
```

## Usage

```js
var conditionalTravisDeploy = require('conditional-travis-deploy')
console.log(conditionalTravisDeploy)
//=> production
```

## CLI

```shell
conditional-travis-deploy
#=> Error: TravisCI not found in process.env
echo $?
#=> 1

TRAVIS=true TRAVIS_BRANCH=master conditional-travis-deploy
#=> staging
```

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
