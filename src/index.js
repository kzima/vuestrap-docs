/**
 * IMPORT GLOBAL STYLING
 */
// import normalize, grid, utilities and
import 'vuestrap/core'

// import external dependencies
// docs component handles routing and demo pages
import docsPages from 'src/components/docs'
import {offcanvasWrapper as vsOffcanvasWrapper, offcanvasDrawer as vsOffcanvasDrawer} from 'gritcode-components/src/components/offcanvas-drawer'

// import demo pages compatibile with docs component
import docsRoutes from 'src/docs'

// import utils
import {getRoutes} from './utils'

// import package.json meta data
import pkg from 'package.json'


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
		pageTitle: 'Vuestrap Docs',
		pkg: pkg,
	},
	components: {
		docsPages,
		vsOffcanvasDrawer,
		vsOffcanvasWrapper,
	},
})

