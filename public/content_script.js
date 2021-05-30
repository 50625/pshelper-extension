// // This will send the #someSelector value to popup
// chrome.runtime.sendMessage({
//   type: 'OYO_PLUGIN_EVALUATED_CONFIG', 
//   configData: getDataFromDOM('#div')
// });

chrome.runtime.sendMessage({message: "hello"}, function(response) {
  console.log(response.message);
});

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request.message === "hi")
      sendResponse({message: "hi to you"});
  });