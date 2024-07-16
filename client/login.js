function checkData() {
    const name = document.getElementById('nameid').value;
    const password = document.getElementById('passwordid').value;

    const formData = { name, password };

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        window.alert(data.message)
        localStorage.setItem('c_name',data.username)
    }
)
    .catch(error => console.error('Error:', error));
}