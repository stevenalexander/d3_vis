var stevena = stevena || {};
stevena.d3vis = stevena.d3vis || {};

stevena.d3vis.utils = stevena.d3vis.utils || (function() {
  var _isD3Compatible = null;
  return {
    isD3Compatible: function() {
      if (_isD3Compatible === null) {
        _isD3Compatible = !stevena.d3vis.utils.isIeLessThan9();
      }
      return _isD3Compatible;
    },
    isIeLessThan9: function() {
      var div = document.createElement("div");
      div.innerHTML = "<!--[if lt IE 9]><i></i><![endif]-->";
      var isIeLessThan9 = (div.getElementsByTagName("i").length == 1);
      return isIeLessThan9;
    }
  };
})();
