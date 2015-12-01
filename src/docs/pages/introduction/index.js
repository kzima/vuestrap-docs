import template from './introduction.html'

export default {
  template: template,
	data() {
		return {
			pkg: this.$parent.pkg,
			sampleComponentName: this.$parent.demoPages[0].name,
		}
	},
}
