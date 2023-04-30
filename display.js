function displayFanpageInfo(pages) {
    let table = document.getElementById('fanpageTable').querySelector('tbody');
    table.innerHTML = '';
  
    for (let i = 0; i < pages.length; i++) {
      let row = table.insertRow(-1);
      let sttCell = row.insertCell(0);
      let idCell = row.insertCell(1);
      let nameCell = row.insertCell(2);
      let conversationsCell = row.insertCell(3);
      let followCell = row.insertCell(4);
      let likeCell = row.insertCell(5);
      let publicCell = row.insertCell(6);
      let linkCell = row.insertCell(7);
  
      sttCell.innerHTML = i + 1;
      idCell.innerHTML = pages[i].id;
      nameCell.innerHTML = pages[i].name;
      conversationsCell.innerHTML = pages[i].conversations.unread_count ?? 0;
      followCell.innerHTML = pages[i].fan_count ?? 0;
      likeCell.innerHTML = pages[i].new_like_count ?? 0;
      publicCell.innerHTML = "Công khai";
  
      // Các đoạn mã khác để hiển thị thông tin và tạo liên kết
    }
  }
  export { displayFanpageInfo };
