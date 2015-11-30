import snippet from './snippet.html'
import template from './demo.html'
import meta from './demo.json'
import demo from 'src/components/demo'
import './_demo.scss'

export default {
	template: template,
	data() {
		return {
			meta: meta,
		  snippet: snippet,
		}
	},
	components: {
		'docs-demo': demo,
	},
}
