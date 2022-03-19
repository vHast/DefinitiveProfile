// Fading projects !! NEEDS ANIMATION SMOOTHERING/TRANSITION

let fadingProj = document.getElementById('projectsignal');
fadingProj.style.display = 'flex';


// Translation

let basedLocation = document.getElementById('based');
let basedSubtitles = document.getElementById('based-sub');
let stackTxt = document.getElementById('stacktext');

const translationEE = () => {
  basedLocation.innerHTML = "Asub Tallinnas, Eestis";
  basedSubtitles.innerHTML = "Kujundan ja arendan responsiivseid, optimeeritud ja tõhusaid veebisaite, vabakutseliste võimaluste jaoks saadaval.";
  stackTxt.innerHTML = "Minu Stack";
}

const translationES = () => {
  basedLocation.innerHTML = "Based in Tallinn, Estonia";
  basedSubtitles.innerHTML = "I design and develop responsive, optimized and efficient websites, available for freelance opportunities.";
  stackTxt.innerHTML = "My Stack";
}
