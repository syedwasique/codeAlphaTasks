/* ----- NAVIGATION BAR FUNCTION ----- */


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    


/* ----- TYPING EFFECT ----- */
   

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   

  /* -- HOME -- */
  

  /* -- PROJECT BOX -- */
  

  /* -- HEADINGS -- */
  

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  

  /* -- ABOUT SKILLS & FORM BOX -- */
  


/* ----- CHANGE ACTIVE LINK ----- */


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)
  
const downloadButton = document.getElementById("downloadCV");

// Add event listener to the button
downloadButton.addEventListener("click", function() {
    
    window.location.href = "./wasique resume.pdf";
});

const downloadButton2 = document.getElementById("downloadCV2");

// Add event listener to the button
downloadButton2.addEventListener("click", function() {
    // Redirect the user to the resume file (change the path to your file)
    window.location.href = "./wasique resume.pdf";
    
});


const downloadButton3 = document.getElementById("downloadCV3");

// Add event listener to the button
downloadButton3.addEventListener("click", function() {
    // Redirect the user to the resume file (change the path to your file)
    window.location.href = "./wasique resume.pdf";
    
});



 // Add event listener to the Instagram icon
 const instagramIcon = document.getElementById("instagramIcon");
 const instagramIcon1 = document.getElementById("instagramIcon1");

 instagramIcon.addEventListener("click", function() {
     // Redirect to Instagram profile (replace with your Instagram URL)
     window.location.href = "https://www.instagram.com/wasique089/";
 });

 instagramIcon1.addEventListener("click", function() {
  // Redirect to Instagram profile (replace with your Instagram URL)
  window.location.href = "https://www.instagram.com/wasique089/";
});

 // Add event listener to the LinkedIn icon
 const linkedinIcon = document.getElementById("linkedinIcon");
 const linkedinIcon1 = document.getElementById("linkedinIcon1");
 linkedinIcon.addEventListener("click", function() {
     // Redirect to LinkedIn profile (replace with your LinkedIn URL)
     window.location.href = "https://www.linkedin.com/in/wasique-rizvi-00ba86182/";
 });

 linkedinIcon1.addEventListener("click", function() {
  // Redirect to LinkedIn profile (replace with your LinkedIn URL)
  window.location.href = "https://www.linkedin.com/in/wasique-rizvi-00ba86182/";
});


const completedProjects = document.getElementById('completed-projects');
completedProjects.addEventListener('click', () => {
  window.location.href = 'project.html'; 
});



function sendMail() {
  let params = {
    userName: document.getElementById("userName").value,
    userEmail: document.getElementById("userEmail").value,
    userMessage: document.getElementById("userMessage").value,

  }
  emailjs.send("service_1tvhphc", "template_f7wpsud", params).then(alert("Email Sent!"))
}