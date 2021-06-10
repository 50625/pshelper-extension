
// apis
const baseUrl = "http://abc.pshelper.de";
let problem_id = null;
let content = null;
let input = null;

function postHighlight(prameter) {
  console.log("postHighlight");
  const req = new XMLHttpRequest();
  let url = baseUrl + `/api/v1/divide_highlight`;
  const urlParams = JSON.stringify(prameter);
  
  req.open("POST", url, true);
  req.responseType='json';
  req.setRequestHeader("Content-type", "application/json");

  req.onload = () => {
    var data = req.response;
    console.log(data);
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {content: "addHighlightdDOM", result : data.sentence_list}, function(response) {
        if(response) {
          console.log(response);
        }
      });
    });
  };
  req.send(urlParams);
}

function postAnalyzeAlgorithm(prameter) {
  console.log("postAnalyzeAlgorithm");
  const req = new XMLHttpRequest();
  let url = baseUrl + `/api/v1/analyze`;
  const urlParams = JSON.stringify(prameter);

  req.open("POST", url, true);
  req.responseType='json';
  req.setRequestHeader("Content-type", "application/json");
  req.onload = () => {
    var data = req.response;
    console.log(data);
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {content: "addAlgorithmDOM", result : data["algorithm_type"]}, function(response) {
        if(response) {
          console.log(response);
        }
      });
    });
  };
  req.send(urlParams);
}

function postKeyword(prameter) {
  console.log("postKeyword");
  const req = new XMLHttpRequest();
  let url = baseUrl + `/api/v1/keyword`;
  const urlParams = JSON.stringify(prameter);
  
  req.open("POST", url, true);
  req.responseType='json';
  req.setRequestHeader("Content-type", "application/json");
  req.onload = () => {
    var data = req.response;
    console.log(data);
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {content: "addKeywordDOM", result : {keyword_list : data.keyword_list, highlighted_text: data.highlighted_text}}, function(response) {
        if(response) {
          console.log(response);
        }
      });
    });
  };
  req.send(urlParams);
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
      sendResponse({message: "getDOM FINISHED"});
    }

    if (request.action === "postAnalyzeAlgorithm") {
      if (problem_id && content && input) {
        postAnalyzeAlgorithm({problem_id, content, input});
        sendResponse({message: "postAnalyzeAlgorithm STARTED"});
      }
    }

    if (request.action === "postHighlight") {
      if (problem_id && content && input) {
        postHighlight({problem_id, content, input});
        sendResponse({message: "postHighlight STARTED"});
      }
    }

    if (request.action === "postKeyword") {
      if (problem_id && content && input) {
        postKeyword({problem_id, content, input});
        sendResponse({message: "postKeyword STARTED"});
      }
    }
  });
});

