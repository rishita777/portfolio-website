
$(document).ready(function(){

const scriptURL = 'https://script.google.com/macros/s/AKfycbxqaMblWqeYC2ed-ywgYNPWcFf62YV_GjHkV15zHw7QYGri6r1kd9Z1MH8mRI8B4fiTVA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })


var typed = new Typed(".typing", {
    strings: ["Frontend Developer From Kolkata. ","Full Stack Developer From Kolkata.","Website Designer From Kolkata."],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true
});


var typed = new Typed(".kolkata", {
    strings: [" From Kolkata. ","From Kolkata.","From Kolkata."],
    typeSpeed: 110,
    backSpeed: 60,
    loop: true
});

});




