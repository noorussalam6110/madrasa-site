// Paste your deployed Apps Script Web App URL here
const GAS_URL = "PASTE_YOUR_GAS_WEB_APP_URL_HERE";

fetch(GAS_URL)
  .then(res => res.json())
  .then(data => {
    if(data.length === 0) return;

    // Dynamically create table headers
    const headerRow = document.getElementById('table-headers');
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });

    // Dynamically create table rows
    const tbody = document.getElementById('table-body');
    data.forEach(item => {
      const tr = document.createElement('tr');
      Object.values(item).forEach(val => {
        const td = document.createElement('td');
        td.textContent = val;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  })
  .catch(err => console.error(err));
