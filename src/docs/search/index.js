import snippet from './snippet.html'
import template from './search.html'
import meta from './search.json'
import './search.scss'
import {sizes, variants} from 'utils'
import demo from 'src/components/demo'
import search from 'src/components/search'

export default {
	route: {
		url: '/search',
		name: 'search',
		title: 'Search'
	},
	template: template,
	data() {
		return {
			meta: meta,
		  snippet: snippet,
		  list: [{name: 'Component A', title: 'Component A'}, {name: 'Component B', title: 'Component B'}, {name: 'Other', title: 'Other'}],
		}
	},
	components: {
		search: search,
		demo: demo,
	},
}
