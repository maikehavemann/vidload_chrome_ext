var url = document.getElementsByTagName("video")[0].getAttribute("src");
var filename = document.getElementsByClassName("m-with-video")[0].childNodes[0].innerHTML;

chrome.extension.sendRequest([
	{
		url: url,
		filename: filename
	}]
);