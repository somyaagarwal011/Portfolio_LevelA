
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzaqJKTbHNz3B8WvdDaGq5fTI14v5f1b1LJDIB5a7OpUmKu0EIoAqV55IExliY-N_8tVA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent successfully"
        setTimeout (function(){
            msg.innerHTML = ""
          },5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
