//https://dog.ceo/api/breeds/image/random
let dogImage = document.getElementById('dogImage')
let newImg = document.getElementById('newImg')
let getNew = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      
      dogImage.innerHTML=`<img src='${json.message}' height = '300' width = '300' alt='random dog image'>`
  })
}
getNew()
newImg.onclick = () => getNew()