
const button = document.getElementById('submit')
const myName   = document.getElementById('name')
const email  = document.getElementById('email')




form.addEventListener('submit',  (e) => {
  

  if(myName === '' || email === ''){
   
    
    e.preventDefault()
  }

  else{
    alert('subscribed successfully')
    
  }

 


  

})


