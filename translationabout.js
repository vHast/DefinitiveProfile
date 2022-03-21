// Translation - About

let contactP = document.getElementById('pcontact');
let textAreaText = document.getElementById('message-btn');
let aboutId = document.getElementById('aboutid');
let contactId = document.getElementById('contactid');
let enBtnProfile = document.getElementById('en-btn')
let eeBtnProfile = document.getElementById('yt-btn')



const translationEE = () => {
  contactP.innerHTML = "Mind huvitavad vabakutseliste võimalused – eriti ambitsioonikad või suured projektid. Kui teil on aga muid taotlusi või küsimusi, ärge kartke vormi kasutada.";
  textAreaText.innerHTML = "Kirjuta mulle";
  contactId.innerHTML = "Kontakti";
  aboutId.innerHTML = "Teave"
  enBtnProfile.style.display = 'inline';
  eeBtnProfile.style.display = 'none';
}

const translationEN = () => {

  contactP.innerHTML = "I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.";
  textAreaText.innerHTML = "Message";
  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "About";
  enBtnProfile.style.display = 'none';
  eeBtnProfile.style.display = 'inline';
}
