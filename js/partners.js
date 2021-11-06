const renderItems = (data) => {
    console.log(data)
}

fetch('https://delivery-test-5d47e-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error)
    })
