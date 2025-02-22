const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu= document.getElementById("sidemenu");

function closemenu(){
  console.log("Hello");
  sidemenu.style.right="-200px";
}

function openmenu(){
  console.log("Hii");
    sidemenu.style.right="0";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzSS0TQsW-ON6F18T_zywywR3kgurq5paQpqrdDDaDuSmsKdMoXRA1ql9cl6-9qUqfI/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message Sent Successfully";
        setTimeout(function(){
          msg.innerHTML=""
        },2000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })


