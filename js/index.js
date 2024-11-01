const myName = document.getElementById('name')
const email  = document.getElementById('email')
















function subscribe()  {
  

    const buttonElement = document.querySelector('.submit')
   


    if(buttonElement.innertext === 'subscribe') {
        buttonElement.innerHTML = 'subscribed';
    }
    else{
        buttonElement.innerHTML = 'subscribe';
    }

}