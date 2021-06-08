/*global chrome*/

let description = null;
let input = null;
let output = null;
let problem_body = null;

if (document.getElementById('problem_description')) description = document.getElementById('problem_description').innerText;
if (document.getElementById('problem_input')) input = document.getElementById('problem_input').innerText;
if (document.getElementById('problem_output')) output = document.getElementById('problem_output').innerText;

if (description && input && output) {
  chrome.runtime.sendMessage({object: {action: "getDOM", description, input, output}}, function(response) {
    console.log(response.message);
  });

}

if (document.getElementById('problem-body')) {
  problem_body = document.getElementById('problem-body').innerHTML;
  document.getElementById('problem-body').innerHTML = `<div class="col-md-12">
  <section id="description" class="problem-section">
  <div class="headline">
  <h2 style="border-bottom: 2px solid rgb(218,71,103) !important;">알고리즘</h2>
  </div>
  <div id="problem_description" class="problem-text">
  <p>Mathematics</p>
  </div>
  </section>
</div>` + problem_body;
}

// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {  
// 	if(request.content && request.content === 'changeDOM') {
//     let html_description = document.getElementById('problem_description')
//     html_description.getElementsByTagName('p')[0].style.color = "red";
// 		sendResponse({content: "changeDOM FINISHED!"});
// 		return true; // This is required by a Chrome Extension
// 	}
// })