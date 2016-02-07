import snippet from './snippet.html'
import template from './docs.html'
import meta from './docs.json'
import docsDemo from 'src/components/demo'

export default {
	route: {
		url: '/docs',
		name: 'docs',
		title: 'Docs'
	},
	template: template,
	data() {
		return {
			meta: meta,
		  snippet: snippet,
		}
	},
	components: {
		docsDemo,
	},
}
