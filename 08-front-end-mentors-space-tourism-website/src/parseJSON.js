// JSON data contains all of the text entities used in this website
// Fetching it here in seperate script before the react script 

let DATA = {};

$.ajax({
    url: "data.json",
    dataType: "json",
    success: function(response) {
    DATA = response
    }  
  });