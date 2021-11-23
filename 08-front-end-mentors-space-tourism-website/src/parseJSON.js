let DATA = {};

$.ajax({
    url: "data.json",
    dataType: "json",
    success: function(response) {
    DATA = response
    }  
  });