// Paste your deployed Apps Script Web App URL here
const GAS_URL = "https://script.google.com/macros/s/AKfycbziBrj7fJvLRCGhK7TsrnveQUF8HfStB2EMTlw6DO5OAPxb9BacQn_rS5OGnhjlxUFwaw/exec";

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
