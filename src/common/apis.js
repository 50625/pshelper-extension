// import axios from 'axios';
const baseUrl = "abc.pshelper.de";
const req = new XMLHttpRequest();

/*global chrome*/
export function postProblem() {
  chrome.extension.getBackgroundPage().console.log("postProblem");
  const urlParams = `/problem`;
  req.open("POST", baseUrl, true);
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send(urlParams);

    req.onreadystatechange = function() { // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        chrome.extension.getBackgroundPage().console.log("Got response 200!");
      } else {
        chrome.extension.getBackgroundPage().console.log("failed!");
      }
  }
}




  