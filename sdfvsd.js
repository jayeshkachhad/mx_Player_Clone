const fetchDataButton = document.getElementById('fetch-data-btn');
const dataContainer = document.getElementById('data-container');



// Function to fetch data from the API
async function fetchData() {
    const apiUrl = 'https://slateblue-mallard-743907.hostingersite.com/'; // Example API
    try {
        // Clear previous data
        dataContainer.innerHTML = '<p>Loading...</p>';

        // Fetch data from the API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON
        const data = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';
        let x = getRandNum(5000)
        // Dynamically create and append data to the page
        data.slice(x, x + 10).forEach(item => { // Limit to first 10 items
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.city}</p>
      `;
            dataContainer.appendChild(itemDiv);
        });
    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

// Attach event listener to the button
fetchDataButton.addEventListener('click', fetchData);
// window.addEventListener('load', fetchData)


let enCode = "_6f59938eceaf7a4ed8f06874a9dd1e69"
let vID = 39724
let vidStr = "https://v1.cdnde.com/x1//upload" + enCode + "/" + vID + "/" + "JOPORN_NET_" + vID + "_720p.mp4"

