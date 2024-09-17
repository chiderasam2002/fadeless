
const button = document.getElementById('submit')
const myName   = document.getElementById('name')
const email  = document.getElementById('email')




form.addEventListener('submit', (e) => {
  

  if(myName === '' || email === ''){
    e.preventDefault()
  }

 


   button.addEventListener("click", SendAlart)



   function SendAlart(){
      alert("Subscribed successfully")
  }


})


