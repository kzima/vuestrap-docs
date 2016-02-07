// import dependencies
import './demo.scss'
import template from './demo.html'

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
            default: '',
            required: true
        },
    },
}
