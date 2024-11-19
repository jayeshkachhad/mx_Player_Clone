function getRandNum(num) {
    return Math.floor((Math.random() * num) + 1)
}

const vidFormat = {
    id: 1,
    name: "name",
    city: "city",
    pan: "pan"
}

console.log(typeof (vidFormat))

let names = []

const url = "https://slateblue-mallard-743907.hostingersite.com/"

let p = fetch(url)
p.then((value1) => {
    return value1.json()
}).then((value2) => {
    var xu = value2;
    // console.log(typeof (xu));
    // console.log(xu[getRandNum(5000)]['name']);
    // names[0] = xu[getRandNum(5000)]['name'];
    names.push(xu[501]['name'])
    names.push(xu[501]['city'])
    names.push(xu[501]['pan'])
    // console.log(typeof (xu[2000]));
    // console.log(xu);
    // return xu[0]['name']
})

console.log(names[0], typeof (names[0]))


const fetchDataButton = document.getElementById('fetch-data-btn');
const dataContainer = document.getElementById('tiles-con');


async function fetchData() {
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

            let decoderStr = item.pan;
            let vID = decoderStr.slice(13, 18)
            let enCode = decoderStr.slice(26, 59)
            let vidStr = "https://v2.cdnde.com/x2//upload" + enCode + "/" + vID + "/" + "JOPORN_NET_" + vID + "_720p.mp4"
            console.log(vidStr)

            itemDiv.classList.add('card');
            itemDiv.style = "width:18rem"
            itemDiv.innerHTML = `
            <video src="${vidStr}" class="card-img-top" muted controls></video>
            <div class="card-body flex">
      <h5 class="card-title" > ${item.name} </h5>
      <p class="card-text">${item.pan}</p>
      <a href="#" class="btn btn-primary">Play</a>
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
fetchDataButton.addEventListener('click', fetchData);

// window.addEventListener('load', fetchData)
// object.onload = function(){myScript};


let enCode = "_6f59938eceaf7a4ed8f06874a9dd1e69"
let vID = 39724

// console(names[2])
