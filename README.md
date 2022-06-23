# Dabs
A simple **HTML Navigation Tabs** for your beautiful simple web projects.
With simple design and many useful methods.

```html
<div data-dabs="MyTab" id="myTabEl">
  <div class="dab" data-active="">Dashboard</div>
  <div class="dab">Marketplace</div>
  <div class="dab" data-prop="">Log Out</div>
</div>
```

```js
myTabEl.selectTab(1); // Marketplace
myTabEl.on(1, function() {
  alert("To Marketplace!");
});
myTabEl.change(function(index) {
  alert("Index " + index);
  myTabEl.off(1);
});
```

`Dabs` meet [`Dage`](https://github.com/dlvdls18/Dage).

```js
Dabs.connect({
  0: "pageDashboard"
  1: "pageMarketplace"
});
```

# Installation
```html
<script src="https://cdn.jsdelivr.net/gh/dlvdls18/Dabs@main/src/dabs.js"></script>
<link rel="stylesheet" src="https://cdn.jsdelivr.net/gh/dlvdls18/Dabs@main/src/dabs.css">
```

# Documentation
### Get file version
```js
Dabs.ver; // float
```

## Tabs
### Assigning element as parent tab
```html
<div data-tab="MyTab"></div>
```

### Assigning element as child tab
```html
<!-- Add this inside the parent tab -->
<div class="dab">Hello</div>
```

### Assigning child tab as action
```html
<!--
  Useful for using tab as button
  and making it disable.
  But the index is still added.
 -->
<div class="dab" data-action=""></div>
```

### Disabling child tab
```html
<!--
  Tab cannot be change when clicking this.
  But the index is still added.
 -->
<div class="dab" data-disabled=""></div>
```

### Activating child tab
```html
<!--
  It is not recommended to use "data-active"
  for two or more elements.
 -->
<div class="dab" data-active=""></div>
```

### Managing tab in element
```