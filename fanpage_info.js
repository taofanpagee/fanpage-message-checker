// Import file api.js
const apiScript = document.createElement('script');
apiScript.src = 'api.js';

// Import file display.js
const displayScript = document.createElement('script');
displayScript.src = 'display.js';

let scriptsLoaded = 0;

function onScriptLoad() {
  scriptsLoaded++;

  if (scriptsLoaded === 2) {
    init();
  }
}

apiScript.addEventListener('load', onScriptLoad);
displayScript.addEventListener('load', onScriptLoad);

document.head.appendChild(apiScript);
document.head.appendChild(displayScript);

function init() {
  console.log('Init function called');

  async function loadFanpages(appID, appSecret, accessToken) {
    console.log("loadFanpages function called");
    console.log("Access Token:", accessToken);

    try {
      const pages = await getPages(accessToken);
      console.log("Pages:", pages);
      displayFanpageInfo(pages);
      // Ẩn thông báo lỗi nếu có
      document.getElementById('error-message').classList.add('d-none');
    } catch (error) {
      console.error('Lỗi khi tải fanpages:', error);
      // Hiển thị thông báo lỗi
      const errorMessageElement = document.getElementById('error-message');
      errorMessageElement.textContent = 'Có lỗi xảy ra khi tải fanpages. Vui lòng kiểm tra lại thông tin và thử lại.';
      errorMessageElement.classList.remove('d-none');
    }
  }

  // Lắng nghe sự kiện submit form để tải danh sách fanpage
  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const appID = document.getElementById('appID').value;
    const appSecret = document.getElementById('appSecret').value;
    const accessToken = document.getElementById('accessToken').value;

    if (!appID || !appSecret || !accessToken) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    loadFanpages(appID, appSecret, accessToken);
  });

  // Lắng nghe sự kiện click vào nút Load để tải danh sách fanpage
  document.getElementById('loadButton').addEventListener('click', () => {
    const appID = document.getElementById('appID').value;
    const appSecret = document.getElementById('appSecret').value;
    const accessToken = document.getElementById('accessToken').value;

    if (!appID || !appSecret || !accessToken) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    loadFanpages(appID, appSecret, accessToken);
  });
}
