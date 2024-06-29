// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft.
// Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


// ______________________opdracht oplossing _______________________
function getEmailDomain1 (email){
const positionNumber = email.indexOf('@')
    const emailDomain = email.substring(positionNumber + 1);
return emailDomain;
}
console.log(getEmailDomain1('hello@gmail.com'));

// _________________________eind-code__________________________________
/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
// De functie checkt of het emailadres een novi domein heeft (medewerker),
// e
// en novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


// __________________________ code hier begint_________________________
function typeOfEmail (email){
  const domain = getEmailDomain(email);
  if (domain === "novi-education.nl"){
      return "Student";
  }
  else if (domain === "novi.nl"){
      return "Medewerker"
  }
    else {
        return "Extern";
  }
}
function getEmailDomain (email){
    const positionOfAt = email.indexOf('@');
    return email.substring(positionOfAt + 1);
}

console.log(typeOfEmail('a.wiersma@novi.nl'));

// ---------------------------einde-code------------------
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het
// emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl,
// maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in



// ------------------------beginCode----------------------------

function checkEmailValidity (email) {
    if (email.indexOf('@') === -1) {
        return false;
    }
    if (email.includes(',')) {
        return false;
    }
    const lastLetter = email.slice(-1);
    if (lastLetter === '.') {
        return false;
    }
    const theAtPosition = email.indexOf('@');
    const afterAtPosition = email.substring(theAtPosition + 1);
    if (afterAtPosition.indexOf('.') === -1) {
        return false;
    }
    return true;
}



console.log(checkEmailValidity("n.eeken@novi.nl"));
console.log(checkEmailValidity("tessmellink@novi.nl"));
console.log(checkEmailValidity("n.eekenanovi.nl"));
console.log(checkEmailValidity("n.eeken@novinl."));
console.log(checkEmailValidity("tessmellink@novi,nl"));
