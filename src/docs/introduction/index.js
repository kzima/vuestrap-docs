import template from './introduction.html'

export default {
  route: {
		url: '/',
		name: 'introduction',
		title: 'Intoduction',
	},
  template: template,
	data() {
		return {
			pkg: this.$parent.pkg,
			sampleComponentName: this.$parent.routes[1].name,
		}
	},
}