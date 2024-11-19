const dataContainer = document.getElementById('data-container');

let sflbt = document.getElementById('Relod')

function getRandNum(num) {
    return Math.floor((Math.random() * num) + 1)
}

let outDataArray;

async function fetchData() {
    const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/17h1PfYCvaTRnIgk8DHK87y_Owyt45dIsYOIQDmvx82U/values/Sheet1!A1:Z?alt=json&key=AIzaSyAcGS7DdYSnT8bufO-palHIS0kncc4J3zE'; // Example API
    try {
        // Clear previous data
        dataContainer.innerHTML = '<p>Loading...</p>';

        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON
        const data = await response.json();

        // Clear loading message
        dataContainer.innerHTML = '';

        let dataArray = data['values']
        outDataArray = dataArray

        let x = getRandNum(dataArray.length)
        let y = -1;
        // Dynamically create and append data to the page
        dataArray.slice(x, x + 25).forEach(item => { // Limit to first 10 items
            vidStr = "https://bharadwajpro.github.io/m3u8-player/player/#" + item[1]
            // console.log(vidStr)
            y++;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('card');
            itemDiv.style = "width:18rem"
            itemDiv.innerHTML = `
            <div class="card-body flex">
            <img src=${item[2]} alt="thumbnail" id="thumbnail_img" height=150px>
      <p class="card-title" > ${item[0]} </p>
      <p class="card-title" id="vIndex"> ${x + y} </p>
      <a href=${vidStr} class="btn btn-primary play_btn" id="play_bt" alt="${x + y}">Play</a>
    </div>
    </div> 
      `;
            dataContainer.appendChild(itemDiv);
        });

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

// Attach event listener to the button
sflbt.addEventListener('click', fetchData);
