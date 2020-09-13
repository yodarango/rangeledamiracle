/////RSVP button functinality starts
let button = document.querySelector(".rsvp");
button.addEventListener("click", popup);
let form = document.querySelector(".rsvp-wrap");


function popup() 
{
  let x = document.querySelector("#close");
  let darkenScreen =  document.querySelector(".body");
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

  }
  else if (rsvpCode.value == "" || guest.indexOf(rsvpCode.value) < 0 && (totalGuests.value != "" || totalGuests.value != 0))
  
{

submitMessage.innerHTML = "Opps! we didnt find your code, please give it another shot!";
submitMessage.style.cssText = "background-color: rgba(236, 160, 160, 0.973); width: 100%; position: relative;" + 
"height: 6rem; font-size: 1rem; color: rgb(128, 20, 20);  display: flex; align-items: center; justify-content: center; margin-top: 10%;";

}

});
  x.addEventListener("click", () =>
  {
   form.style.visibility = "hidden";
   button.style.visibility = "visible";
   darkenScreen.style.visibility = "hidden";
  })
}
