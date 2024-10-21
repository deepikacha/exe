const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');
function addEditButtonsToExistingFruits() {
    const existingFruitItems = document.querySelectorAll('.fruit');
    existingFruitItems.forEach(item => {
        // Create an Edit button
        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.textContent = 'Edit';
        
        // Append the Edit button to each existing fruit
        item.appendChild(editButton);
    });
}
addEditButtonsToExistingFruits();
form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById('fruit-to-add');
    const newLi=document.createElement('li');
    newLi.innerHTML=fruitToAdd.value+'<button class="delete-btn">x</button>';
    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    newLi.appendChild(editButton); // Append edit button to the new fruit

  
    fruits.appendChild(newLi);
})
fruits.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruitToDelete=event.target.parentElement;
        fruits.removeChild(fruitToDelete);
    };
})