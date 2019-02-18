/*
    Author: Abbey
    Name: submitLogin.js
    Purpose: this file will have a click event that will take the value of the login form
             and then open up the dashboard of the specific user using username and password or just one??
*/



const submitLoginInfo = () => {
    document.querySelector("#loginButton").addEventListener("click", () => {
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        APIManager.getUsers() //should this be where it takes the argument?
        //.then(somehow get the user by the username or password or both)
        //is this an if else
        //if (users.username or users.password === pull that users information up)//also, will we be putting the session storage inside this event listener
        //else (alert box that reads 'not a valid user, please register. should register button reappear??)
    })
}

