function handleFormSubmit(event){
    event.preventDefault();
    let UserDetails = {
        username : event.target.username.value,
        email : event.target.email.value,
        phone : event.target.phone.value
    };

 let obj=JSON.stringify(UserDetails);
 localStorage.setItem('User Details',obj);
  }
