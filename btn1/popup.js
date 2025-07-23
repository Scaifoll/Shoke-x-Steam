document.getElementById('go').addEventListener('click', () => {
  chrome.storage.local.get(['steamID'], result => {
    if (result.steamID) {
      let url = `https://cybershoke.net/${result.steamID}`;
      chrome.tabs.create({ url: url });
    } else {
      alert('SteamID не найден.');
    }
  });
});
