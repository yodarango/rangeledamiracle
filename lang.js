function language() {
    let a = document.querySelector("#bride");
    let b = document.querySelector("#story");
    let c = document.querySelector("#groom");
    let d = document.querySelector("#ceremony");
    let e = document.querySelector("#date");
    let f = document.querySelector(".get-directions");
    let g = document.querySelector("#reception");
    let h = document.querySelector("#address2");
    let i = document.querySelector("#get-directions");
    let j = document.querySelector("#add-det");
    let k = document.querySelector("#page1");
    let l = document.querySelector("#page2");
    let m = document.querySelector("#page3");
    let n = document.querySelector("#page4");
  
    if (document.querySelector(".checked").checked) {
      a.innerHTML = "LA NOVIA";
      b.innerHTML = "COMO PASO";
      c.innerHTML = "EL NOVIO";
      d.innerHTML = "CEREMONIA";
      e.outerHTML =
        '<p id="date"><span class="date">Junio 19, 2021 6:30</span><br>123 una calle <br>Hot Springs, AK 37777</p>';
      f.innerHTML = "Como Llegar";
      g.innerHTML = "RECEPCION";
      h.outerHTML =
        '<p id="address2"><span class="date">Junio 19, 2021 Terminando La Ceremonia</span><br> 123 Una Calle <br> Hot Springs, AK 37777</p>';
      i.innerHTML = "Como Llegar";
      j.innerHTML = "MAS DETALLES";
      k.innerHTML = "Como Va A Ser";
      l.innerHTML = "Hospedaje";
      m.outerHTML = '<a id="page3" href="#">Attracciones en<br>Hot Springs</a>';
      n.innerHTML = "Regalar";
    } else {
      a.innerHTML = "THE BRIDE";
      b.innerHTML = "OUR STORY";
      c.innerHTML = "THE GROOM";
      d.innerHTML = "CEREMONY";
      e.outerHTML =
        '<p id="date"><span class="date">June 19th, 2021 6:30</span><br>123 Some Street <br>Hot Springs, AK 37777</p>';
      f.innerHTML = "Get Directions";
      g.innerHTML = "RECEPTION";
      h.outerHTML =
        '<p id="address2"><span class="date">June 19th, 2021 Following Ceremony</span><br> 123 Some Street <br> Hot Springs, AK 37777</p>';
      i.innerHTML = "Get Directions";
      j.innerHTML = "ADDITIONAL DETAILS";
      k.innerHTML = "What To Expect";
      l.innerHTML = "Lodging";
      m.outerHTML = '<a id="page3" href="#">Things To Do <br>In Hot Springs</a>';
      n.innerHTML = "Registry";
    }
  }
  
  