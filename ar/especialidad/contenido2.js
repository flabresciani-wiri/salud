function getUrlVars() {
    event.preventDefault();
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
   }

function completar_contenido_dinamico() {
  event.preventDefault();
  //  Valores por defecto del sitio
  var especialidad = decodeURI(getUrlVars()["e"]);
  var content = decodeURI(getUrlVars()["utm_content"]);

  var title = "Wiri Salud - Especialistas de calidad de forma inmediata y sin cuota mensual.";
  var img;// = "https://v.fastcdn.co/u/2d7105a6/57424846-0-Ginecologa-2.png";
  var especialistas = "Médicos";
  var especialista = "médico";
  var boton1_texto;// = "Reservá un turno con un " + especialista;
  var boton1_url;// = "https://wiri.la/especialidad/" + especialidad + "?location=current";
  if (boton1_url == "https://wiri.la/especialidad/undefined?location=current") {boton1_url = "https://wiri.la/buscador?location=current";}
  if (boton1_url == "https://wiri.la/especialidad/?location=current") {boton1_url = "https://wiri.la/buscador?location=current";}
  var boton2_texto;// = "Ver todas las especialidades";
  var boton2_url;// = "#page-block-ya78gn2vsf";//va a sección Ver todos los especialistas
  var keywords;// = "Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri, Medicina por imágenes, Consultorios médicos, Telemedicina";
  var description;// = "Conocé Wiri, la salud que merecés al precio que necesitás, Comenzá a cuidarte mejor con los mejores médicos particulares a precios accesibles, sin cuotas ni trámites. Turnos inmediatos y más de 30% de descuento en farmacias y estudios solo en Wiri Salud.";
  var bullet1_texto;// = "<strong>Turnos inmediatos</strong> desde $ 500.";
  var bullet2_texto;// = "<strong>Médicos particulares</strong> cerca tuyo.</span>";
  var bullet3_texto;// = "<strong>Sin cuota mensual</strong>. Sin trámites.";
  var bullet4_texto;// = "No necesitás obra social ni prepaga.";
  var bullet5_texto;

  var comofunciona1_titulo; //= "Buscá un médico que te quede cerca";
  var comofunciona1_explicacion; //= "Filtrá por especialidad. Ordená por precio, distancia, fecha o recomendaciones. Te podés atender presencialmente o por videollamada.";
  var comofunciona2_titulo; //= "Reservá un turno";
  var comofunciona2_explicacion; //= "Elegí el día y horario que más te convenga, y agendá un turno con el médico.";
  var comofunciona3_titulo; //= "Atendete y pagá en el consultorio";
  var comofunciona3_explicacion;// = "Asistí al médico y pagá en el consultorio. Si querés, podés calificar al especialista para que otras personas puedan elegir.";
  var comofunciona_url;// = "https://wiri.la/buscador?location=current";
 
  var packs;
  var h1_title;
  var boton1;
  var boton2;
  var bajada;



  //---------------- Inicio de los valores por defecto de la sección pack-------------------------------------------------------------------------------------
      var pack_titulo = "Conocé nuestros Packs";
      var pack_bajada = "¿Necesitás hacerte un chequeo anual? Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana.";

      var pack1_img = "https://v.fastcdn.co/u/2d7105a6/57229751-0-Cards-para-landings-.jpg";
      var pack1_titulo = "Consulta ginecológica";
      var pack1_precio = "Desde $ 600"
      var pack1_bajada = "Resolvé todas tus dudas con un ginecólogo.";
      var pack1_urldestino = "https://wiri.la/especialidad/ginecologia?location=current";

      var pack2_img = "https://v.fastcdn.co/u/2d7105a6/57229746-0-Cards-para-landings-.jpg";
      var pack2_titulo = "Tests COVID-19";
      var pack2_precio = "Desde $ 2.223"
      var pack2_bajada = "Hisopado PCR - Test Anticuerpos<br>Test rápido - PCR domicilio";
      var pack2_urldestino = "https://salud.wiri.la/ar/test-covid19";

      var pack3_img = "https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg"
      var pack3_titulo = "Telemedicina programada";
      var pack3_precio = "Desde $ 500"
      var pack3_bajada = "Atendete online con médicos de más de 40 especialidades.";
      var pack3_urldestino = "https://wiri.la/telemedicina";

      var pack4_img = "https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg"
      var pack4_titulo = "Guardia Ginecológica 24 hs";
      var pack4_precio = "Desde $ 600"
      var pack4_bajada = "Ginecólogos 24 horas a tu disposición. Atendete ya.";
      var pack4_urldestino = "https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==";

  //----------------Fin de los valores por defecto de la sección pack-------------------------------------------------------------------------------------










//---------------- inicio de cambios de acuerdo a e= -------------------------------------------------------------------------------------
  switch(especialidad) {
      case 'ginecologia':
        especialistas = "Ginecólogos";      
        especialista = "ginecólogo";
        keywords = "Ginecología, Ginecólogos, Ginecólogas, Ginecólogos particulares, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        img = "https://v.fastcdn.co/u/2d7105a6/57229571-0-Ginecologa-1.jpg";

        //inicio del pack
          pack_titulo = "Packs de Ginecología";
          pack_bajada = "¿Necesitás hacerte un chequeo anual o resolver tus dudas con un ginecólogo? Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana.";

          pack1_img = "https://v.fastcdn.co/u/2d7105a6/57229751-0-Cards-para-landings-.jpg";
          pack1_titulo = "Consulta ginecológica";
          pack1_precio = "Desde $ 600"
          pack1_bajada = "Resolvé todas tus dudas con un ginecólogo.";
          pack1_urldestino = "https://wiri.la/especialidad/ginecologia?location=current";

          pack2_img = "https://v.fastcdn.co/u/2d7105a6/57229746-0-Cards-para-landings-.jpg";
          pack2_titulo = "Chequeo anual";
          pack2_precio = "Desde $ 1.200"
          pack2_bajada = "Incluye consulta + PAP + Colposcopia.";
          pack2_urldestino = "https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current";

          pack3_img = "https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg"
          pack3_titulo = "Guardia Ginecológica 24 hs";
          pack3_precio = "Desde $ 600"
          pack3_bajada = "Ginecólogos 24 horas a tu disposición. Atendete ya.";
          pack3_urldestino = "https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==";

          pack4_img = "https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg"
          pack4_titulo = "Videoconsulta ginecológica";
          pack4_precio = "Desde $ 600"
          pack4_bajada = "Hablá con un especialista sin salir de casa.";
          pack4_urldestino = "https://wiri.la/especialidad/ginecologia/telemedicina";
        //fin del pack
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
        img = "https://v.fastcdn.co/u/2d7105a6/57387411-0-Obstetricia.jpg";

        //inicio del pack
          pack_titulo = "Packs de obstetricia";
          pack_bajada = "Con nuestros packs obstétricos podés cuidarte mejor a vos y a tu bebé, seleccioná el tuyo y atendete esta misma semana pagando solo cuando te atendés.";

          pack1_img = "https://v.fastcdn.co/u/2d7105a6/57229751-0-Cards-para-landings-.jpg";
          pack1_titulo = "Consulta obstétrica";
          pack1_precio = "Desde $ 700"
          pack1_bajada = "Resolvé todas tus dudas con los mejores obstetras.";
          pack1_urldestino = "https://wiri.la/especialidad/obstetricia?location=current";

          pack2_img = "https://v.fastcdn.co/u/2d7105a6/57387951-0-Cards-para-landings-.jpg";
          pack2_titulo = "Ecografía obstétrica";
          pack2_precio = "Desde $ 900"
          pack2_bajada = "Examen con visualización del embrión o feto.";
          pack2_urldestino = "https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current";

          pack3_img = "https://v.fastcdn.co/u/2d7105a6/57387946-0-Cards-para-landings-.jpg"
          pack3_titulo = "Control del embarazo";
          pack3_precio = "Desde $ 1.730"
          pack3_bajada = "Examen prenatal mediante una muestra de sangre.";
          pack3_urldestino = "https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current";

          pack4_img = "https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg"
          pack4_titulo = "Videoconsulta obstétrica";
          pack4_precio = "Desde $ 500"
          pack4_bajada = "Hablá con un especialista sin salir de casa.";
          pack4_urldestino = "https://wiri.la/especialidad/ginecologia/telemedicina";
        //fin del pack 
      break;

      case 'psiquiatria':
      especialistas = "Psiquiatras";
      especialista = "psiquiatra";
      keywords = "psiquiatra, Psiquiatras, psiquiatria, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'telemedicina':
      keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";
      h1_title = "Atendete online con médicos particulares";
      boton1_texto = "Atendete por telemedicina";
      boton1_url = "https://wiri.la/telemedicina";
      boton2_texto = "Agendá un turno presencial";
      boton2_url = "https://wiri.la/buscador?location=current";      
      bullet2_texto = "<strong>Médicos particulares</strong> desde tu casa.";
      img = "https://v.fastcdn.co/u/2d7105a6/57424846-0-Ginecologa-2.png";

      comofunciona1_titulo = "Seleccioná a tu especialista";
      comofunciona1_explicacion = "Filtrá y ordená por precio, fecha o recomendaciones. Si lo preferís, también podés atenderte de forma presencial.";
      comofunciona3_titulo = "Atendete";
      comofunciona3_explicacion = "Conectate a la videoconsulta en el horario reservado. Después podés calificar al especialista para que otras personas puedan elegir.";
      comofunciona_url = "https://wiri.la/telemedicina";

        //inicio del pack
          pack_titulo = "Packs de Telemedicina";
          pack_bajada = "Atendete por telemedicina evitando contagios y esperas en guardias. Agendá un turno y cuidate de manera más fácil, simple y rápida, estés donde estés.";

          pack1_img = "https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg";
          pack1_titulo = "Telemedicina programada";
          pack1_precio = "Desde $ 500"
          pack1_bajada = "Atendete online con médicos de más de 40 especialidades.";
          pack1_urldestino = "https://wiri.la/especialidad/obstetricia?location=current";

          pack2_img = "https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg";
          pack2_titulo = "Guardia online 24 hs";
          pack2_precio = "$ 600"
          pack2_bajada = "Médicos clínicos, pediatras y ginecólogos 24 horas, los 7 días de la semana. Atendete ya.";
          pack2_urldestino = "https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current";

          pack3_img = "https://v.fastcdn.co/u/2d7105a6/57387946-0-Cards-para-landings-.jpg"
          pack3_titulo = "Psicoterapia online";
          pack3_precio = "Desde $ 500"
          pack3_bajada = "¿La situación actual te supera? Hablá con un profesional.";
          pack3_urldestino = "https://wiri.la/especialidad/psicologia/telemedicina";

          pack4_img = "https://v.fastcdn.co/u/2d7105a6/57424796-0-Cards-para-landings-.jpg";
          pack4_titulo = "Guardia pediátrica";
          pack4_precio = "$ 600"
          pack4_bajada = "¿Emergencia? Conectate con un profesional en el momento y desde donde estés.";
          pack4_urldestino = "https://wiri.la/especialidad/psicologia/telemedicina";
        //fin del pack 
      break;

      case 'psicoterapiaonline':
      especialistas = "Psicoterapistas online";
      especialista = "psiquiatra";
      keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Wiri, Psicología, Psicología online Argentina, Psicólogos low cost, Psicólogos online, Terapia por videollamada, Psicología número teléfono";
      h1_title = "Psicólogos particulares online";

      bullet1_texto = "<strong>Psicoterapia online</strong> desde $ 500";
      bullet2_texto = "<strong>Turnos inmediatos</strong> desde casa.";
      bullet4_texto = "<strong>Más de 40 especialidades</strong>.";
      img = "https://v.fastcdn.co/u/2d7105a6/57413646-0-Salud-Mental-1.jpg";
      boton1_texto = "Reservá un turno con un psicólogo";
      boton1_url = "https://wiri.la/especialidad/psicologia/telemedicina";
      boton2_texto = "Agendá un turno presencial";
      boton2_url = "https://wiri.la/buscador?location=current";

      comofunciona1_titulo = "Seleccioná a tu especialista";
      comofunciona1_explicacion = "Filtrá y ordená por precio, fecha o recomendaciones. Si lo preferís, también podés atenderte de forma presencial.";
      comofunciona3_titulo = "Atendete";
      comofunciona3_explicacion = "Conectate a la videoconsulta en el horario reservado. Después podés calificar al especialista para que otras personas puedan elegir.";
      comofunciona_url = "https://wiri.la/especialidad/psicologia/telemedicina";
      break;
  }
//---------------- Fin de cambios de acuerdo a e= -------------------------------------------------------------------------------------






//---------------- Inicio de cambios de acuerdo a utm_content -------------------------------------------------------------------------------------
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
      case 'pareja':
      img = "https://i.ibb.co/TkzZdkD/Salud-Mental-2.jpg";
      break;



  }
//---------------- Fin de cambios de acuerdo a utm_content -------------------------------------------------------------------------------------



    if(img != null) {
    var url_img = "url(" + img + ")";
    document.getElementById("element-772b").style.backgroundImage = url_img;}

    if(h1_title != null)
    {document.getElementById("h1_title").innerHTML = h1_title;}

    if(boton1_url != null | boton1_texto != null)
    {boton1 = "<a href='" + boton1_url + "' id='link-6jksnupd35j' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>" + boton1_texto + "</span></a>";
    document.getElementById("boton1").innerHTML = boton1;}

    if(boton2_url != null | boton2_texto != null)
    {boton2 = "<a href='" + boton2_url + "' id='link-6jksnupd35j' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>" + boton2_texto + "</span></a>";
    document.getElementById("boton2").innerHTML = boton2;}

    packs = "<div class='section-holder-border item-block item-absolute' data-at='section-border'></div><div class='section-holder-overlay item-block item-absolute' data-at='section-overlay'></div><div class='section-block'><div class='section-inner section-fit section-relative'><div class='widget item-absolute headline  ' id='element-1127' data-at='headline'><div class='contents'><h1><span class='x_b614627d x_f82204f0'><span class='x_a0ecb142'>" + pack_titulo +"</span></span></h1></div></div><div class='widget item-absolute paragraph  ' id='element-1133' data-at='paragraph'><div class='contents'><p class='x_dc68832a x_2c80ab57'><span class='x_a0ecb142'>" + pack_bajada + "</span></p></div></div><div class='widget item-absolute ' id='element-1131'><div class='contents shape box figure' data-at='shape' data-src='' style='background-image: url(" + pack1_img +");'></div></div><div class='widget item-absolute  ' id='element-1164'><a href='" + pack1_urldestino + "' id='link-6tpukgmk3t' class='url-link btn    item-block' data-at='button' data-link-6tpukgmk3t=''></a></div><div class='widget item-absolute ' id='element-1132'><div class='contents shape box figure' data-at='shape' data-src='' style='background-image: url(" + pack2_img +");'></div></div><div class='widget item-absolute  ' id='element-1165'><a href='" + pack2_urldestino + "' id='link-3zvmxjazhbi' class='url-link btn    item-block' data-at='button' data-link-3zvmxjazhbi=''></a></div><div class='widget item-absolute ' id='element-1128'><div class='contents shape  box figure ' data-at='shape'></div></div><div class='widget item-absolute ' id='element-1135'><div class='contents shape  box figure ' data-at='shape'></div></div><div class='widget item-absolute headline  ' id='element-1130' data-at='headline'><div class='contents'><h3><span class='x_e4d7cbfa x_70463731'><span class='x_a0ecb142'>" + pack1_titulo + "</span></span></h3></div></div><div class='widget item-absolute headline  ' id='element-1134' data-at='headline'><div class='contents'><h3><span class='x_7a702815 x_225e04ca'><span class='x_a0ecb142'>" + pack1_precio + "</span></span></h3></div></div><div class='widget item-absolute headline  ' id='element-1136' data-at='headline'><div class='contents'><h3><span class='x_da6ad2be'><span class='x_a0ecb142'>" + pack2_titulo + "</span></span></h3></div></div><div class='widget item-absolute headline  ' id='element-1137' data-at='headline'><div class='contents'><h3><span class='x_6f8d78f4 x_225e04ca'><span class='x_a0ecb142'>" + pack2_precio + "</span></span></h3></div></div><div class='widget item-absolute paragraph  ' id='element-1129' data-at='paragraph'><div class='contents'><p class='x_ea16b79e x_0a34168d'><span class='x_a0ecb142'>" + pack1_bajada + "</span></p></div></div><div class='widget item-absolute paragraph  ' id='element-1138' data-at='paragraph'><div class='contents'><p class='x_fae6260b x_0a34168d'><span class='x_a0ecb142'>" + pack2_bajada + "</span></p></div></div><div class='widget item-absolute ' id='element-1142'><div class='contents shape box figure' data-at='shape' data-src='' style='background-image: url(" + pack3_img +");'></div></div><div class='widget item-absolute ' id='element-1143'><div class='contents shape box figure' data-at='shape' data-src='' style='background-image: url(" + pack4_img +");'></div></div><div class='widget item-absolute  ' id='element-1166'><a href='" + pack4_urldestino + "' id='link-ypl60b8hasg' class='url-link btn    item-block' data-at='button' data-link-ypl60b8hasg=''></a></div><div class='widget item-absolute  ' id='element-1167'><a href='" + pack3_urldestino + "' id='link-44nkxc2kzis' class='url-link btn    item-block' data-at='button' data-link-44nkxc2kzis=''></a></div><div class='widget item-absolute ' id='element-1139'><div class='contents shape  box figure ' data-at='shape'></div></div><div class='widget item-absolute ' id='element-1145'><div class='contents shape  box figure ' data-at='shape'></div></div><div class='widget item-absolute headline  ' id='element-1141' data-at='headline'><div class='contents'><h3><span class='x_da6ad2be'><span class='x_a0ecb142'>" + pack3_titulo + "</span></span></h3></div></div><div class='widget item-absolute headline  ' id='element-1144' data-at='headline'><div class='contents'><h3><span class='x_6f8d78f4 x_225e04ca'><span class='x_a0ecb142'>" + pack3_precio + "</span></span></h3></div></div><div class='widget item-absolute headline  ' id='element-1146' data-at='headline'><div class='contents'><h3><span class='x_00098c5b x_fcd2d15f'><span class='x_a0ecb142'>" + pack4_titulo + "</span></span></h3></div></div><div class='widget item-absolute headline  ' id='element-1147' data-at='headline'><div class='contents'><h3><span class='x_6f8d78f4 x_225e04ca'><span class='x_a0ecb142'>" + pack4_precio + "</span></span></h3></div></div><div class='widget item-absolute paragraph  ' id='element-1140' data-at='paragraph'><div class='contents'><p class='x_fae6260b x_0a34168d'><span class='x_a0ecb142'>" + pack3_bajada + "</span><span class='x_a269ab78'></span></p></div></div><div class='widget item-absolute paragraph  ' id='element-1148' data-at='paragraph'><div class='contents'><p class='x_fae6260b x_0a34168d'><span class='x_a0ecb142'>" + pack4_bajada + "</span></p></div></div></div></div>";

    document.getElementById("page-block-f5f0z4spz3q").innerHTML = packs;


    if(comofunciona1_titulo != null) {document.getElementById("comofunciona1_titulo").innerHTML = comofunciona1_titulo;}
    if(comofunciona2_titulo != null) {document.getElementById("comofunciona2_titulo").innerHTML = comofunciona2_titulo;}
    if(comofunciona3_titulo != null) {document.getElementById("comofunciona3_titulo").innerHTML = comofunciona3_titulo;}
    if(comofunciona1_explicacion != null) {document.getElementById("comofunciona1_explicacion").innerHTML = comofunciona1_explicacion;}
    if(comofunciona2_explicacion != null) {document.getElementById("comofunciona2_explicacion").innerHTML = comofunciona2_explicacion;}
    if(comofunciona3_explicacion != null) {document.getElementById("comofunciona3_explicacion").innerHTML = comofunciona3_explicacion;}
    if(comofunciona_url != null) {document.getElementById("element-1064").innerHTML = "<a href='" + comofunciona_url +"'' id='link-hdqfpnq76k' class='url-link btn    item-block' data-at='button' data-link-hdqfpnq76k=''>Empezar ahora</a>";}

    if (bajada == null) {
      if(comofunciona_url != null) {document.getElementById("bullet1_texto").innerHTML = bullet1_texto;
      document.getElementById("bullet2_texto").innerHTML = bullet2_texto;
      document.getElementById("bullet3_texto").innerHTML = bullet3_texto;
      document.getElementById("bullet4_texto").innerHTML = bullet4_texto;
      if (bullet5_texto != null) {document.getElementById("bullet5_texto").innerHTML = "<li><span class='x_f2074b6c'>" + bullet5_texto +"</span></li>";}
    } else {document.getElementById("bajada").innerHTML = bajada;}}

    var title = "Wiri Salud - " + especialistas + " de calidad de forma inmediata y sin cuota mensual.";
    document.getElementsByTagName('meta')["keywords"].content = keywords;
    document.title = title;

}