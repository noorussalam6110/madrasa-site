// Paste your deployed Apps Script Web App URL here
const GAS_URL = "https://script.google.com/macros/s/AKfycbwTIBl-Wf49zfZEGhZWe61JlYosHl76WxxzuMZCZFUhOx9EF2wT9v_H0f0yTp6WSYg0ug/exec";

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
