// import dependencies
import './docs-pages.scss'
import template from './docs-pages.html'

// import external dependencies
import docsSearch from '../search'

// import utils
import {router} from '../../utils'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            currentView: '',
        }
    },
    props: {
        routes: {
            type: Array,
            required: true
        },
        pageTitle: {
            type: String,
            required: true
        },
        pkg: {
            type: Object,
            required: true
        },
    },
    components: {
        docsSearch,
    },
    methods: {
        changeRoute(route) {
            window.scrollTo(0, 0)
            this.$set('currentView', route.id)
            this.$set('pageTitle', route.pageTitle)
        }
    },
    ready() {
        // set routes for each page
        this.routes.forEach((route) => {
            // Adhoc Routing
            router.on(route.url, () => {
                if (route.redirect) {
                    // if route has redirect param, redirect to the spcified route
                    router.setRoute(route.redirect)
                }
                this.changeRoute(route)
            })
        })

        // init router
        router.init('/')
    }
}
