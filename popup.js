chrome.extension.onRequest.addListener(function(links) {
  var link = links[0]
  var url = link["url"];
  var filename = link["filename"].replace(/[^a-zA-Z0-9]/gi, '_').toLowerCase() + ".mp4";

  chrome.downloads.download({url: url, filename: filename},
    function(id) {
      window.close()
  });
})

window.onload = function(x){
    chrome.windows.getCurrent(function (currentWindow) {
      chrome.tabs.query({active: true, windowId: currentWindow.id},
                        function(activeTabs) {
        chrome.tabs.executeScript(
          activeTabs[0].id, {file: 'extract_link.js', allFrames: true});
      });
    });
}