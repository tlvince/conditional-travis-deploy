'use strict'

module.exports = function () {
  if (process.env.TRAVIS !== 'true') {
    throw new Error('TravisCI not found in process.env')
  }

  if (process.env.TRAVIS_PULL_REQUEST && process.env.TRAVIS_PULL_REQUEST !== 'false') {
    throw new Error('This build was triggered by a pull request')
  }

  if (process.env.TRAVIS_TAG) {
    return 'production'
  }

  if (process.env.TRAVIS_BRANCH === 'master') {
    return 'staging'
  }

  if (process.env.TRAVIS_BRANCH === 'develop') {
    return 'development'
  }

  if (process.env.TRAVIS_BRANCH === 'van') {
    return 'van'
  }

  if (process.env.TRAVIS_BRANCH === 'van-staging') {
    return 'van-staging'
  }

  if (process.env.TRAVIS_BRANCH === 'van-merge') {
    return 'van-merge'
  }

  throw new Error('Unknown build condition')
}
