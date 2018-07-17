// nav highlight

highlight();

function highlight() {
  const url = document.URL;
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const depths = document.getElementById("depths-nav");
  const obsolete = document.getElementById("obsolete-nav");

  if (url.includes("about.html")) {
    about.style.opacity = 1.0;
  } else if (url.includes("contact.html")) {
    contact.style.opacity = 1.0;
  } else if (url.includes("index.html")) {
    depths.style.opacity = 1.0;
  } else if (url.includes("O13S0L3T3.html")) {
    obsolete.style.opacity = 1.0;
  }
}
