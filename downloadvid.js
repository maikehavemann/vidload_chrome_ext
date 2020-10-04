var x = document.getElementsByTagName("video")[0].getAttribute("src");
var title = document.getElementsByClassName("m-with-video")[0].childNodes[0].innerHTML
function downloadImage(link, vidtitle) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', link, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.target = '_blank';
      tag.download = vidtitle + '.mp4';
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.onerror = err => {
      alert('Failed to download picture');
    };
    xhr.send();
  }
  downloadImage(x, title)