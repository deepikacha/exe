function handleFormSubmit(event) {
    event.preventDefault();
    
    // Create the user details object
    let UserDetails = {
        amount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value
    };

    // Use the user's email as the key to store their details in local storage
    localStorage.setItem(UserDetails.category, JSON.stringify(UserDetails));

    // Display the user details on the screen
    displayUser(UserDetails);
  
}

// Function to display user details in the unordered list
function displayUser(user) {
    const userList = document.querySelector('ul');

    // Create a list item for the new user
    const li = document.createElement('li');
    li.textContent = `${user.amount} - ${user.description} - ${user.category}`;

    // Create a delete button for the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Expense';
    deleteButton.style.marginLeft = '10px';

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', () => {
        // Remove the user from local storage using their email as the key
        localStorage.removeItem(user.category);
        
        // Remove the list item from the unordered list
        userList.removeChild(li);
    });

    // Append the delete button to the list item
  
   const editButton = document.createElement('button');
    editButton.textContent = 'Edit Expense';
    editButton.style.marginLeft = '10px';

    // Add an event listener to the edit button
    editButton.addEventListener('click', () => {
        // Remove the user from local storage using their email as the key
        localStorage.removeItem(user.category);
        
        // Remove the list item from the unordered list
        userList.removeChild(li);

        // Populate the form fields with the existing user details
        document.getElementById('amount').value = user.amount;
    document.getElementById('description').value = user.description;
    document.getElementById('category').value = user.category;
    });

    // Append the delete and edit buttons to the list item
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    // Append the list item to the unordered list
    userList.appendChild(li);
}

// Function to display all users from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(localStorage).forEach((key) => {
        const user = JSON.parse(localStorage.getItem(key));
        if (user && user.category) {
            displayUser(user);
        }
    });
});


