fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((data) => {

    let productsDiv = document.getElementById('products');

    data.products.forEach((product) => {
        let productDiv = document.createElement('a')
        productDiv.href="Products/prod.html?product=" + product.id
        productDiv.className = 'box'

        let categoryH4 = document.createElement('h4')
        categoryH4.className = 'category'

        let descriptionDiv = document.createElement('div')
        descriptionDiv.className = 'description'

        let priceDiv = document.createElement('div')
        priceDiv.className = 'price'

        let image = document.createElement('img')
        image.className = 'image'
        image.src = product.images[0];

        descriptionDiv.innerText = product.description;
        priceDiv.innerText = product.price;

        productDiv.appendChild(image)
        productDiv.append(categoryH4)
        productDiv.append(descriptionDiv)
        productDiv.append(priceDiv)

        productsDiv.append(productDiv)
    });
});
