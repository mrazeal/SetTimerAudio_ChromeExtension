function setAudioFile(){
    var filename = document.getElementById('audiofilename').value;
    chrome.tabs.executeScript(null, {
        code: "var audiofilename = '" + filename + "';"
    }, function() {
        chrome.tabs.executeScript(null, {file: 'content_script.js'});
    });
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    console.log('loaded');
    document.getElementById('savebut').addEventListener('click', setAudioFile);
});