var menuItem = {
  "id": "Bing Dict",
  "title": "Bing Dict '%s'",
  "contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
  console.log(clickData);       // debug
  chrome.tabs.create({
    url: "https://www.bing.com/dict/search?q=" + encodeURIComponent(clickData.selectionText)
  })
})
