function doSearch(search_target, tab) {
  chrome.tabs.create({
    url: "https://www.google.com/search?tbm=bks&q=" + search_target,
    active: true,
    index: tab.index + 1
  });
}


function selectionHandler(info, tab) {
  var replaced = info.selectionText.replace(/ /g, "+");
  doSearch(replaced, tab);
}


function resetContextMenus() {
  chrome.contextMenus.removeAll(
    function() {
      var id = chrome.contextMenus.create({
        title: "Search Google Books for '%s'",
        contexts: ["selection"],
        onclick: selectionHandler
      });
    }
  );
}

resetContextMenus();
