chrome.extension.onRequest.addListener(function(links) {
  var link = links[0]

  chrome.downloads.download({url: link["url"], filename: link["filename"]},
    function(id) {
      window.close()
  });
})

window.onload = function(){
  //document.getElementById("changeColor").onclick = function(){
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id},
                        function(activeTabs) {
        chrome.tabs.executeScript(
          activeTabs[0].id, {file: 'extract_link.js', allFrames: true});
      });
    });
  //}
}