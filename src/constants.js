const SITE_ROOT = process.env.NODE_ENV == 'production'
    ? 'https://www.sofiaro.com'
    : 'http://localhost:4000'

const API_ROOT = `${SITE_ROOT}/api`

module.exports = {
    API_ROOT
}
