
// apis
const baseUrl = "http://abc.pshelper.de";
const req = new XMLHttpRequest();
let problem_id = null;
let content = null;
let input = null;

function postHighlight(prameter) {
  console.log("postHighlight");
  // let url = baseUrl + `/api/v1/divide_highlight`;
  // const urlParams = JSON.stringify(prameter);
  // console.log(urlParams)
  
  // req.open("POST", url, true);
  // req.setRequestHeader("Content-type", "application/json");
  // req.send(urlParams);

  //   req.onreadystatechange = function() { // Call a function when the state changes.
  //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
  //       console.log("Got response 200!");
  //     } else {
  //       console.log("failed!");
  //     }
  // }
  return { 
    "problem_id": 0,
    "problem_url": "string",
    "sentence_list": [
      "string1", "string2", "string3", "string4"
    ]
  };
}

function postAnalyzeAlgorithm(prameter) {
  console.log("postAnalyzeAlgorithm");
  // let url = baseUrl + `/api/v1/analyze`;
  // const urlParams = JSON.stringify(prameter);
  // console.log(urlParams)
  
  // req.open("POST", url, true);
  // req.setRequestHeader("Content-type", "application/json");
  // req.send(urlParams);

  //   req.onreadystatechange = function() { // Call a function when the state changes.
  //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
  //       console.log("Got response 200!");
  //     } else {
  //       console.log("failed!");
  //     }
  // }

  return { 
    "problem_id": 0,
    "problem_url": "string",
    "sentence_list": [
      "algorighm1","algorithm2", "algorithm3"
    ]
  };
}

function postKeyword(prameter) {
  console.log("postKeyword");
  // let url = baseUrl + `​/api​/v1​/keyword`;
  // const urlParams = JSON.stringify(prameter);
  // console.log(urlParams)
  
  // req.open("POST", url, true);
  // req.setRequestHeader("Content-type", "application/json");
  // req.send(urlParams);

  //   req.onreadystatechange = function() { // Call a function when the state changes.
  //     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
  //       console.log("Got response 200!");
  //     } else {
  //       console.log("failed!");
  //     }
  // }

  return {
    "problem_id": 1007,
    "problem_url": "https://www.acmicpc.net/problem/1007",
    "keyword_list": {
          "길이": {
              "Mathematics": "21%",
              "Graph_theory": "19%",
              "Data_structures": "20%",
              "Greedy": "10%",
              "String": "25%",
              "Stack": "2%"
          },
          "집합": {
              "Mathematics": "53%",
              "Data_structures": "46%"
          },
          "최솟값": {
              "Mathematics": "12%",
              "Dynamic_programming": "25%",
              "Implementation": "10%",
              "Graph_theory": "21%",
              "Greedy": "15%",
              "Breadth_first_search": "8%",
              "Depth_first_search": "2%",
              "Priority_queue": "3%"
          },
          "벡터": {
              "Mathematics": "100%"
          },
          "출력": {
              "Implementation": "70%",
              "String": "29%"
          },
          "때": {
              "Implementation": "100%"
          },
          "모든": {
              "Graph_theory": "65%",
              "Breadth_first_search": "13%",
              "Depth_first_search": "10%",
              "Dijkstras": "9%"
          },
          "시작": {
              "Graph_theory": "67%",
              "Breadth_first_search": "22%",
              "Depth_first_search": "10%"
          },
          "점": {
              "Graph_theory": "33%",
              "Data_structures": "39%",
              "Graph_traversal": "19%",
              "Depth_first_search": "6%"
          },
          "작성": {
              "String": "100%"
          },
          "개수": {
              "String": "100%"
          },
          "프로그램": {
              "Breadth_first_search": "62%",
              "Depth_first_search": "37%"
          },
          "절반": {
              "Divide_and_conquer": "100%"
          }
      },
      "highted_text": "평면 상에 N개의 <mark>점</mark>이 찍혀있고, 그 <mark>점</mark>을 <mark>집합</mark> P라고 하자. 하지만 <mark>집합</mark> P의 <mark>벡터</mark> 매칭은 <mark>벡터</mark>의 <mark>집합</mark>인데, <mark>모든</mark> <mark>벡터</mark>는 <mark>집합</mark> P의 한 <mark>점</mark>에서 <mark>시작</mark>해서, 또 다른 <mark>점</mark>에서 끝나는 <mark>벡터</mark>의 <mark>집합</mark>이다. 또, P에 속하는 <mark>모든</mark> <mark>점</mark>은 한 번씩 쓰여야 한다.V에 있는 <mark>벡터</mark>의 <mark>개수</mark>는 P에 있는 <mark>점</mark>의 <mark>절반</mark>이다.평면 상의 <mark>점</mark>이 주어졌을 <mark>때</mark>, <mark>집합</mark> P의 <mark>벡터</mark> 매칭에 있는 <mark>벡터</mark>의 합의 <mark>길이</mark>의 <mark>최솟값</mark>을 <mark>출력</mark>하는 <mark>프로그램</mark>을 <mark>작성</mark>하시오."
  };
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
      const result = postAnalyzeAlgorithm({problem_id, content, input});
      chrome.tabs.sendMessage(tab.id, {content: "addAlgorithmDOM", result : result.sentence_list}, function(response) {
        if(response) {
          console.log(response);
        }
      });
      sendResponse({message: "postAnalyzeAlgorithm FINISHED"});
    }

    if (request.action === "postHighlight") {
      const result = postHighlight({problem_id, content, input});
      chrome.tabs.sendMessage(tab.id, {content: "addHighlightdDOM", result: result.sentence_list}, function(response) {
        if(response) {
          console.log(response);
        }
      });
      sendResponse({message: "postHighlight FINISHED"});
    }

    if (request.action === "postKeyword") {
      const result = postKeyword({problem_id, content, input});
      chrome.tabs.sendMessage(tab.id, {content: "addKeywordDOM", result}, function(response) {
        if(response) {
          console.log(response);
        }
      });
      sendResponse({message: "postKeyword FINISHED"});
    }

  });
});

