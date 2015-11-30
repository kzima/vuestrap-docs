// import dependencies
import './_search.scss'
import template from './search.html'
import 'vuestrap/components/list-group'
import 'vuestrap/components/forms'

// export component object
export default {
    template: template,
    replace: true,
    data() {
        return {
            search: ""
        }
    },
    props: {
        showSearch: {
            type: Number,
            default: 5
        },
        list: {
            type: Array,
            default: []
        },
        currentView: {
            type: String,
            default: null
        },
    },
}
