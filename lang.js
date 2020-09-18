    let firstCheckedBox = document.querySelector(".checked")
   let secondCheckedBox = document.querySelector(".checked2");

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
    let o = document.querySelector(".rsvp-wrap H2");
    let p = document.querySelector("#form-instructions");
    let q = document.querySelector(".no-coming-way");

  
    if (document.querySelector(".checked").checked) 
    {
      a.innerHTML = "LA NOVIA";
      b.innerHTML = "COMO PASO";
      c.innerHTML = "EL NOVIO";
      d.innerHTML = "CEREMONIA";
      e.outerHTML =
        '<p id="date"><span class="date">Junio 19, 2021 6:30</span><br>550 Arkridge Rd <br>Hot Springs, AR 71913</p>';
      f.innerHTML = "Como Llegar";
      g.innerHTML = "RECEPCION";
      h.outerHTML =
        '<p id="address2"><span class="date">Junio 19, 2021 Terminando La Ceremonia</span><br> 550 Arkridge Rd <br>Hot Springs, AR 71913</p>';
      i.innerHTML = "Como Llegar";
      j.innerHTML = "MAS DETALLES";
      k.innerHTML = "Como Va A Ser";
      l.innerHTML = "Hospedaje";
      m.outerHTML = '<a id="page3" href="#">Attracciones en<br>Hot Springs</a>';
      n.innerHTML = "Obsequios";
      o.innerHTML = "BIENVENIDO";
      p.innerHTML = "Porfavor entra el codigo impreso en tu invitacion con el numero total de personas que vienen contigo.";
      q.innerHTML = "Estamos triste de escucharlo, graciapor avisarnos!";

    } else {
      a.innerHTML = "THE BRIDE";
      b.innerHTML = "OUR STORY";
      c.innerHTML = "THE GROOM";
      d.innerHTML = "CEREMONY";
      e.outerHTML =
        '<p id="date"><span class="date">June 19th, 2021 6:30</span><br>550 Arkridge Rd <br>Hot Springs, AR 71913</p>';
      f.innerHTML = "Get Directions";
      g.innerHTML = "RECEPTION";
      h.outerHTML =
        '<p id="address2"><span class="date">June 19th, 2021 Following Ceremony</span><br>550 Arkridge Rd <br>Hot Springs, AR 71913</p>';
      i.innerHTML = "Get Directions";
      j.innerHTML = "ADDITIONAL DETAILS";
      k.innerHTML = "What To Expect";
      l.innerHTML = "Lodging";
      m.outerHTML = '<a id="page3" href="#">Things To Do <br>In Hot Springs</a>';
      n.innerHTML = "Registry";
      o.innerHTML = "WELCOME";
      p.innerHTML = "Please enter the code printed in your invitation along with the number of guests to RSVP";
      q.innerHTML = "We are sadden to hear that! Thank you for letting us now!"

    }
  }

 let language2 = function()
  {
 /****** this will save the last status of the checkbox
    let box = document.querySelector('.checked2');
    localStorage.setItem('chek2', box.checked);

    */

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
    let cba = document.querySelector(".rsvp-wrap H2");
    let fed = document.querySelector("#form-instructions");
    let gih = document.querySelector(".no-coming-why");

    if (secondCheckedBox.checked)
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
      cba.innerHTML = "BIENVENIDO";
      fed.innerHTML = "Porfavor entra el codigo impreso en tu invitacion con el numero total de personas que vienen contigo.";
      gih.innerHTML = "Estamos triste de escucharlo, graciapor avisarnos!"

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
   ' He graduated in December, 2019 with his Bachelor\'s degree. ' +
   ' He plans to pursue his doctorates degree in Christian Apologetics in the fall of ' +
   ' 2021 and use it in every way possible for the glory of God. </p>';
    wxy.innerHTML = "Fun Facts";
    zzz.outerHTML = '<p id="fun-factsP" class="storyBrideGroomP funfactsP2">Favorite color: Gray <br>' +
    'Favorite Bible Verse: <span id="fav-verse" class="fav-verse">1 Peter 1:8</span> <br>' +
    'Favorite Animal: Wolf <br>' +
    'Favorite Hobbies: Mountain Biking, Wegiht Lifting<br>' +
    'Favorite Food: Lasagna <br></p>';
    cba.innerHTML = "WELCOME";
    fed.innerHTML = "Please enter the code printed in your invitation along with the number of guests to RSVP";
    gih.innerHTML = "We are sadden to hear that! Thank you for letting us now!"

  }
}

let language3 = function()
{

  let abb = document.querySelector("#what-to-expect");
  let cbb = document.querySelector("#storyBrideGroomP-Moreinfo1");
  let dbb = document.querySelector("#pollaroid1 A P");
  let ebb = document.querySelector("#pollaroid2 A P");
  let fbb = document.querySelector("#pollaroid3 A P");
  let gbb = document.querySelector("#pollaroid4 A P");
  let hbb = document.querySelector("#pollaroid5 A P");
  let ibb = document.querySelector("#pollaroid6 A P");
  let jbb = document.querySelector("#pollaroid7 A P");
  let kbb = document.querySelector("#pollaroid8 A P");
  let lbb = document.querySelector("#pollaroid9 A P");
  let mbb = document.querySelector("#pollaroid10 A P");
  let nbb = document.querySelector("#more-info-sections-1");
  let obb = document.querySelector("#more-info-sections-2");
  let pbb = document.querySelector("#more-info-sections-3");
  let qbb = document.querySelector("#more-info-sections-4");
  let rbb = document.querySelector("#storyBrideGroomP-Moreinfo2");
  let sbb = document.querySelector("#storyBrideGroomP-Moreinfo3");
  let tbb = document.querySelector("#storyBrideGroomP-Moreinfo4");
  let ubb = document.querySelector(".rsvp-wrap H2");
  let vbb = document.querySelector("#form-instructions");
  let yyy = document.querySelector(".no-coming-way");
  

  if (document.querySelector(".checked2").checked)
  {

    abb.innerHTML = "MAS DETALLES";
    cbb.innerHTML = "Nosotros queremos que nuestra boda sea una representacion de nuestra fé, personalidad, intereses, y cultura" +
    ". La ceremonia de bodas y la recepcion estarà llena con differentes tradiciones, comida, musica, y actividades que representan " +
    "ambas culturas como es de esperarse en una boda Mexico-Americana.";
    dbb.innerHTML = "Disfruta de los hermosos jardines afueras de la parroquia. Gratis para todos los invitados.";
    ebb.innerHTML = "Aguas termales, vistas al monte, senderos, arollos, y más";
    fbb.innerHTML = "Parque de atracciones excelente para la familia";
    gbb.innerHTML = "Viaja a los años 20's, 30's, y 40's";
    hbb.innerHTML = "Conectate con la sorprendente vida salvaje";
    ibb.innerHTML = "El mejor pollo en la ciudad de Little Rock";
    jbb.innerHTML = "Prueba la mejor comida Checa y Alemana y mas platillos Europeos";
    kbb.innerHTML = "Todo lo que cocinamos viene de granjeros locales"
    lbb.innerHTML = "Deliciosa nieve, bocadillos dulces e ingredientes temporales hechos a mano";
    mbb.innerHTML = "El mejor yogurt congelado en la ciudad de Little Rock";
    nbb.innerHTML = "QUE ESPERAR";
    obb.innerHTML = "HOSPEDAJE"
    pbb.innerHTML = "OBSEQUIOS";
    qbb.innerHTML = "ATRACCIONES";
    rbb.innerHTML = "Estamos concientes de la larga distancia de nuestro evento para ambas familias. Por lo tanto, pensamos que lo menos que podemos " + 
    "hacer es proveer un proceso mas facil de hospedaje. En este momento estamos trabajando con diferentes hoteles para proveer descuentos en hoteles especificos " + 
    "para todos nuestros invitados. Mas detalles aun estar por venir mientras la fecha se avecina. Mientras tanto, pensamos que seria buena idea darte algunas opciones que pensamos que " +
    " te pueden gustar. Estas, opciones no estan asociadas con nuestro evento y por lo tanto no ofrecen descuentos a nuestros invitados. Como quiera, talvez aun puede que " + 
    "encunetres algunas buenas ofertas si reservas a tiempo. Ya sea ques estes buscando una cabaña familiar o simplemente un cuarto de hotel estas opciones pueden ayudar.";
    sbb.innerHTML = "Lo mas importante para nosotros es tener en compania a todos nuestros invitados. Es por eso que nuestro mas grande anhelo es que todos se sientan comodos y sin " +
    "la espectativa de la obligacion a obsequiar alguna cosa. Pero como la costumbre es en una boda queremos dar la oportunidad a todos nuestro invitados que saben cuan dificil es comenzar una " +
    "nueva vida desde zero como matrimonio y gusten ayudarnos."
    tbb.innerHTML = "Queremos que tengas tanta divercion como puedas y hagas de tu viaje lo mejor. En la galeria de abajo hemos sugerido algunas opciones de cosas que puedes hacer o lugares que " +
    "puedes visitar durante tu estancia en Hot Springs. Estas opciones abarcan desde divercion familiar hasta los lugares mas populares para satisfacer tu hambre.";
    ubb.innerHTML = "BIENVENIDO";
    vbb.innerHTML = "Porfavor entra el codigo impreso en tu invitacion con el numero total de personas que vienen contigo.";
    yyy.innerHTML = "Estamos triste de escucharlo, graciapor avisarnos!"

  }
  else 
  {
    abb.innerHTML = "MORE DETAILS";
    cbb.innerHTML = "We want to make our wedding a representation of our faith, personalities, interests, and background. The wedding ceremony and reception will be filled with " + 
    "different traditions, food, music and activities that will represent both of our cultures as it is to expect in a Mexican-American wedding. " +
    "More specific details are yet to come as the date approaches!";
    dbb.innerHTML = "Enjoy the gorgeous garden scenery of the Anthony Chapel. Free to all wedding guests";
    ebb.innerHTML = "Thermal springs, mountain views, incredible geology, hikes, and creeks";
    fbb.innerHTML = "Water and Theme park great for the family";
    gbb.innerHTML = "Take yourself back to the days of the 20's, 30's, and 40's";
    hbb.innerHTML = "Connect with amazing wild life";
    ibb.innerHTML = "Best chicken in Little Rock";
    jbb.innerHTML = "The Pantry Eateries offer Czech and German classic dishes";
    kbb.innerHTML = "Everything cooked comes from local farms"
    lbb.innerHTML = "Small-batch, handcrafted ice cream and sweet treats made from local and seasonal ingredients";
    mbb.innerHTML = "Best frozen yogurts in Little Rock";
    nbb.innerHTML = "WHAT TO EXPECT";
    obb.innerHTML = "LODGING"
    pbb.innerHTML = "REGISTRY";
    qbb.innerHTML = "WHAT TO DO";
    rbb.innerHTML = "We understand the long commute to this event for both sides of the party guests. Therefore, we think that the least we can do is to help make the lodgiong process " + 
    "a little easier. At the moment, we are working with participating hotels in the area that could offer a discount to all of our party guests. " +
    "More details are yet to come about it as the date approaches. In the mean time, we thought we could provide you with a few options that we think you might like. These options are not " + 
    "associated to our event, and therefore we apologize that no discounts are available. However, you might still find some great deals if booked on time. Whether you are looking for a cabin or simply a room hotel these options might help.";
    sbb.innerHTML = "The most important thing for us is to have all of our guests sharing this special moment with us. " +
    "Therefore it is our biggest desire to never make our guests feel compromised to gift us anything. However, as we all know starting a brand new home from the ground up can be a " + 
    "financially strenous task and are thankful for those who want to support us in starting this new life by donations of any kind.";
    tbb.innerHTML = "We want you to make the best of your trip, therefore, below are some options that we think you might enjoy visiting while in town. These options range from attractions " + 
    "to some of the most popular places to eat."
    ubb.innerHTML = "WELCOME";
    vbb.innerHTML = "Please enter the code printed in your invitation along with the number of guests to RSVP";
    yyy.innerHTML = "We are sadden to hear that! Thank you for letting us now!"
  
  }
}

/****** This item will pull the saved the last status of the checkbox and load it when the body load (see funtion in body HTML) 
function load(){    
  var remember= JSON.parse(localStorage.getItem('chek2'));
  document.querySelector(".checked2").checked = remember;

}

*/
