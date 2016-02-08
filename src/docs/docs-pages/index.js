import snippet from './snippet.html'
import template from './docs-pages.html'
import meta from './docs-pages.json'
import docsDemo from 'src/components/demo'

export default {
	route: {
		url: '/docs-pages',
		name: 'docs-pages',
		title: 'Docs Pages'
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
