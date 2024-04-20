// userlist.js
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Display user list
    const userList = document.getElementById('userList');
    users.forEach(function (user) {
        const listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}`;
        userList.appendChild(listItem);
    });
});
