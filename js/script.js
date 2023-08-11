document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-3 md-3';
          card.innerHTML = `
        
        
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name:${item.name}</h5>
              <p class="card-text">Email:${item.email}</p>
              <p class="card-text">Address:${item.address.street}</p>
              
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
 
});
