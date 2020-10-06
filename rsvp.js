/////RSVP button functinality starts
let button = document.querySelector(".rsvp");
button.addEventListener("click", popup);
let form = document.querySelector(".rsvp-wrap");
let darkenScreen =  document.querySelector(".body");
/*let notComing = document.querySelector(".not-coming2, .not-coming");*/


function popup() 
{
  let x = document.querySelector("#close");
  let submit = document.querySelector(".submit");
  let rsvpCode = document.querySelector(".rsvp-code");
  let guest = ["Ronal", "DC", "XP"];
  let totalGuests = document.querySelector("#guestnumber");
  let submitMessage = document.querySelector("#form-message");

  button.style.visibility = "hidden";
  form.style.visibility = "visible";
  darkenScreen.style.visibility = "visible";

submit.addEventListener("click", () => 
{
  if (guest.indexOf(rsvpCode.value) > -1 && (totalGuests.value != "" && totalGuests.value != 0))
  {
   submitMessage.style.visibility = "hidden"; 
    totalGuests.style.visibility = "hidden";
    rsvpCode.style.visibility = "hidden";
    submit.style.visibility = "hidden";
    document.querySelector("#form-instructions").innerHTML = `${rsvpCode.value} ${totalGuests.value} guests have been added to your table, we are excited to have you with us`
    document.querySelector("FORM H2").innerHTML = "THANK YOU";
    let doneImg = document.createElement("IMG");
    doneImg.setAttribute("src", "../images/check.png");
    doneImg.className = "sucess-image";
    doneImg.setAttribute("alt", "checkmark-image");
    form.appendChild(doneImg);
} 

  else if (guest.indexOf(rsvpCode.value) > -1 && (totalGuests.value == "" || totalGuests.value == 0))
  {
    form.style.transitionDuration = "0ms"
    form.style.visibility = "hidden";
    notComingFunc();
   /* submitMessage.innerHTML = "Please enter the amount of guests";
    submitMessage.style.cssText = " background-color: rgba(236, 160, 160, 0.973); width: 100%; position: relative;" + 
    "height: 6rem; font-size: 1rem; color: rgb(128, 20, 20);  display: flex; align-items: center; justify-content: center; margin-top: 10%;";
    rsvpCode.value = ""
    rsvpCode.setAttribute('placeholder', 'try again...')*/
  }
  else if (rsvpCode.value == "" || guest.indexOf(rsvpCode.value) < 0 && (totalGuests.value != "" || totalGuests.value != 0))
  
{

submitMessage.innerHTML = "Opps! we didnt find your code, please give it another shot!";
submitMessage.style.cssText = "background-color: rgba(236, 160, 160, 0.973); width: 100%; position: relative;" + 
"height: 6rem; font-size: 1rem; color: rgb(128, 20, 20);  display: flex; align-items: center; justify-content: center; margin-top: 10%;";
totalGuests.value = ""
rsvpCode.value = ""
rsvpCode.setAttribute('placeholder', 'try again...')
}

});
  x.addEventListener("click", () =>
  {
   form.style.visibility = "hidden";
   button.style.visibility = "visible";
   darkenScreen.style.visibility = "hidden";
  })
}

/**Not coming link starts ***/

function notComingFunc() 
{
  darkenScreen.style.visibility = 'visible';
  /*notComing.style.visibility = 'hidden';*/

  let notComingDiv = document.createElement('DIV');
  notComingDiv.setAttribute('class', 'not-coming3');
  document.body.appendChild(notComingDiv);

  let noButton = document.createElement('DIV');
  noButton.setAttribute('class', 'no-button');

  let noComingWhy = document.createElement('P');
  noComingWhy.setAttribute('class', 'no-coming-why');

  noComingWhy.innerHTML = 'I am sorry, I dont think I will make it!'

  notComingDiv.append(noComingWhy, noButton);

  let noComingText = document.createElement('DIV');
  noComingText.innerHTML = 'NOT COMING';
  noComingText.setAttribute('class', 'no-coming-text');
  noButton.appendChild(noComingText);

  if ((document.body.outerHTML.indexOf('hospedaje') > -1) || (document.body.outerHTML.indexOf('NOVIO') > -1))
    {
      noComingWhy.innerHTML = 'Lo siento, pero no creo que podre asistir!'
    }

  let x2 = document.querySelector('#close');
  notComingDiv.appendChild(x2);

  x2.addEventListener('click', () =>
  {
    darkenScreen.style.visibility = 'hidden';
    x2.style.visibility = 'hidden';
    notComingDiv.style.visibility = 'hidden';
    notComing.style.visibility = 'visible';
    location.reload();
  });


  noButton.addEventListener('click', () => 
   {
    noButton.style.cssText = ' visibility: hidden; transition-duration: 0ms; ';
    noComingWhy.innerHTML = 'We are sad to hear it! Thanks for letting us know!';
    noComingWhy.style.top = '2rem';

    let sadFace = document.createElement('IMG');
    sadFace.setAttribute('src', '../images/sad-face.png');
    sadFace.setAttribute('class', 'sad-face');
    sadFace.setAttribute('alt', 'sad face emoji');

    notComingDiv.appendChild(sadFace);

    if ((document.body.outerHTML.indexOf('hospedaje') > -1) || (document.body.outerHTML.indexOf('NOVIO') > -1))
    {
      noComingWhy.innerHTML = 'Estamos triste de escucharlo, gracias por el aviso!'
    }

  });
}
//Decided to get rid of the 'not coming' text as part of Version 2.0
/*notComing.addEventListener('click', () =>
{

  darkenScreen.style.visibility = 'visible';
  notComing.style.visibility = 'hidden';

  let notComingDiv = document.createElement('DIV');
  notComingDiv.setAttribute('class', 'not-coming3');
  document.body.appendChild(notComingDiv);

  let noButton = document.createElement('DIV');
  noButton.setAttribute('class', 'no-button');

  let noComingWhy = document.createElement('P');
  noComingWhy.setAttribute('class', 'no-coming-why');

  noComingWhy.innerHTML = 'I am sorry, I dont think I will make it!'

  notComingDiv.append(noComingWhy, noButton);

  let noComingText = document.createElement('DIV');
  noComingText.innerHTML = 'NOT COMING';
  noComingText.setAttribute('class', 'no-coming-text');
  noButton.appendChild(noComingText);

  if ((document.body.outerHTML.indexOf('hospedaje') > -1) || (document.body.outerHTML.indexOf('NOVIO') > -1))
    {
      noComingWhy.innerHTML = 'Lo siento, pero no creo que podre asistir!'
    }

  let x2 = document.querySelector('#close');
  notComingDiv.appendChild(x2);

  x2.addEventListener('click', () =>
  {
    darkenScreen.style.visibility = 'hidden';
    x2.style.visibility = 'hidden';
    notComingDiv.style.visibility = 'hidden';
    notComing.style.visibility = 'visible';
    location.reload();
  });


  noButton.addEventListener('click', () => 
   {
    noButton.style.cssText = ' visibility: hidden; transition-duration: 0ms; ';
    noComingWhy.innerHTML = 'We are sad to hear it! Thanks for letting us know!';
    noComingWhy.style.top = '2rem';

    let sadFace = document.createElement('IMG');
    sadFace.setAttribute('src', '../images/sad-face.png');
    sadFace.setAttribute('class', 'sad-face');
    sadFace.setAttribute('alt', 'sad face emoji');

    notComingDiv.appendChild(sadFace);

    if ((document.body.outerHTML.indexOf('hospedaje') > -1) || (document.body.outerHTML.indexOf('NOVIO') > -1))
    {
      noComingWhy.innerHTML = 'Estamos triste de escucharlo, gracias por el aviso!'
    }

  });

});
*/