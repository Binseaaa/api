let searchQuery = window.location.search
let urlParams = new URLSearchParams(searchQuery)

let prodId = urlParams.get('product')

fetch('https://dummyjson.com/products/' + prodId)
.then((response) => response.json())
.then((data) => {

    document.getElementById('image').setAttribute('src', data.thumbnail)

    let imageDiv = document.getElementById('images')
    
    data.images.forEach((imageSrc) => {
        let image = document.createElement('img')
        image.className = 'img'
        image.src = imageSrc;

        imageDiv.appendChild(image)
    })
    document.getElementById('category').innerText = data.category
    document.getElementById('title').innerText = data.title
    document.getElementById('stock').innerText = data.stock
    document.getElementById('brand').innerText = data.brand
})
