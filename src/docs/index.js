// import modules and pages
import introduction from './introduction'
import docs from './docs'
import demo from './demo'
import search from './search'

// import vuestrap dependencies
import 'vuestrap/components/nav'
import 'vuestrap/components/navbar'
import 'vuestrap/components/buttons'
import 'vuestrap/components/list-group'
import 'vuestrap/components/forms'
import 'vuestrap/components/labels'
import 'vuestrap/components/alert'
import 'vuestrap/components/tables'

export default {
	pages: [
		introduction,
		docs,
		demo,
		search,
	]
}
