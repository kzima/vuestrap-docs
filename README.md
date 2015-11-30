Vuestrap Docs Components
=========

Vuestrap Docs Components are useful for documenting other [vuestrap](https://github.com/kzima/vuestrap#readme) web components.

DEMO
=========

[Documentation](http://http://kzima.github.io/vuestrap-docs/#/demo)

QUICK USE
=========

For compiled components, use it within your Vue instance like this:

```js
new Vue({
	el: '#app',
	components: { 'docs-demo': vuestrapDocs.demo }
})
```

-- OR --

If you chosen to work with source components, just import* desired component like so:

```js
import demo from 'vuestrap-docs/src/components/demo'
```

and then load it in your Vue instance:

```js
new Vue({
	el: '#app',
	components: { 'docs-demo': demo }
})
```

*Note: You will need <a href="https://github.com/babel/babel-loader">Babel Loader</a> in your Webpack config file to support ES6 syntax.

You can then use docs-demo component in your html, like so:
```html
<docs-demo :meta="metaData" :snippet="snippet"></docs-demo>
```

TODO
=========
- create responsive sidebar