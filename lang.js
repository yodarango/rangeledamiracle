let language = function() 
{
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

 let language2 = function()
  {
    let abc = document.querySelector("#storyBrideGroom");
    let def = document.querySelector("#storyBrideGroomP");
    let gjh = document.querySelector("#storyBrideGroom2");
    let ikl = document.querySelector("#storyBrideGroomP2");
    let mno = document.querySelector("#fun-facts");
    let pqs = document.querySelector(".funfactsP");
    let rst = document.querySelector("#storyBrideGroom3");
    let uvw = document.querySelector("#storyBrideGroomP3");
    let wxy = document.querySelector("#fun-facts2");
    let zzz = document.querySelector(".funfactsP2");

    if (document.querySelector(".checked2").checked)
    {
      abc.innerHTML = "NUESTRA HISTORIA"
      def.innerHTML = "Danel y Alayna se conocieron el 19 de Junio del 2019 en la ciudad de" + 
      " Covington, Kentucky. El segundo servicio de la Conferencia General de sus iglesias fue un" + 
      " servicio bilingūe en el cual Daniel fue el traductor. Ellos solo vivian dos horas de cada uno" + 
      " pero por plan de Dios manejaron 4 horas solo para conocerse. Por suerte Alayna aun recordaba" +
      " dos fraces que aprendio cuando aun estaba en la preparatoria que uso como pretexto para hablar con el." +
      " Su amor continuo creciendo y Daniel propuso matrimonio el 25 de Abril del 2020. Sus primeros" +
      " años de casados los van a vivir en Carolina del Sur y despues se moveran de regreso a Tennessee."+
      " Gracias por tomar interes en su historia";
      gjh.innerHTML = "LA NOVIA"
      ikl.outerHTML = '<p id="storyBrideGroomP2" class="storyBrideGroomP">' + 
      '<span id="name">Alayna</span> nacio el 2 de Abril de 1998 y crecio en la ciudad de Middlesboro, Kentucky' + 
      ' Y recientemente se movio a Sur Carolina para continuar su educacion doctoral' + 
      ' en quiropractico. Una vez que complete sus estudios ella espera ' + 
      ' continuar su ministerio en Middlesboro como doctora quiropractica y en'
      ' Su iglesia "Adoracion en Espiritu Y en Verdad" de acuerdo a la voluntad de Dios.</p>'
      mno.innerHTML = "Detalles Curiosos";
      pqs.outerHTML = '<p id="fun-factsP" class="storyBrideGroomP funfactsP">Color Favorito: Amarillo <br>' +
      'Verso Biblico Favorito: <span id="fav-verse" class="fav-verse">Filipenses 4:8</span> <br>' +
      'Animal Favorito: Manatí <br>' +
      'Pasatiempo Favorito: Remar, Leer <br>' 
      'Comida Favorita: Pasta <br></p>';
      rst.innerHTML = "EL NOVIO";
      uvw.outerHTML = '<p id="storyBrideGroomP3" class="storyBrideGroomP">' +
      '<span id="name2">Daniel</span> nacio el 2 de Junio de 1995. En el 2017 se reloco de su amada ciudad Ogden, Utah' +
      ' a las hermosas montañas de Tennessee de acuerdo a la direccon de Dios.' +
      ' En Diciembre de 2019 se graduo con su titulo universitario y presentemente trabaja como ingeniero de Software.' +
      ' El planea continuar su educacion doctoral en el campo de Apologetica Cristiana en el otoño del' +
      ' 2021 Y usar su ediucacion para glorifical a Dios en todas las formas posibles</p>';
      wxy.innerHTML = "Datos Curiosos";
      zzz.outerHTML = '<p id="fun-factsP" class="storyBrideGroomP funfactsP2">Color Favorito: Gris <br>' +
      'Verso Biblico Favorito: <span id="fav-verse" class="fav-verse">1 Pedro 1:8</span> <br>' +
      'Animal Favorito: Lobo <br>' +
      'Pasatiempo Favorito: Ciclismo de montaña, gimnasio, leer<br>' +
      'Comida Favorita: Lasagna <br></p>';
  } else 
  {
    abc.innerHTML = "OUR STORY"
    def.innerHTML = "Daniel and Alayna met June 19, 2019 in Covington, KY. The second service of General Ministries Conference" + 
    "was a bilingual service that Daniel was translating. " +
    "They only lived two hours apart but had to travel twice that distance in order to meet. " +
    "Thankfully, Alayna remembered two sentences from her high school Spanish class " +
  "that she used to break the ice. Their love continued to grow and Daniel purposed " +
  "on April 25, 2020. They will live their first couple years as a married couple in Spartanburg, SC " +
  "and then relocate back to Tennessee. Thank you for taking interest in their story!";
    gjh.innerHTML = "THE BRIDE";
    ikl.outerHTML = '<p id="storyBrideGroomP2" class="storyBrideGroomP">' + 
    '<span id="name">Alayna</span> was born on April 2, 1998. She was raised in Middlesboro, Kentucky' + 
    ' and recently moved to Spartanburg, South Carolina to pursue her doctorate' + 
    ' of chiropractic degree. Once she completes her degree she hopes' + 
    ' to continue her ministry in Middlesboro, KY as a chiropractor and at'
    ' Spirit and Truth Worship Center in whatever capacity God has for her.</p>'
    mno.innerHTML = "Fun Facts";
    pqs.outerHTML = ' <p id="fun-factsP" class="storyBrideGroomP funfactsP">Favorite color: yellow <br>' +
    'Favorite Bible Verse: <span id="fav-verse" class="fav-verse">Philipians 4:8</span> <br>' +
    'Favorite animal: Manattee <br>' +
    'Favorite Hobbies: Kayaking, Reading <br>' +
    'Favorite Food: Pasta <br></p>';
    rst.innerHTML = "THE GROOM";
    uvw.outerHTML =  '<p id="storyBrideGroomP3" class="storyBrideGroomP"><span id="name2">Daniel</span> was born on June 2, 1995. In 2017 he relocated from his much-loved home city, Ogden, Utah ' +
   'to the beautiful heels of Appalacia in Knoxville, Tennessee at the direction of God\'s will. ' +
   ' He graduated in December, 2019 with his Bachelor\'s degree and currently works as a Software QA Engineer. ' +
   ' He plans to pursue his doctorates degree in Christian Apologetics in the fall of ' +
   ' 2021 and use it in every way possible for the glory of God. </p>';
    wxy.innerHTML = "Fun Facts";
    zzz.outerHTML = '<p id="fun-factsP" class="storyBrideGroomP funfactsP2">Favorite color: Gray <br>' +
    'Favorite Bible Verse: <span id="fav-verse" class="fav-verse">1 Peter 1:8</span> <br>' +
    'Favorite Animal: Wolf <br>' +
    'Favorite Hobbies: Mountain Biking, Wegiht Lifting<br>' +
    'Favorite Food: Lasagna <br></p>';
  }
}