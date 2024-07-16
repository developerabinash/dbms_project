

    document.addEventListener('DOMContentLoaded', function() {
        fetch('./Products.json')
            .then(response => response.json())
            .then(products => {
                const productsItems = products.map(product => `
                    <div id='card'>
                        <div id='imagecontainer'>
                          <div id='image'>
                             <img src="${product.image}" alt="${product.name}">
                             </div>
                             <div id='title'>${product.title}</div>
                        </div>
                        <div id='details'>
                          <div>${product.description}</div>
                          <div id='category'>category: ${product.category}</div>
                          <div>Rating: ${product.rating.rate}</div>
                          <div>Price: $${product.price} /-</div>
                          <div id='cardbutton'   onclick='orderform(${product.id},${product.price})'>Add to card
                          </div>
                        </div>
                    </div>
                `   
              
            
            ).join('');
                document.getElementById('cardcontainer').innerHTML = productsItems;
             
            })
            .catch(error => console.error('Error loading products:', error));
    });
    