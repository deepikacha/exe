document.addEventListener('DOMContentLoaded', () => {
    // Add the description input element dynamically
    const form = document.querySelector('form');
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'description';
    descriptionInput.placeholder = 'Enter fruit description...';
    form.insertBefore(descriptionInput, form.querySelector('button'));

    // Handle form submission to add fruit and description
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fruitName = document.getElementById('fruit-to-add').value.trim();
        const fruitDescription = document.getElementById('description').value.trim();

        // Ensure both fruit name and description are provided
        if (fruitName && fruitDescription) {
            addFruit(fruitName, fruitDescription);
            document.getElementById('fruit-to-add').value = '';
            document.getElementById('description').value = '';
        } else {
            alert("Please provide both a fruit name and a description.");
        }
    });

    // Function to add fruit to the list
    function addFruit(name, description) {
        const fruitList = document.querySelector('.fruits');

        const li = document.createElement('li');
        li.className = 'fruit';

        // Add name and delete button
        li.innerHTML = `${name} <button class="delete-btn">x</button>`;

        // Add description in italics
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.style.fontStyle = 'italic';
        descriptionParagraph.textContent = description;
        li.appendChild(descriptionParagraph);

        fruitList.appendChild(li);

        // Add event listener to the delete button
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });
    }

    // Filter fruits based on input
    const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (event) {
    const textEntered = event.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName("fruit");

    for (let i = 0; i < fruitItems.length; i++) {
        const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();

        // Check if a description paragraph exists before trying to access its text
        const descriptionParagraph = fruitItems[i].querySelector('p');
        const fruitDescriptionText = descriptionParagraph
            ? descriptionParagraph.textContent.toLowerCase()
            : '';

        // Check if either the fruit name or description contains the entered text
        if (
            currentFruitText.includes(textEntered) ||
            fruitDescriptionText.includes(textEntered)
        ) {
            fruitItems[i].style.display = ""; // Show the item
        } else {
            fruitItems[i].style.display = "none"; // Hide the item
        }
    }
});

    
});
