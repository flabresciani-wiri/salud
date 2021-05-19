function getUrlVars() {
    event.preventDefault();
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
   }

function display_title_practicas() {
  event.preventDefault();
  var opcionespracticas = "";
  var title = "";
  var img = "";
  var especialistas = "";
  var especialista = "";
  var description = "";
  var keywords = "";
  var especialidad = decodeURI(getUrlVars()["e"]);
  var content = decodeURI(getUrlVars()["utm_content"]);


  switch(content) {
      case 'buscador':
      img = "https://i.ibb.co/HCfThGf/Ginecolog-a-1.jpg";
      break;
      case 'general':
      img = "https://i.ibb.co/NtcdTrL/Ginecolog-a-2.jpg";
      break;
      case 'primeraconsulta':
      img = "https://i.ibb.co/BL9bxb1/Ginecolog-a-3.jpg";
      break;
      case 'anticoncepcion':
      img = "https://i.ibb.co/hdCKXgt/Ginecolog-a-4.jpg";
      break;
      case 'prevencion':
      img = "https://i.ibb.co/bJmN1Ph/Ginecolog-a-5.jpg";
      break;
      case 'climaterio':
      img = "https://i.ibb.co/b2xX0XW/Ginecolog-a-6.jpg";
      break;
      default: 
      img = "https://i.ibb.co/NtcdTrL/Ginecolog-a-2.jpg";
      break;
}


  switch(especialidad) {
      case 'ginecologia':
      especialistas = "Ginecólogos";
      especialista = "ginecólogo";
      keywords = "Ginecología, Ginecólogos, Ginecólogas, Ginecólogos particulares, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'clinica-medica':
      especialistas = "Médicos clínicos";
      especialista = "médicos clínicos";
      keywords = "Médicos, clínicos, medicina, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'cardiologia':
      especialistas = "Cardiólogos";
      especialista = "cardiólogo";
      keywords = "cardiologia, cardiólogo, Cardiólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;


      case 'dermatologia':
      especialistas = "Dermatólogos";
      especialista = "dermatólogo";
      keywords = "dermatologia, dermatólogo, Dermatólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'psicologia':
      especialistas = "Psicólogos";
      especialista = "psicólogo";
      keywords = "psicologia, psicólogo, Psicólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;


      case 'gastroenterologia':
      especialistas = "Gastroenterólogos";
      especialista = "gastroenterólogo";
      keywords = "gastroenterología, gastroenterólogo, Gastroenterólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'nutricion':
      especialistas = "Nutricionistas";
      especialista = "nutricionista";
      keywords = "nutrición, nutricionista, Nutricionistas, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'odontologia':
      especialistas = "Odontólogos";
      especialista = "odontólogo";
      keywords = "odontologia, Odontólogos, odontólogo, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'oftalmologia':
            especialistas = "Oftalmólogos";
      especialista = "oftalmólogo";
      keywords = "oftalmología, oftalmólogo, Oftalmólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'otorrinolaringologia':
      especialistas = "Otorrinolaringólogo";
      especialista = "otorrinolaringólogo";
      keywords = "Otorrinolaringólogo, otorrinolaringólogo, otorrinolaringología, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'pediatria':
      especialistas = "Pediatras";
      especialista = "pediatra";
      keywords = "pediatria, pediatra, Pediatras, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'traumatologia':
      especialistas = "Traumatólogos";
      especialista = "traumatólogo";
      keywords = "Traumatólogos, traumatólogo, traumatología, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'urologia':
      especialistas = "Urólogos";
      especialista = "urólogo";
      keywords = "urología, urólogo, Urólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'endocrinologia':
      especialistas = "Endocrinólogos";
      especialista = "endocrinólogo";
      keywords = "endocrinología, endocrinólogo, Endocrinólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;
      
      case 'obstetricia':
      especialistas = "Obstetras";
      especialista = "obstetra";
      keywords = "obstetricia, obstetra, Obstetras, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'psiquiatria':
      especialistas = "Psiquiatras";
      especialista = "psiquiatra";
      keywords = "psiquiatra, Psiquiatras, psiquiatria, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      default: 
      especialistas = "Médicos";
      especialista = "médico";
      keywords = "médico, médicos, medicina general, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;
  }

    var linkespecialidad = "<a href='https://wiri.la/especialidad/" + especialidad + "?location=current' id='link-6jksnupd35j' target='_blank' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>Reservá un turno con un " + especialista + "</span></a>";
    
    var url_img = "url(" + img + ")";
    document.getElementById("element-772").style.backgroundImage = url_img;
//    document.getElementById("element-772").style.backgroundPosition = "50% 50%";
//    document.getElementById("element-772").style.backgroundSize = "cover";
//    document.getElementById("element-772").style.backgroundColor: "#ffffff00";

    var title = "Wiri Salud - " + especialistas + " de calidad de forma inmediata y sin cuota mensual.";


    document.getElementsByTagName('meta')["keywords"].content = keywords;
    document.getElementById("especialistas").innerText = especialistas;
    document.getElementById("linkespecialidad").innerHTML = linkespecialidad;
    document.title = title;

}