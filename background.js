chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const curr = tabs[0];
    if (!curr) throw new Error("No current page found");

    chrome.tabs.update(curr.id, {
      url: "https://archive.today/newest/" + curr.url,
    });
  });
});
