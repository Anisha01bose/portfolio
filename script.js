// var typed=new typed(".text", {
//     Strings:["Web Developer", "Frontend Developer"],
//     typeSpeed: 100,
//     backSpeed:100,
//     backDelay:1000,
//     loop: true
// });

// Scroll reveal:==

// script.js

// script.js


document.addEventListener("DOMContentLoaded", function() {
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 1800,
        delay:  100
    });
    ScrollReveal().reveal('.home-content, .about-content, .skills-box, .timeline-icon,.timeline-content, .heading, .heading1, .heading2, .heading3',
        { origin: 'top' });
});

// Download CV

const driveLinkButton = document.getElementById('driveLinkButton');

const googleDriveLink = "https://drive.google.com/file/d/1RgZBw964EM4ODbC4ZRT7vRaeRRsrNN-O/view?usp=sharing";

driveLinkButton.addEventListener('click', function() {
    window.open(googleDriveLink, '_blank');
});

//linkeddin prf add:
const linkedinIcon = document.getElementById('linkedinIcon');
const linkedinProfileUrl = 'https://www.linkedin.com/in/anisha-bose-b04b55218/';
linkedinIcon.addEventListener('click', function() {
    
    window.open(linkedinProfileUrl, '_blank');
});
//twitter prf add:
const twitterIcon = document.getElementById('twitterIcon');
const twitterProfileUrl = 'https://x.com/AnishaBose7';
twitterIcon.addEventListener('click', function() {
   
    window.open(twitterProfileUrl, '_blank');
});
//githubIcon prf add:
const githubIcon = document.getElementById('githubIcon');
const githubProfileUrl = 'https://github.com/Anisha01bose';
githubIcon.addEventListener('click', function() {
   
    window.open(githubProfileUrl , '_blank');
});