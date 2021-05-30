/*global chrome*/

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    
    // FIXME: get rid of consoles
    if (document.getElementById('problem_description')) console.log(document.getElementById('problem_description'));
    if (document.getElementById('problem_input')) console.log(document.getElementById('problem_input'));
    if (document.getElementById('problem_output')) console.log(document.getElementById('problem_output'));
    
    if (request.text && (request.text == "getDOM")) {
      sendResponse({ 
        description: document.getElementById('problem_description'),
        input: document.getElementById('problem_input'),
        output: document.getElementById('problem_output')
      });
    }
  }
);

