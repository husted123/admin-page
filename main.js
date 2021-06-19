fetch('https://eksamen-api.herokuapp.com/api/contact')
  .then(response => response.json())
  .then(data => printContact(data))
  
  

  let printContact = (data) => {
    document.getElementById("number").placeholder = data.number
    document.getElementById("email").placeholder = data.email
  };


fetch('https://eksamen-api.herokuapp.com/api/img')
 .then(response => response.json())
 .then(data => printImg(data));

function printImg(data){
  data.map(img => {
    console.log(img)
    let container = document.createElement("div")

    let image = document.createElement("img")
    image.setAttribute('src', 'https://eksamen-api.herokuapp.com' + img.url);
    image.setAttribute('alt', img.alt);
    image.setAttribute('tag', img.tag);

    let urlDisplay = document.createElement("div");
    urlDisplay.innerText = 'Url: ' + img.url;

    let altDisplay = document.createElement("div");
    altDisplay.innerText = 'alt: ' + img.alt;

    let tagDisplay = document.createElement("div");
    tagDisplay.innerText = 'tag: ' + img.tag;
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = 'Slet billede'
    /*deleteBtn.onclick = () => deleteImg()

    let deleteData = {
      url: img.url,
    }

    function deleteImg(){
      fetch('https://eksamen-api.herokuapp.com/api/img', {
        method: "delete",
        body: JSON.stringify(deleteData)
      })
      .catch(err => console.log(err))
    } */

    document.getElementById("imgContainer").appendChild(container)
    container.appendChild(image)

    container.appendChild(urlDisplay)
    container.appendChild(altDisplay)
    container.appendChild(tagDisplay)
    container.appendChild(deleteBtn)
    
  })
}



  
  
