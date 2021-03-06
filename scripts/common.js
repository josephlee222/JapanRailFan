// Common functions file

// Get 'Get' parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Function to create alerts
function createAlert(id ,type, message) {
    var alertHtml = '<div class="alert ' + type + ' alert-dismissible fade show" role="alert">' + message + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span class="material-symbols-sharp">close</span></button></div>'
    document.getElementById(id).innerHTML = alertHtml
}

// Init tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Add a comma in every thousand
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}