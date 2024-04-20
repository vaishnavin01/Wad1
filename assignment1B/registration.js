// registration.js
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Create user object
    const user = {
        username: username,
        email: email
    };

    // Simulate AJAX POST request (replace with actual AJAX request)
    // For local storage, you can use localStorage.setItem()
    // For database, you would send the data to a server-side script (e.g., PHP) for database insertion
    // Example using local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');

    // Redirect to new page with user list
    window.location.href = 'userlist.html';
});
