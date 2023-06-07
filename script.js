const baseURL = 'https://cat-fact.herokuapp.com';

// Function to make a GET request to the provided endpoint
function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    fetch(`${baseURL}${endpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Function to display the cat facts on the webpage
function displayCatFacts(facts) {
  const factList = document.getElementById('fact-list');
  factList.innerHTML = '';

  facts.forEach(fact => {
    const li = document.createElement('li');
    li.textContent = fact.text;
    factList.appendChild(li);
  });
}

// Fetch cat facts and display them on the webpage
fetchData('/facts')
  .then(data => {
    displayCatFacts(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
