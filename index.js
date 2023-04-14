// Test 1 - Send Data
// In submitData, write a valid POST request to http://localhost:3000/users using fetch(). This request should include:

// The destination URL
// Headers for 'Content-Type' and 'Accept', both set to 'application/json'
// A body with the name and email passed in as arguments to submitData. 
// These should be assigned to name and email keys within an object. This object should then be stringified.


function submitData(name, email) {
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
    })
}) .then(res => res.json())
   .then(data => {
    console.log(data)
    const userId = data.id
    const newUser = document.createElement("p")
    newUser.innerHTML = userId;
    document.body.appendChild(newUser)
})
   .catch(error => {
    console.log(error)
    const newError = document.createElement("p")
    newError.innerHTML = error.message
    document.body.appendChild(newError)
})
}

