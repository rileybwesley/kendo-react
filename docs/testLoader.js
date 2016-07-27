module.exports = function() {
  var links = [
    '//kendo.cdn.telerik.com/2016.2.714/styles/kendo.mobile.common.min.css',
    '//kendo.cdn.telerik.com/2016.2.714/styles/kendo.default.mobile.min.css'
  ]
  links.map((link) => {
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = link;
    document.head.appendChild(linkElement);
  });
}
