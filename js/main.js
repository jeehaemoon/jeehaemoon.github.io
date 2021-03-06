const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');
const htmlSection = document.querySelector('.html');
const cssSection = document.querySelector('.css');
const jsSection = document.querySelector('.javascript');
const reactSection = document.querySelector('.react');


window.addEventListener('scroll',()=> {
  let current='';
  sections.forEach(section=> {
    const sectionTop= section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop-sectionHeight / 3)){
      current = section.getAttribute('id');
      if(current == "resume"){
        htmlSection.classList.add("animate");
        cssSection.classList.add("animate");
        jsSection.classList.add("animate");
        reactSection.classList.add("animate");


      }
      else{
        htmlSection.classList.remove("animate");
        cssSection.classList.remove("animate");
        jsSection.classList.remove("animate");
        reactSection.classList.remove("animate");


      }
    }
  })
  navLi.forEach(li=> {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })
})
hamburger.addEventListener('click',() => {
  navLinks.classList.toggle("open");
})


function myFunction(x) {
x.classList.toggle("change");
}

function mysecondFunction(x) {
x.classList.toggle("open");
}

navLinks.addEventListener('click', () => {
hamburger.classList.toggle("change");
})

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contact-form");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add('success');
    status.innerHTML = "Message Sent!";
  }

  function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
