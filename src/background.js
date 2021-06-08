
// apis
const baseUrl = "http://abc.pshelper.de";
const req = new XMLHttpRequest();
let problem_id = null;
let content = null;
let input = null;

function postHighlight(prameter) {
  chrome.extension.getBackgroundPage().console.log("postHighlight");
  let url = baseUrl + `/api/v1/divide_highlight`;
  const urlParams = JSON.stringify(prameter);
  console.log(urlParams)
  
  req.open("POST", url, true);
  req.setRequestHeader("Content-type", "application/json");
  req.send(urlParams);

    req.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Got response 200!");
      } else {
        console.log("failed!");
      }
  }
}

function postAnalyzeAlgorithm(prameter) {
  chrome.extension.getBackgroundPage().console.log("postAnalyzeAlgorithm");
  let url = baseUrl + `/api/v1/analyze`;
  const urlParams = JSON.stringify(prameter);
  console.log(urlParams)
  
  req.open("POST", url, true);
  req.setRequestHeader("Content-type", "application/json");
  req.send(urlParams);

    req.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Got response 200!");
      } else {
        console.log("failed!");
      }
  }
}

function postKeyword(prameter) {
  chrome.extension.getBackgroundPage().console.log("postKeyword");
  let url = baseUrl + `​/api​/v1​/keyword`;
  const urlParams = JSON.stringify(prameter);
  console.log(urlParams)
  
  req.open("POST", url, true);
  req.setRequestHeader("Content-type", "application/json");
  req.send(urlParams);

    req.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        console.log("Got response 200!");
      } else {
        console.log("failed!");
      }
  }
}

/*global chrome*/

chrome.runtime.onInstalled.addListener(function(details){
  // This gets once the extension is installed on browser
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Get called when page URL is updated or refreshed
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.object && request.object.action === "getDOM") {
      console.log((sender.url).substr(32));
      problem_id = +((sender.url).substr(32));
      content = request.object.description;
      input = request.object.input;

      chrome.tabs.sendMessage(tab.id, {content: "changeDOM"}, function(response) {
        if(response) {
          console.log("DOM changed!")
        }
      });

      sendResponse({message: "getDOM FINISHED"});
    }

    if (request.action === "postAnalyzeAlgorithm") {
      postAnalyzeAlgorithm(problem_id, content, input);
      sendResponse({message: "postAnalyzeAlgorithm FINISHED"});
    }

    if (request.action === "postHighlight") {
      postHighlight(problem_id, content, input);
      sendResponse({message: "postHighlight FINISHED"});
    }

    if (request.action === "postKeyword") {
      postKeyword(problem_id, content, input);
      sendResponse({message: "postKeyword FINISHED"});
    }

  });
});

