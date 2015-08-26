### Smoke Bomb of Ninja.JS

Segredo Ninja, solte uma bomba de fumaça e desapareça no global scope e no debugger...

```html
<script id="NinjaJS">
    (function (script) {
        location.assign('javascript:(function () {/* code here */}).call({}); window.dispatchEvent(new Event("load")); void(0);');
        script.parentNode.removeChild(script);
    })(document.querySelector('#NinjaJS'));
</script>
```
