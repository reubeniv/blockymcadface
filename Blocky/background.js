let module = require('./filter.js')
let filter = module.filter;

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true }
    },
    { urls: filter},
    ["blocking"]
)