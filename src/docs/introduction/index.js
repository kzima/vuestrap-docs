import template from './introduction.html'
import pkg from 'package.json'

export default {
  route: {
		url: '/',
		name: 'introduction',
		title: 'Intoduction',
	},
  template: template,
	data() {
		return {
			pkg: pkg,
		}
	},
}
