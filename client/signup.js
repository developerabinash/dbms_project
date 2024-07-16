function sendData() {
    const name = document.getElementById('nameid').value;
    const password = document.getElementById('passwordid').value;

    const formData = { name, password };

    fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('c_id', data.id);
        localStorage.setItem('c_name', data.username);
    }
)
    .catch(error => console.error('Error:', error));
}