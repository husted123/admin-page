// Fetch contact info
fetch('http://localhost:4000/api/contact')
  .then(response => response.json())
  .then(data => printContact(data))

// Display in placeholders
let printContact = (data) => {
  document.getElementById("number").placeholder = data.number
  document.getElementById("email").placeholder = data.email
};

// Fetch image list
fetch('http://localhost:4000/api/img')
 .then(response => response.json())
 .then(data => printImg(data));

// Display in dom
function printImg(data){
  data.map(img => {
    // Container for image card
    let container = document.createElement("div")
    document.getElementById("imgContainer").appendChild(container)

    //Image
    let image = document.createElement("img")
    image.setAttribute('src', 'http://localhost:4000' + img.url);
    image.setAttribute('alt', img.alt);
    image.setAttribute('tag', img.tag);
    container.appendChild(image)

    // Display URL
    let urlDisplay = document.createElement("div");
    urlDisplay.innerText = 'Url: ' + img.url;
    container.appendChild(urlDisplay)

    //Display Alt text
    let altDisplay = document.createElement("div");
    altDisplay.innerText = 'alt: ' + img.alt;
    container.appendChild(altDisplay)

    // Display tag
    let tagDisplay = document.createElement("div");
    tagDisplay.innerText = 'tag: ' + img.tag;
    container.appendChild(tagDisplay)

    // Delte btn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Slet billede'
    deleteBtn.onclick = () => {
        deleteImg(img.url, ).then(data => console.log(data))
        container.style.display = 'none';
    }
    container.appendChild(deleteBtn)
    
  })
}

async function deleteImg(data){
    const response = await(fetch('http://localhost:4000/api/img', {
        method: 'delete',
        body: JSON.stringify({'url': data}),
        headers: {
            "Content-Type": "application/json"
        }
    }))
    console.log(response.json())
}