function handleorder(){
   const quantity = document.getElementById('quantityid').value;
    const name = document.getElementById('o_nameid').value;
    const phone = document.getElementById('o_phoneid').value;
    const email = document.getElementById('o_emailid').value;
    const address = document.getElementById('o_addressid').value;
    const unit_price = localStorage.getItem('productPrice');
    const product_id = localStorage.getItem('productId');
    const c_id = localStorage.getItem('c_id');
    const total_price=document.getElementById('totalprice').innerHTML;

    const orderformData = [{c_id,name,address,phone,email},{product_id,quantity,unit_price,total_price}];

    fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderformData)
    })
    .then(response => response.json())
    .then(data => window.alert(data.message)
)
    .catch(error => console.error('Error:', error));
    
}