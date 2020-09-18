/////RSVP button functinality starts
let button = document.querySelector(".rsvp");
button.addEventListener("click", popup);
let form = document.querySelector(".rsvp-wrap");
let darkenScreen =  document.querySelector(".body");

function popup() 
{
  let x = document.querySelector("#close");
  let submit = document.querySelector("#submit");
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
    form.appendChild(doneImg);
} 

  else if (guest.indexOf(rsvpCode.value) > -1 && (totalGuests.value == "" || totalGuests.value == 0))
  {

    submitMessage.innerHTML = "Please enter the amount of guests";
    submitMessage.style.cssText = " background-color: rgba(236, 160, 160, 0.973); width: 100%; position: relative;" + 
    "height: 6rem; font-size: 1rem; color: rgb(128, 20, 20);  display: flex; align-items: center; justify-content: center; margin-top: 10%;";
    rsvpCode.value = ""
    rsvpCode.setAttribute('placeholder', 'try again...')
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

let notComing = document.querySelector(".not-coming2, .not-coming");


notComing.addEventListener('click', () =>
{
 
  

  darkenScreen.style.visibility = 'visible';
  notComing.style.visibility = 'hidden';

  let notComingDiv = document.createElement('DIV');
  notComingDiv.setAttribute('class', 'not-coming3');
  document.body.appendChild(notComingDiv);

  let noButton = document.createElement('DIV');
  noButton.setAttribute('class', 'no-button');

  let noComingWhy = document.createElement('P');
  noComingWhy.textContent = 'I apologize, but i don\'t think I will make it!'
  noComingWhy.setAttribute('class', 'no-coming-why');

  notComingDiv.append(noComingWhy, noButton);

  let noComingText = document.createElement('DIV');
  noComingText.innerHTML = 'NOT COMING';
  noComingText.setAttribute('class', 'no-coming-text');
  noButton.appendChild(noComingText);

  noButton.addEventListener('click', () => 
   {
    noButton.style.cssText = ' visibility: hidden; transition-duration: 0ms; '
    noComingWhy.innerHTML = 'We are sadden to hear that! Thank you for letting us now!'
    noComingWhy.style.top = '2rem';

    if (secondCheckedBox.checked || firstCheckedBox.checked)
    {
      noComingWhy.innerHTML = 'Estamos tristes de saber la noticia, gracias por tu aviso!'
    }

    let sadFace = document.createElement('IMG');
    sadFace.setAttribute('src', '../images/check.png');
    sadFace.setAttribute('class', 'sad-face');

    notComingDiv.appendChild(sadFace);
  })

  if (secondCheckedBox.checked)
  {
    noComingWhy.innerHTML = "Los siento, pero no podre asistir!";
  }
  /*else if (secondCheckedBox.checked == false)
  {

  }*/

  let x2 = document.querySelector('#close');
  notComingDiv.appendChild(x2);
  x2.addEventListener('click', () =>
  {
    darkenScreen.style.visibility = 'hidden';
    x2.style.visibility = 'hidden';
    notComingDiv.style.visibility = 'hidden';
    notComing.style.visibility = 'visible';
    location.reload();
  })

});
