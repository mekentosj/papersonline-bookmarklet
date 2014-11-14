(function() {
  var url = window.location.href;
  var encodedUrl = encodeURIComponent(url);

  if (encodedUrl && encodedUrl.length > 0) {
    window.open('https://online.papersapp.com/app#readinglist/add/' + encodedUrl, '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, width=400, height=500');
  }
}());
