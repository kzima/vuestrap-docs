// import dependencies
import './docs-drawer.scss'
import template from './docs-drawer.html'

// import external dependencies
import docsSearch from '../search'

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
        pkg: {
            type: Object,
            required: true
        },
    },
    components: {
        docsSearch,
    },
}
