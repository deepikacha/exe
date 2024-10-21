
    
    
    // const myForm = document.getElementById("userForm"); 
    // myForm.addEventListener('submit', function(e) {
      function  handleFormSubmit(e){
    e.preventDefault(); // Prevent the default form submission
    localStorage.setItem('Username', e.target.username.value);
    localStorage.setItem('Email', e.target.email.value);
    localStorage.setItem('Phone', e.target.phone.value);
    }
    
    
