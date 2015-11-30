// import dependencies
import './_demo.scss'
import template from './demo.html'
import 'vuestrap/components/labels'
import 'vuestrap/components/alert'

// export component object
export default {
    template: template,
    replace: true,
    props: {
        meta: {
            type: Object,
            default: {},
            required: true
        },
        snippet: {
            type: String,
            default: "",
            required: true
        },
    },
}
