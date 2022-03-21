// Translation - Profile-Portfolio

let basedLocation = document.getElementById('based');
let basedSubtitles = document.getElementById('based-sub');
let stackTxt = document.getElementById('stacktext');
let firstPrjDesc = document.getElementById('firstprj');
let secondPrjDesc = document.getElementById('secondprj');
let thirdPrjDesc = document.getElementById('thirdprj');
let aboutId = document.getElementById('aboutid');
let contactId = document.getElementById('contactid');
let enBtnProfile = document.getElementById('en-btn')
let eeBtnProfile = document.getElementById('yt-btn')



const translationEE = () => {
  basedLocation.innerHTML = "Asub Tallinnas, Eestis";
  basedSubtitles.innerHTML = "Kujundan ja arendan responsiivseid, optimeeritud ja tõhusaid veebisaite, vabakutseliste võimaluste jaoks saadaval.";
  stackTxt.innerHTML = "Minu Stack";
  firstPrjDesc.innerHTML = "Eesti keele õppimisele pühendatud veebiplatvorm";
  secondPrjDesc.innerHTML = "Tehingutele ja ärisuhtlusele pühendatud e-kaubanduse veebisait";
  thirdPrjDesc.innerHTML = "Staatiline veebisait, mis keskendub kujundusele muusika jagamiseks ja ülevaatamiseks";
  contactId.innerHTML = "Kontakti";
  aboutId.innerHTML = "Teave"
  enBtnProfile.style.display = 'inline';
  eeBtnProfile.style.display = 'none';
}

const translationEN = () => {
  basedLocation.innerHTML = "Based in Tallinn, Estonia";
  basedSubtitles.innerHTML = "I design and develop responsive, optimized and efficient websites, available for freelance opportunities.";
  stackTxt.innerHTML = "My Stack";
  firstPrjDesc.innerHTML = "An online plaform used to learn the estonian language";
  secondPrjDesc.innerHTML = "An ecommerce website, focused on business and transactions";
  thirdPrjDesc.innerHTML = "Static website,focused on design to share and review music";
  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "About";
  enBtnProfile.style.display = 'none';
  eeBtnProfile.style.display = 'inline';
}
