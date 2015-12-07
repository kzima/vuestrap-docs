/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

// import external dependencies
// docs component handles routing and demo pages
import docsPages from 'src/components/docs'

// import demo pages compatibile with docs component
import docsRoutes from 'src/docs'

// import utils
import {getRoutes} from 'utils'


// get list of the route objects
const routes = getRoutes(docsRoutes)

// create components from routes and attach it to the docs.components object
routes.forEach((route) => {
	docsPages.components[route.id] = route.component
})

// start docs instance
window.docs = new Vue({
	el: '#docs',
	data: {
		routes: routes,
	},
	components: {
		docsPages,
	},
})

