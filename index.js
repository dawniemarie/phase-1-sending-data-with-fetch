function submitData(name, email) { /*function when posting to name and email*/
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        "name": name,
        "email": email
    })
}
return fetch("http://localhost:3000/users", configurationObject) /*response to and from server*/
    .then(response => response.json())
    .then(body => newContact(body.id))
    .catch(response => document.body.append("Unauthorized Access"))
}
function newContact(newID){  /*handles post request and retrieves new ID*/
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append(message)
}