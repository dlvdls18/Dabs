# Dabs

![Dabs](dabs.png)
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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dlvdls18/Dabs@main/src/dabs.css">
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
  this is important. without this, some methods will not work and caused some errors.
 -->
<div class="dab" data-active=""></div>
```

### Managing tab in element
```js
// No tab name needed
myTabEl.on(...);
myTabEl.off(...);
myTabEl.change(...);
myTabEl.selectTab(...);
myTabEl.getActiveTab(...);
myTabEl.getActiveIndex(...);
myTabEl.disableTab(...);
myTabEl.enableTab(...);
myTabEl.action(...);

// Dabs.t[myTabEl.getAttribute("data-tab")]
myTabEl.props
```

### Disabling tab programmatically
```js
// If you disabled the active tab,
// It will activate the default active tab
// or the first enabled tab
// otherwise, no change.
// Using this will reupdate the Dabs
Dabs.disableTab("MyTab",1);
```

### Enabling tab programmatically
```js
// Using this will reupdate the Dabs
Dabs.enableTab("MyTab", 1);
```

## Listener
### Set index listener
```js
// Fired when 2nd tab is clicked
Dabs.on("MyTab", 1, function(el) {
  // ...
});
```

### Get index listener
```js
// index as string
Dabs.t["MyTab"].$["1"];
```

### Remove index listener
```js
Dabs.off("MyTab", 1);
```

### Set click listener to action tab
```js
// If the tab is not action,
// this will never called
Dabs.action("MyTab", 2, function() {
  // ...
});
```

### Set onchange listener
```js
Dabs.change(function(index) {
  // ...
});
```

### Get onchange listener
```js
Dabs.t["MyTab"].$$;
```

## Remove onchange listener
```js
Dabs.change(function() {});
```

## Connecting Dage
### Connect to Dage
```js
Dabs.connect(config?);
```

### Disconnect to Dage
```js
// This will reupdate the Dabs and reset the configuration
// and some other variable used in "Dabs.connect"
Dabs.disconnect();
```

### Simple Configuration
```js
// To configurate
// You need to use number as key for
// tab index.
// and it's value is the name of page
{
  // tab name
  MyTab: {
    // when 1st tab clicked, navigate to page "MyPage"
    0: "MyPage",
    // when 2nd tab clicked, navigate to page "MyPage2"
    1: "MyPage2"
  }
}
```

### Default page configuration
```js
// When a tab clicked that doesn't added to configuration, nothing happens.
// However, you can add the key "other" and the value of it is a function
// It will fired when the clicked tab index is not in configuration.
// with 1 argument (index).
{
  other(index) {
    // ...
  }
}
```

### No configuration
```js
// Configuration is optional
// However, without configuration is
// NOT RECOMMENDED when using Action Tab
// and ALL PAGES will be used.

// No object configuration, just string
Dabs.connect("MyTab");
```


### With onfiguration and without configuration **comparison**
```html
<!-- This is how Dabs.connect work with configuration -->
<!--
{
  MyTab:
    0: "hello",
    1: "world",
    other(index) {
      Dage.navigate("notfound");
      alert("Index " + index + " not found");
    }
  }
}
-->
<div data-tab="MyTab">
  <!-- Navigate to page "hello" (0) -->
  <div class="dab" data-active="">Hello</div>
  <!-- Navigate to page "world" (1) -->
  <div class="dab">World</div>
  <!-- Call the function "other" (2) -->
  <div class="dab">Not Found</div>
</div>
<div data-page="hello">Hello!</div>
<div data-page="world">World!</div>
<!-- Navigate to this page when function "other" called -->
<div data-page="notfound">404 Not found.</div>
<!-- Never navigated (using tab) based on configuration -->
<div data-page="unknown">HOW?!?!</div>
```

```html
<!-- This is how Dabs.connect work without configuration -->
<div data-tab="MyTab">
  <!-- Navigate to page "hello" even it's action tab (0) -->
  <div class="dab" data-action="">Hello</div>
  <!-- Navigate to page "world" (1) -->
  <div class="dab" data-active="">World</div>
  <!-- Call the function "other" (2) -->
  <div class="dab">Not Found</div>
</div>
<div data-page="hello">Hello!</div>
<div data-page="world">World!</div>
<!-- Navigate to this page when function "other" called -->
<div data-page="notfound">404 Not found.</div>
<!-- Index: 3 -->
<div data-page="unknown">HOW?!?!</div>
```

## Style
### Variables
```css
/* Default values of css variables */
:root {
  /* for normal tab that is not active */
  --dab-normal-bgcolor: #828282;
  --dab-color: #FFF;
  --dab-normal-bgcolor-hover: 959595;
  /* for normal tab that is active */
  --dab-active-bgcolor: green;
  --dab-active-bgcolor-hover: #4C9700;
  /* for disabled tab */
  --dab-disabled-bgcolor: red;
  --dab-disabled-bgcolor-hover: coral;
  /* for action tab */
  --dab-action-bgcolor: transparent;
  --dab-action-color: blue;
  --dab-action-shadow: #2D87FF; /* box shadow color (hover) */
  --dab-action-bgcolor-hover: blue;
  --dab-action-color-hover: #FFF;
  /* for parent tab box shadow */
  --dab-parent-shadow: rgba(0, 0, 0, 0.2);
}
```

### Selectors

```css
[data-tab],
[data-tab] > .dab,
[data-tab] > .dab:hover,
[data-tab] > .dab[data-active],
[data-tab] > .dab[data-active]:hover,
[data-tab] > .dab[data-disabled],
[data-tab] > .dab[data-disabled]:hover,
[data-tab] > .dab[data-action],
[data-tab] > .dab[data-action]:hover
```

## Others
### Get parent tab's children
```js
Dabs.t["MyTab"].c; // NodeList
```

### Get parent tab's active index and element
```js
Dabs.t["MyTab"].a; // Object
{
  i: index,
  t: element
}
```

### Get parent tab's disabled tabs
```js
Dabs.t["MyTab"].d; // NodeList
```

### Get parent tab's action tabs
```js
Dabs.t["MyTab"].ac; // NodeList
```

### Get parent tab
```js
Dabs.t["MyTab"];
// Can be used in element
// myTabEl.props == Dabs.t[myTabEl.getAttribute("data-tab")];
```

### Update tabs
```js
Dabs.update();
// When using this method
// All tabs will be removed in Dabs.t
// And add them back including the other tabs that not in Dabs.t
// in short: research tabs

// All tab's values will be reset
// except for:
// active tab
// change listener
// tab listener
```
