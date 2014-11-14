## Papers Bookmarklet

This can be used to save items to the Papers Online reading list.

The bookmarklet source should look like this:

```html
<a href="javascript:!function(){var e=window.location.href,n=encodeURIComponent(e);n&&n.length>0&&window.open("https://online.papersapp.com/app#readinglist/add/"+n,"_blank","toolbar=yes, scrollbars=yes, resizable=yes, width=400, height=500")}();">Add to Papers Online</a>
```

[Get the source](https://raw.githubusercontent.com/mekentosj/papersonline-bookmarklet/master/bookmarklet.min.js)

### Usage

1. Add the link above as a bookmark to your browser's toolbar
2. Make sure you're signed in to Papers Online
3. When you're viewing a page that you want to save to the reading list, click the bookmark

### Screenshot

![Safari, Papers Online](img/safari.png?raw=true)
