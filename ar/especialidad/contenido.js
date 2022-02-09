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
      var pack_bajada = "Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana presencialmente o por telemedicina.";

      var pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/a11c7a59-c7b5-276d-3217-486e8c62850b.jpg";
      var pack1_titulo = "Telemedicina programada";
      var pack1_precio = "Desde $ 500"
      var pack1_bajada = "Atendete online con médicos de todas las especialidades.";
      var pack1_urldestino = "https://wiri.la/telemedicina";

      var pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/7c0d3c9b-ed27-0b57-6998-97583de759e2.jpg";
      var pack2_titulo = "Chequeo anual ginecológico";
      var pack2_precio = "Desde $ 1.200"
      var pack2_bajada = "Hacé tu chequeo anual ginecológico. Incluye consulta + PAP + Colposcopia.";
      var pack2_urldestino = "https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current";

      var pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/806634e6-f71c-5c0e-74d0-487e00f81df1.jpg";
      var pack3_titulo = "Test Covid-19";
      var pack3_precio = "Desde $ 2.200"
      var pack3_bajada = "Test de anticuerpos, test rápido e hisopados PCR ¡Incluso a domicilio!.";
      var pack3_urldestino = "https://salud.wiri.la/ar/test-covid19";

      var pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/f49938f6-dd70-bcd0-bd5f-497586417b28.jpg";
      var pack4_titulo = "Guardia online 24 hs";
      var pack4_precio = "$ 600"
      var pack4_bajada = "Médicos clínicos, pediatras y ginecólogos 24 horas, 365 días.";
      var pack4_urldestino = "https://wiri.la/especialidad/guardia?";

//----------------Fin de los valores por defecto de la sección pack-------------------------------------------------------------------------------------

//---------------- inicio de cambios de acuerdo a e= -------------------------------------------------------------------------------------
  switch(especialidad) {
      case 'ginecologia':
        especialistas = "Ginecólogos";      
        especialista = "ginecólogo";
        keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Wiri, Ginecología, Ginecólogos, ginecólogas, chequeo anual ginecología, pap y colpo. Telemedicina 24 horas, Telemedicina online, Médicos 24 horas";
        img = "https://v.fastcdn.co/u/2d7105a6/57229571-0-Ginecologa-1.jpg";

        h1_title = "Ginecólogos particulares a solo un click";
        boton1_texto = "Reservá un turno con un ginecólogo";
        boton1_url = "https://wiri.la/especialidad/ginecologia?location=current";
        boton2_texto = "Reservá una videoconsulta ginecológica";
        boton2_url = "https://wiri.la/especialidad/ginecologia/telemedicina"; 

        //inicio del pack
          pack_titulo = "Conocé nuestros packs";
          pack_bajada = "¿Necesitás hacerte un chequeo anual o resolver tus dudas con un ginecólogo? Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana.";

          pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/7c0d3c9b-ed27-0b57-6998-97583de759e2.jpg"
          pack1_titulo = "Chequeo anual ginecológico";
          pack1_precio = "Desde $ 1.200"
          pack1_bajada = "Hacé tu chequeo anual ginecológico. Incluye consulta + PAP + Colposcopia.";
          pack1_urldestino = "https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current";

          pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/eb5f2a8e-f2cd-9ac1-bc67-84dcd0ac5b6b.jpg";
          pack2_titulo = "Consulta ginecológica";
          pack2_precio = "Desde $ 600"
          pack2_bajada = "Resolvé todas tus dudas con un ginecólogo particular esta misma semana.";
          pack2_urldestino = "https://wiri.la/especialidad/ginecologia?location=current"; 

          pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/f49938f6-dd70-bcd0-bd5f-497586417b28.jpg";
          pack3_titulo = "Guardia ginecológica 24 horas";
          pack3_precio = "$ 600"
          pack3_bajada = "Ginecólogos disponibles las 24 horas, los 7 días de la semana. Atendete ya.";
          pack3_urldestino = "https://wiri.la/profesional/llamando-al-doctor-ginecologia/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIn0=";

          pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/a11c7a59-c7b5-276d-3217-486e8c62850b.jpg";
          pack4_titulo = "Videoconsulta ginecológica";
          pack4_precio = "Desde $ 600"
          pack4_bajada = "Atendete con un especialista y resolvé todas tus dudas desde donde estés.";
          pack4_urldestino = "https://wiri.la/especialidad/ginecologia/telemedicina";

        //fin del pack
      break;

      case 'clinica-medica':
        especialistas = "Médicos clínicos";
        especialista = "médicos clínicos";
        keywords = "Wiri Salud, Médicos particulares, Médico clínico particular, Medicina low cost, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";
        h1_title = "Médicos clínicos particulares a solo un click";
        boton1_texto = "Reservá un turno presencial";
        boton1_url = "https://wiri.la/especialidad/clinica-medica?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";
      break;

/*
      case '':
        keywords = "Wiri Salud, Médicos particulares, Médico clínico particular, Medicina low cost, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";
        h1_title = "Médicos clínicos particulares a solo un click";
        boton1_texto = "Reservá un turno presencial";
        boton1_url = "https://wiri.la/especialidad/clinica-medica?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current"; 
      break;
*/
      case 'cardiologia':
        especialistas = "Cardiólogos";
        especialista = "cardiólogo";
        keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Cardiología, cardiólogos Argentina, cardiólogo particular, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina online, Médicos 24 horas";
        h1_title = "Cardiólogos particulares a solo un click";
        boton1_texto = "Reservá un turno con un cardiólogo";
        boton1_url = "https://wiri.la/especialidad/cardiologia?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";

        //inicio del pack
          pack_titulo = "Conocé nuestros Packs";
          pack_bajada = "Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana presencialmente o por telemedicina.";

          pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/eb5f2a8e-f2cd-9ac1-bc67-84dcd0ac5b6b.jpg";
          pack1_titulo = "Consulta cardiológica";
          pack1_precio = "Desde $ 500"
          pack1_bajada = "Atendete con un cardiólogo y resolvé todas tus dudas.";
          pack1_urldestino = "https://wiri.la/especialidad/cardiologia?location=current";

          pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/e5ce9da0-beef-8e9f-5bb8-55251e11c2f1.jpg"
          pack2_titulo = "Apto físico";
          pack2_precio = "Desde $ 700"
          pack2_bajada = "Conseguí tu apto físico. Incluye consulta con un cardiólogo y electro.";
          pack2_urldestino = "https://wiri.la/especialidad/cardiologia/apto-fisico?location=current";

          pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/a11c7a59-c7b5-276d-3217-486e8c62850b.jpg";
          pack3_titulo = "Telemedicina programada";
          pack3_precio = "Desde $ 500"
          pack3_bajada = "Atendete por videollamada con nuestros cardiólogos estés donde estés.";
          pack3_urldestino = "https://wiri.la/especialidad/cardiologia/telemedicina?location=current";


          pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/f49938f6-dd70-bcd0-bd5f-497586417b28.jpg";
          pack4_titulo = "Guardia online 24 hs";
          pack4_precio = "Desde $ 600"
          pack4_bajada = "Conectate con un médico las 24 horas los 7 días de la semana.";
          pack4_urldestino = "https://wiri.la/especialidad/guardia?";
        //fin del pack 
      break;

      case 'dermatologia':
        especialistas = "Dermatólogos";
        especialista = "dermatólogo";
        keywords = "Wiri Salud, Médicos particulares, dermatólogos particulares, limpieza de cutis, mesoterapia, Medicina low cost, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";
        h1_title = "Dermatólogos particulares a solo un click";
        boton1_texto = "Reservá un turno con un dermatólogo";
        boton1_url = "https://wiri.la/especialidad/dermatologia?location=current";
        boton2_texto = "Reservá una videoconsulta médica";
        boton2_url = "https://wiri.la/especialidad/dermatologia/telemedicina?location=current";
      break;


      case 'estudios':
        keywords = "Wiri Salud, estudios médicos baratos, analisis de sangre, radiografias, ecografias, estudios de laboratorio, estudios de imágenes, Médicos particulares, Wiri, ";

        boton1_texto = "Ver estudios por imágenes";
        boton1_url = "https://salud.wiri.la/ar/categoria.html?e=diagnostico-por-imagenes";

        boton2_texto = "Ver estudios de laboratorio";
        boton2_url = "https://salud.wiri.la/ar/categoria.html?e=laboratorios-clinicos"; 

        bullet1_texto = "<strong>Turnos inmediatos</strong> desde $500.";
        bullet2_texto = "<strong>Estudios médicos y análisis</strong> a precios accesibles.";
        bullet3_texto = "<strong>Sin cuota mensual.</strong> Sin trámites.";
        bullet4_texto = "<strong>No necesitás obra social</strong> ni prepaga.";
        img = "https://v.fastcdn.co/u/2d7105a6/57424846-0-Ginecologa-2.png";

        comofunciona1_titulo = "Buscá la especialidad, estudio o práctica que necesites";
        comofunciona1_explicacion = "Filtrá por práctica. Ordená por precio, distancia, fecha o recomendaciones de otros pacientes.";
        comofunciona2_titulo = "Reservá un turno";
        comofunciona2_explicacion = "Elegí el día y horario que más te convenga, y agendá un turno para tu estudio.";
        comofunciona3_titulo = "Atendete y pagá en el centro médico";
        comofunciona3_explicacion = "Asistí al turno y pagá en el consultorio. Si querés, podés calificar al centro para que otras personas puedan elegir.";
        comofunciona_url = "https://wiri.la/buscador?location=current";

          //inicio del pack
            pack_titulo = "Conocé nuestros Packs";
            pack_bajada = "Con nuestros packs de estudios podés cuidarte más por menos, seleccioná el tuyo y realizá tu análisis o estudio esta misma semana";

            pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/60920836-61c4-0fd2-5488-f8b1ed2ea266.jpg";
            pack1_titulo = "Control general de rutina";
            pack1_precio = "Desde $ 975"
            pack1_bajada = "Análisis de sangre y de orina completos en laboratorio.";
            pack1_urldestino = "https://wiri.la/especialidad/analisis-de-sangre";


            pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/1cd0fa4a-cf4b-756c-8d96-82223895e59d.jpg"
            pack2_titulo = "Ecografía ginecológica";
            pack2_precio = "Desde $ 750"
            pack2_bajada = "Exploración básica ginecológica del útero y otros órganos internos.";
            pack2_urldestino = "https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-ginecologica?location=current";

            pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/806634e6-f71c-5c0e-74d0-487e00f81df1.jpg";
            pack3_titulo = "Test Covid-19";
            pack3_precio = "Desde $ 2.200"
            pack3_bajada = "Test de anticuerpos, test rápido e hisopados PCR ¡Incluso a domicilio!.";
            pack3_urldestino = "https://salud.wiri.la/ar/test-covid19";

            pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/f49938f6-dd70-bcd0-bd5f-497586417b28.jpg";
            pack4_titulo = "Guardia online 24 hs";
            pack4_precio = "$ 600"
            pack4_bajada = "Médicos clínicos, pediatras y ginecólogos 24 horas, 365 días.";
            pack4_urldestino = "https://wiri.la/especialidad/guardia?";

          //fin del pack 
      break;  

      case 'psicologia':
        especialistas = "Psicólogos";
        especialista = "psicólogo";
        keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Psicologia, psicologia online, psicologos low cost, psicologos online, terapia por videollamada, psicologia numero de telefono, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";
        h1_title = "Psicólogos particulares a solo un click";
        boton1_texto = "Reservá un turno con un psicólogo";
        boton1_url = "https://wiri.la/especialidad/psicologia/consulta-general-en-consultorio?location=current";
        boton2_texto = "Reservá una videoconsulta";
        boton2_url = "https://wiri.la/especialidad/psicologia/telemedicina?location=current"; 
        bullet1_texto = "Turnos <strong>desde $550</strong>.";
        bullet2_texto = "Profesionales de primer nivel <strong>cerca tuyo</strong>";
        bullet4_texto = "<strong>Sin cuota mensual.</strong> Sin trámites.";
        bullet5_texto = "<strong>No necesitás obra social</strong> ni prepaga.";
        img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/61c7b2fe-557d-43cd-f2b3-02e6ea9f3137.jpg";

        //inicio del pack
            pack_titulo = "Conocé nuestros Packs";
            pack_bajada = "Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana presencialmente o por telemedicina.";

            pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/8444df2f-deef-b07b-13c0-2ec8c1584e52.jpg";
            pack1_titulo = "Psicoterapia online";
            pack1_precio = "Desde $ 500"
            pack1_bajada = "Atendete con un psicólogo por videollamada desde donde estés.";
            pack1_urldestino = "https://wiri.la/especialidad/psicologia/telemedicina";

            pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/c16e681b-7085-9576-be8b-669f974d050a.jpg"
            pack2_titulo = "Terapia presencial";
            pack2_precio = "Desde $ 700"
            pack2_bajada = "Hablá con un profesional y expresá tus emociones para sentirte mejor.";
            pack2_urldestino = "https://wiri.la/especialidad/psicologia/consulta-general-en-consultorio?location=current";

            pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/a11c7a59-c7b5-276d-3217-486e8c62850b.jpg";
            pack3_titulo = "Telemedicina programada";
            pack3_precio = "Desde $ 500"
            pack3_bajada = "Atendete por videollamada con médicos de todas las especialidades.";
            pack3_urldestino = "https://wiri.la//telemedicina";

            pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/f49938f6-dd70-bcd0-bd5f-497586417b28.jpg";
            pack4_titulo = "Guardia online 24 hs";
            pack4_precio = "Desde $ 600"
            pack4_bajada = "Conectate con un médico las 24 horas los 7 días de la semana.";
            pack4_urldestino = "https://wiri.la/especialidad/guardia?";
          //fin del pack 
       break;

      case 'psicoterapiaonline':
      especialistas = "Psicoterapistas online";
      especialista = "psiquiatra";
      keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Wiri, Psicología, Psicología online Argentina, Psicólogos low cost, Psicólogos online, Terapia por videollamada, Psicología número teléfono";
      h1_title = "Psicólogos particulares a solo un click";

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

      case 'gastroenterologia':
        especialistas = "Gastroenterólogos";
        especialista = "gastroenterólogo";
        keywords = "gastroenterología, gastroenterólogo, Gastroenterólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";
      break;

      case 'nutricion':
        especialistas = "Nutricionistas";
        especialista = "nutricionista";
        keywords = "nutrición, nutricionista, Nutricionistas, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";
      break;

      case 'odontologia':
        especialistas = "Odontólogos";
        especialista = "odontólogo";
        keywords = "Wiri Salud, Odontologia, dentista particular, dentistas argentina, Médicos particulares, Medicina low cost, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";

        h1_title = "Odontólogos particulares a solo un click";

        boton1_texto = "Reservá un turno presencial";
        boton1_url = "https://wiri.la/especialidad/odontologia?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current"; 

        bullet1_texto = "<strong>Turnos inmediatos</strong> desde $700.";
        bullet2_texto = "<strong>Odontólogos particulares</strong> cerca tuyo.";
        bullet3_texto = "<strong>Sin cuota mensual.</strong> Sin trámites.";
        bullet4_texto = "<strong>No necesitás obra social</strong> ni prepaga.";

        img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/16151cec-4439-6b4a-5bb6-a2e906b06f3d.jpg";
      break;

      case 'oftalmologia':
        especialistas = "Oftalmólogos";
        especialista = "oftalmólogo";
 
        keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Cardiología, cardiólogos Argentina, cardiólogo particular, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina online, Médicos 24 horas";
        h1_title = "Oftalmólogos particulares a solo un click";
        boton1_texto = "Reservá un turno con un oftalmólogol";
        boton1_url = "https://wiri.la/especialidad/oftalmologia?location=current";
        boton2_texto = "Reservá una videoconsulta médica";
        boton2_url = "https://wiri.la/especialidad/oftalmologia/telemedicina?location=current"; 

        //inicio del pack
          pack_titulo = "Conocé nuestros Packs";
          pack_bajada = "Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana presencialmente o por telemedicina.";

          pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/9fe60a87-f4af-1797-ad84-16063f1efe97.jpg";
          pack1_titulo = "Consulta oftalmológica";
          pack1_precio = "Desde $ 900"
          pack1_bajada = "Atendete con un oftalmólogo y resolvé todas tus dudas.";
          pack1_urldestino = "https://wiri.la/especialidad/oftalmologia?location=current";


          pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/a11c7a59-c7b5-276d-3217-486e8c62850b.jpg"
          pack2_titulo = "Telemedicina programada";
          pack2_precio = "Desde $ 500"
          pack2_bajada = "Atendete online con médicos de todas las especialidades.";
          pack2_urldestino = "https://wiri.la/telemedicina";

          pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/806634e6-f71c-5c0e-74d0-487e00f81df1.jpg";
          pack3_titulo = "Test Covid-19";
          pack3_precio = "Desde $ 2.200"
          pack3_bajada = "Test de anticuerpos, test rápido e hisopados PCR ¡Incluso a domicilio!.";
          pack3_urldestino = "https://salud.wiri.la/ar/test-covid19";


          pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/f49938f6-dd70-bcd0-bd5f-497586417b28.jpg";
          pack4_titulo = "Guardia online 24 hs";
          pack4_precio = "$ 600"
          pack4_bajada = "Médicos clínicos, pediatras y ginecólogos 24 horas, 365 días.";
          pack4_urldestino = "https://wiri.la/especialidad/guardia?";

        //fin del pack 
      break;

      case 'otorrinolaringologia':
        especialistas = "Otorrinolaringólogos";
        especialista = "otorrinolaringólogo";
        keywords = "Otorrinolaringólogo, otorrinolaringólogo, otorrinolaringología, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";
      break;

      case 'pediatria':
        especialistas = "Pediatras";
        especialista = "pediatra";

        keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Cardiología, cardiólogos Argentina, cardiólogo particular, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina online, Médicos 24 horas";
        h1_title = "Los mejores pediatras particulares cerca tuyo";
        boton1_texto = "Reservá un turno presencial";
        boton1_url = "https://wiri.la/especialidad/pediatria?location=current";
        boton2_texto = "Reservá una videoconsulta médica";
        boton2_url = "https://wiri.la/especialidad/pediatria/telemedicina?location=current"; 

        //inicio del pack
          pack_titulo = "Conocé nuestros Packs";
          pack_bajada = "Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana presencialmente o por telemedicina.";

          pack1_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/3837de19-f321-e022-7753-49974f2c685a.jpg";
          pack1_titulo = "Consulta pediátrica";
          pack1_precio = "Desde $ 500"
          pack1_bajada = "Turnos con los mejores pediatras esta misma semana para resolver tus dudas.";
          pack1_urldestino = "https://wiri.la/especialidad/oftalmologia?location=current";


          pack2_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/a11c7a59-c7b5-276d-3217-486e8c62850b.jpg"
          pack2_titulo = "Telemedicina programada";
          pack2_precio = "Desde $ 500"
          pack2_bajada = "Atendete online con médicos de más de 40 especialidades.";
          pack2_urldestino = "https://wiri.la/telemedicina";

          pack3_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/806634e6-f71c-5c0e-74d0-487e00f81df1.jpg";
          pack3_titulo = "Test Covid-19";
          pack3_precio = "Desde $ 2.200"
          pack3_bajada = "Test de anticuerpos, test rápido e hisopados PCR ¡Incluso a domicilio!.";
          pack3_urldestino = "https://salud.wiri.la/ar/test-covid19";


          pack4_img = "https://mcusercontent.com/336d436794aab535ddeb48c60/images/00f18394-c9fd-ae09-ebe2-d64bb2dba7b5.jpg";
          pack4_titulo = "Guardia pediátrica";
          pack4_precio = "$ 600"
          pack4_bajada = "Conectate con un profesional en el momento y desde donde estés.";
          pack4_urldestino = "https://wiri.la/especialidad/guardia?";
      break;

      case 'traumatologia':
        especialistas = "Traumatólogos";
        especialista = "traumatólogo";
        keywords = "Traumatólogos, traumatólogo, traumatología, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";
      break;

      case 'urologia':
        especialistas = "Urólogos";
        especialista = "urólogo";
        keywords = "urología, urólogo, Urólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";        
      break;

      case 'endocrinologia':
        especialistas = "Endocrinólogos";
        especialista = "endocrinólogo";
        keywords = "endocrinología, endocrinólogo, Endocrinólogos, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";
      break;
      
      case 'obstetricia':
        especialistas = "Obstetras";
        especialista = "obstetra";
        keywords = "obstetricia, obstetra, Obstetras, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
        img = "https://v.fastcdn.co/u/2d7105a6/57387411-0-Obstetricia.jpg";
        h1_title = especialistas + " particulares a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";

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
        h1_title = especialistas + " a solo un click";
        boton1_texto = "Reservá un turno con un " + especialista;
        boton1_url = "https://wiri.la/especialidad/" + especialidad + "?location=current";
        boton2_texto = "Ver todas las especialidades";
        boton2_url = "https://wiri.la/buscador?location=current";      break;

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
      if(bullet1_texto != null) {document.getElementById("bullet1_texto").innerHTML = bullet1_texto;}
      if(bullet2_texto != null) {document.getElementById("bullet2_texto").innerHTML = bullet2_texto;}
      if(bullet3_texto != null) {document.getElementById("bullet3_texto").innerHTML = bullet3_texto;}
      if(bullet4_texto != null) {document.getElementById("bullet4_texto").innerHTML = bullet4_texto;}
      if(bullet5_texto != null) {document.getElementById("bullet5_texto").innerHTML = "<li><span class='x_f2074b6c'>" + bullet5_texto +"</span></li>";}
      } 
    else {document.getElementById("bajada").innerHTML = bajada;}

    var title = "Wiri Salud - " + especialistas + " de calidad de forma inmediata y sin cuota mensual.";
    document.getElementsByTagName('meta')["keywords"].content = keywords;
    document.title = title;
}
