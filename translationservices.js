// Translation - Services

let firstPar = document.getElementById('firstp');
let secondPar = document.getElementById('secondp');
let thirdPar = document.getElementById('thirdp');
let fourthPar = document.getElementById('fourthp');
let fifthPar = document.getElementById('currentcerts');
let sixthPar = document.getElementById('sixthp');
let seventhPar = document.getElementById('seventhp')
let enBtnProfile = document.getElementById('en-btn');
let eeBtnProfile = document.getElementById('yt-btn');



const translationEE = () => {
  firstPar.innerHTML = "Olen Hispaanias asuv vabakutseline kasutajaliidese arendaja, kes on kirglik veebisaitide loomise ja arendusprotsessi vastu.";
  secondPar.innerHTML = "Huvi veebiarenduse vastu sai alguse juba 2019. aastal, kui töötasin finantsabikeskuses ja töötasin kohutava kasutajaliidese/UX-iga tarkvaraga, uudishimu pärast hakkasin sellele lahendusi otsima ja lõpetasin tarkvaraarenduse jäneseauguga ning hakkasin õppima meisterdada omal käel.";
  thirdPar.innerHTML = "Tänasesse päeva kiiresti edasi minnes leian, et minu kasutajaliidese oskused on piisavalt head, et vabakutseliseks tööle asuda, kuid ma tahan seda teha täiskohaga ja õppida iga päev midagi uut!";
  fourthPar.innerHTML = "Väga huvitatud koostööst mis tahes avatud lähtekoodiga projektiga / vaba tarkvaraga (Free as in Freedom) ja free software eetika õppimisest!"
  fifthPar.innerHTML = "Siin on mõned tehnoloogiad, millega olen viimasel ajal tegelenud";
  sixthPar.innerHTML = "Mõned tööriistad, mida ma disainis kasutan";
  seventhPar.innerHTML = "Ja praegused sertifikaadid, mis mulle kuuluvad";
  contactId.innerHTML = "Kontakti";
  aboutId.innerHTML = "Teave"
  enBtnProfile.style.display = 'inline';
  eeBtnProfile.style.display = 'none';
}

const translationEN = () => {
  firstPar.innerHTML = "I'm a Spanish based freelance frontend developer, passionate about the creation and developing process of websites.";
  secondPar.innerHTML = "My interest in web development started back in 2019 when I was working in a finance helpdesk position and worked with software that had terrible UI/UX, for curiosity I started looking for solutions on this and ended in the software development rabbit hole and started learning the craft on my own.";
  thirdPar.innerHTML = "Fast-forward to today, I find my Frontend skills are good enough to hustle freelancing but I want to do it full time and keep learning everyday something new!";
  fourthPar.innerHTML = "Very interested in collaborating with any open-source project / free software (Free as in Freedom) and learning the Free Software ethics!"
  fifthPar.innerHTML = "Here are a few technologies I've been working with recently.";
  sixthPar.innerHTML = "Some of the tools I use for design";
  seventhPar.innerHTML = "And the current certifications I own";

  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "About";
  enBtnProfile.style.display = 'none';
  eeBtnProfile.style.display = 'inline';
}
