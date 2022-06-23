# Dabs
A simple **HTML Navigation Tabs** for your beautiful simple web projects.
With simple design and many useful methods.
Connect `Dabs` with `Dage` for simple and basic `ViewPager`.

```html
<div data-dabs="MyTab" id="myTabEl">
  <div class="dab" data-active="">Dashboard</div>
  <div class="dab">Marketplace</div>
  <div class="dab" data-prop="">Log Out</div>
</div>
```

```js
// element
myTabEl.selectTab(1); // Marketplace
myTabEl.on(1, function() {
  alert("myTabEl:1");
});
myTabEl.change(function(index) {
  alert("Index " + index);
  myTabEl.off(1);
  console.log("myTabEl 1 listener removed");
});

// variable
Dabs.selectTab("MyTab", 1) // Marketplace

Dabs.on("MyTab", 1, function() {
  alert("myTabEl:1");
});
Dabs.change("MyTab", function(index) {
  alert("Index " + index);
  myTabEl.off(1);
  console.log("myTabEl 1 listener removed");
});
```

# Dabs + Dage
Want a simple and basic pagination? Use `Dabs` with `Dage` with simple connection configuration.

```js
// basic
Dabs.connect({
  0: "pageDashboard"
  1: "pageMarketplace"
});

// all
Dabs.connect();
```

## Documentation
### Configuration
```js
{
  // when 1st tab clicked, open the page "helloPage"
  0: "helloPage",

  // when 2nd tab clicked, open the page "worldPage"
  1: "worldPage",

  // when other tab clicked, call the function "other"
  // with argument "index" for index tab
  other(index) {
    //...
  }
}
```

### All pages
```html
<!--
     For automatic page selection, don't add configuration
     But you cannot exclude pages, all pages will be configurated automatically.
     Dabs.connect();
-->

<div data-dabs="mytab">
  <div class="dab" data-active="">Hello</div> <!-- Index: 0 -->
  <div class="dab">World</div> <!-- Index: 1 -->
</div>

<!-- Index: 0 -->
<!-- No "data-active" needed -->
<div data-page="hello">
Hello
</div>

<!-- Index: 1 -->
<div data-page="world">
World
</div>
```
