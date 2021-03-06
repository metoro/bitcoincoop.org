// Generated by CoffeeScript 1.6.1
(function() {

  $(function() {
    $.getJSON('/ticker', {
      symbol: 'virtexCAD',
      type: 'ask',
      amount: 1000
    }, function(data) {
      var price;
      price = parseFloat(data) * 1.05;
      return $('#ask').text(price.toFixed(2));
    });
    return $.getJSON('/ticker', {
      symbol: 'virtexCAD',
      type: 'bid',
      amount: 1000
    }, function(data) {
      var price;
      price = parseFloat(data) * 0.95;
      return $('#bid').text(price.toFixed(2));
    });
  });

}).call(this);
