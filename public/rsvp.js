/////RSVP button functinality starts
let button = document.querySelector(".rsvp");
let form = document.querySelector(".rsvp-wrap");
let darkenScreen =  document.querySelector(".body");


function popup() 
{
  let x = document.querySelector("#close");

  form.style.display = "block";
  darkenScreen.style.display = "block";


  x.addEventListener("click", () =>
  {
   form.style.display = "none";
   button.style.visibility = "visible";
   darkenScreen.style.display = "none";
  })
}


const pullList = async() =>{
  const data =  await fetch('/rsvp');
  const response = await data.json();
  const name = document.querySelector('.nog-top');
  const yesComing = document.querySelector('.y-top');
  const noComing = document.querySelector('.n-top');
  const number = document.querySelector('.number-of-guest');
  console.log(data)

  for (item of response)
  {
    const  guest = document.createElement('DIV');
    guest.textContent = item.guestName;
    name.appendChild(guest)

    const numberr = document.createElement('DIV');
    numberr.textContent = item.guestNumber
    number.appendChild(numberr)

    if(item.coming.toUpperCase() == 'YES'){
        const  yes = document.createElement('DIV');
        yes.textContent = 'YES';
        yesComing.appendChild(yes)
        const  no = document.createElement('DIV');
        no.textContent = '.';
        no.style.color = 'rgba(22, 15, 54, 0.8)'
        noComing.appendChild(no)
    } else if (item.coming.toUpperCase() == 'NO'){
        const  yes = document.createElement('DIV');
        yes.textContent = '.';
        yesComing.appendChild(yes)
        yes.style.color = 'rgba(22, 15, 54, 0.8)'
        const  no = document.createElement('DIV');
        no.textContent = 'NO';
        noComing.appendChild(no)
    }
  }
}

pullList()