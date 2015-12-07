/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

/**
 * IMPORT EACH COMPONENT
 */
import demo from 'src/components/demo'
import search from 'src/components/search'
import docs from 'src/components/docs'

const vuestrapDocs = {
  demo,
  search,
  docs,
}

module.exports = vuestrapDocs
