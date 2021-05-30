/*global chrome*/

chrome.runtime.onInstalled.addListener(function(details){
  // This gets once the extension is installed on browser
  // console.log("here!!")
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Get called when page URL is updated or refreshed
  // console.log("here!!")
  console.log(tabId);
  console.log(changeInfo);
  console.log(tab);
});