`text-filter` is a web component that enhances a native text input with the ability to filter a list. Typing into the field hels you find exactly what you're looking for, live!

<iframe height="375" title="Codepen: text-filter Demo" src="https://codepen.io/auroratide/embed/poaybpV?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/auroratide/pen/poaybpV">
  Toggle a Light Bulb</a> by Timothy Foster (<a href="https://codepen.io/auroratide">@auroratide</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Unlike web components I've built in the past, `text-filter` is a [customized build-in element](https://html.spec.whatwg.org/#custom-elements-customized-builtin-example), meaning it actually extends an existing element.

```html
<input is="text-filter" for="my-list" type="text" />
<ul id="my-list">
    <li>An item</li>
    <li>Another item</li>
</ul>
```
