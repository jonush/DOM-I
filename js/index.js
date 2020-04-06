const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// ------- WORK BEGINS HERE -------
// updating the links in the nav bar
const nav = document.querySelector("nav");
const links = nav.getElementsByTagName("a")
function addLinks() {
  const items = Object.values(siteContent.nav);

  for(let i = 0; i <links.length; i++) {
    links[i].textContent = items[i];
    links[i].style.color = "green";
  }
}

addLinks();

const team = document.createElement("a");
team.textContent = "Team";
team.style.color = "green";
nav.appendChild(team);

const mission = document.createElement("a");
mission.textContent = "Mission";
mission.style.color = "green";
nav.prepend(mission);

// adding the title in the header
const header = document.querySelector(".cta");
const title = header.querySelector("h1"); 
title.innerHTML = "DOM <br /> IS <br /> AWESOME <br />"

// adding button text
const buttonText = header.querySelector("button");
buttonText.textContent = Object.values(siteContent.cta.button).join('');

// adding header image
const headerImg = header.querySelector("#cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

// adding top content
const topContent = document.querySelector(".top-content");
const featuresTitle = topContent.getElementsByTagName("h4")[0];
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
const featuresText = topContent.getElementsByTagName("p")[0];
featuresText.textContent = siteContent["main-content"]["features-content"];

const aboutTitle = topContent.getElementsByTagName("h4")[1];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
const aboutText = topContent.getElementsByTagName("p")[1];
aboutText.textContent = siteContent["main-content"]["about-content"];

// adding content img
let mainImg = document.querySelector("#middle-img");
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// adding bottom content
const bottomContent = document.querySelector(".bottom-content");
const servicesTitle = bottomContent.getElementsByTagName("h4")[0];
servicesTitle.textContent = siteContent["main-content"]["services-h4"];
const servicesText = bottomContent.getElementsByTagName("p")[0];
servicesText.textContent = siteContent["main-content"]["services-content"];

const productTitle = bottomContent.getElementsByTagName("h4")[1];
productTitle.textContent = siteContent["main-content"]["product-h4"];
const productText = bottomContent.getElementsByTagName("p")[1];
productText.textContent = siteContent["main-content"]["product-content"];

const visionTitle = bottomContent.getElementsByTagName("h4")[2];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
const visionText = bottomContent.getElementsByTagName("p")[2];
visionText.textContent = siteContent["main-content"]["vision-content"];

// adding contact content
const contact = document.querySelector(".contact");

const contactTitle = contact.getElementsByTagName("h4")[0];
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const address = contact.getElementsByTagName("p")[0];
address.innerHTML = "123 Way 456 <br />Street Somewhere, USA";

const phone = contact.getElementsByTagName("p")[1];
phone.textContent = siteContent.contact.phone;

const email = contact.getElementsByTagName("p")[2];
email.textContent = siteContent.contact.email;

// adding footer content
const footer = document.querySelector("footer");
footer.firstChild.textContent = siteContent.footer.copyright;

// STRETCH GOALS
// Changing h4 color styles
function colored() {
  let headings = document.querySelectorAll("h4");
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = "green";
  }
}

colored();

// updating button
let button = document.querySelector("button");
button.addEventListener("click", function() {
  const currentColor = document.body.style.backgroundColor;

  if(currentColor === "white") {
    document.body.style.backgroundColor = "orange";
  } else {
    document.body.style.backgroundColor = "white";
  }
});