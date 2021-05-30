chrome.runtime.onInstalled.addListener(function(details){
  // This gets once the extension is installed on browser
  console.log("here!!12")
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Get called when page URL is updated or refreshed
  console.log("here!!")
});

const tabStorage = {};

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  switch (msg.type) {
      case 'popupInit':
          response(tabStorage[msg.tabId]);
          break;
      default:
          response('unknown request');
          break;
  }
});