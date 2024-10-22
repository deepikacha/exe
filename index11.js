function handleFormSubmit(event) {
    event.preventDefault();
    
    // Create the user details object
    let UserDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value
    };

    // Use the user's email as the key to store their details in local storage
    localStorage.setItem(UserDetails.email, JSON.stringify(UserDetails));

    // Display the user details on the screen
    displayUser(UserDetails);
}

// Function to display user details in the unordered list
function displayUser(user) {
    const userList = document.getElementById('userList') || createUserList();
    
    // Create a list item for the new user
    const li = document.createElement('li');
    li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

    // Append the new user to the list
    userList.appendChild(li);
}

// Function to create the unordered list if it doesn't exist
function createUserList() {
    const userList = document.createElement('ul');
    userList.id = 'userList';
    document.body.appendChild(userList);
    return userList;
}

// Function to display all users from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(localStorage).forEach((key) => {
        const user = JSON.parse(localStorage.getItem(key));
        if (user && user.email) {
            displayUser(user);
        }
    });
});

module.exports = handleFormSubmit;
