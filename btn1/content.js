(async () => {
  const path = window.location.pathname.split('/');
  let steamID = null;

  if (path[1] === 'profiles' && path[2]) {
    steamID = path[2];
  } else if (path[1] === 'id' && path[2]) {
    const scripts = document.getElementsByTagName('script');

    for (const script of scripts) {
      const text = script.textContent;
      if (text.includes('g_rgProfileData')) {
        const match = text.match(/g_rgProfileData\s*=\s*(\{.*\});/);
        if (match && match[1]) {
          try {
            const profileData = JSON.parse(match[1]);
            steamID = profileData.steamid;
          } catch (e) {
            console.error('Ошибка парсинга JSON:', e);
          }
        }
        break;
      }
    }
  }

  if (steamID) {
    observeAndInsertButton(steamID);
  }

function observeAndInsertButton(id) {
  const observer = new MutationObserver(() => {
    const statusBlock = document.querySelector('.responsive_status_info');

    if (statusBlock && !document.getElementById('cybershoke-btn')) {
      const btn = document.createElement('button');
      btn.id = 'cybershoke-btn';
      btn.textContent = 'Перейти на Cybershoke';

      btn.style.display = 'inline-block';
      btn.style.padding = '10px 20px';
      btn.style.backgroundColor = '#6080ff';
      btn.style.color = '#fff';
      btn.style.fontWeight = 'bold';
      btn.style.border = 'none';
      btn.style.borderRadius = '4px';
      btn.style.cursor = 'pointer';
      btn.style.fontFamily = 'Arial, sans-serif';
      btn.style.transition = 'background 0.3s ease';

      btn.addEventListener('mouseenter', () => {
        btn.style.backgroundColor = '#374da8ff';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.backgroundColor = '#6080ff';
      });

      btn.onclick = () => {
        window.open(`https://cybershoke.net/${id}`, '_blank');
      };

      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';
      wrapper.style.justifyContent = 'center';
      wrapper.style.margin = '15px 0';
      wrapper.appendChild(btn);

      // Вставляем после блока статуса
      statusBlock.parentNode.insertBefore(wrapper, statusBlock.nextSibling);

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}



})();
