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
  var encabezado = "";
  var especialidad = decodeURI(getUrlVars()["e"]);
  switch(especialidad) {
      case 'guardia':title = "Guardia 24 horas";
      opcionespracticas = "<a href='https://wiri.la/profesional/llamando-al-doctor-clinica-medica/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLXBhOTR5cWd6bXhzbXRrY2JfZWR0YTgifQ=='><div class='especialidades'>Guardia clínica por Videollamada</div></a><a href='https://wiri.la/profesional/llamando-al-doctor-ginecologia/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIn0='><div class='especialidades'>Guardia ginecológica por Videollamada</div></a><a href='https://wiri.la/profesional/llamando-al-doctor-pediatria/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLXhwamVjZnNocHJqNnd1dThtd2p1OG0ifQ=='><div class='especialidades'>Guardia pediátrica por videollamada</div></a>";
      encabezado = "Servicio de guardia ofrecido por la empresa 'Llamando al Doctor'.<br>Es un servicio que ofrece atención médica calificada e inmediata por videollamada, disponible las 24 horas, todos los días del año.<br><u>Notas</u>:<ul><li>Tiempo promedio de espera para ser atendido: <b>8 minutos<b></li><li>Realizá todas las preguntas que necesités para quedarte tranquilo antes de cortar la videollamada con el médico de guardia. Una vez cortada la llamada, no podés retomar la llamada desde la plataforma.</li>"
      break;

      case 'ginecologia':title = "Ginecología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/ginecologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/ginecologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a><a href='https://wiri.la/profesional/llamando-al-doctor-ginecologia/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoidGVsZW1lZGljaW5hIiwic3BlY2lhbHR5IjoiZ3VhcmRpYSJ9'><div class='especialidades'>Guardia 24hs. por videollamada</div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current'><div class='especialidades'>Consulta, Pap y Colpo con Laboratorio</div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo?location=current'><div class='especialidades'>Consulta, Pap y Colpo</div></a><a href='https://wiri.la/especialidad/ginecologia/pap-y-colpo?location=current'><div class='especialidades'>Pap y Colpo</div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-y-pap?location=current'><div class='especialidades'>Consulta y Pap</div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-y-colpo?location=current'><div class='especialidades'>Consulta y Colpo</div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-y-colpo-con-laboratorio?location=current'><div class='especialidades'>Consulta y Colpo con Laboratorio</div></a><a href='https://wiri.la/especialidad/ginecologia/ecografia-transvaginal?location=current'><div class='especialidades'>Ecografía Transvaginal</div></a><a href='https://wiri.la/especialidad/ginecologia/extraccion-de-diu-+-consulta?location=current'><div class='especialidades'>Consulta con extracción de DIU</div></a><a href='https://wiri.la/especialidad/ginecologia/colocacion-de-diu-con-diu-incluido?location=current'><div class='especialidades'>Colocación de DIU con DIU incluido</div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-+-pap-+-cepillado-endocervical-+-colpo-+-lab?location=current'><div class='especialidades'>Consulta, Pap, Cepillado Endocervical y Colpo con Laboratorio</div></a><a href='https://wiri.la/especialidad/ginecologia/biopsia-cervical?location=current'><div class='especialidades'>Biopsia Cervical</div></a><a href='https://wiri.la/especialidad/ginecologia/biopsia-con-consulta?location=current'><div class='especialidades'>Biopsia con Consulta</div></a><a href='https://wiri.la/especialidad/ginecologia/biopsia-de-cuello-uterino-+-lec?location=current'><div class='especialidades'>Biopsia de Cuello Uterino + LEC</div></a><a href='https://wiri.la/especialidad/ginecologia/biopsia-de-vulva?location=current'><div class='especialidades'>Biopsia de Vulva</div></a><a href='https://wiri.la/especialidad/ginecologia/polipectomia-+-lab?location=current'><div class='especialidades'>Polipectomía con Laboratorio</div></a><a href='https://wiri.la/especialidad/ginecologia/practica-invasiva-ambulatoria?location=current'><div class='especialidades'>Práctica Invasiva Ambulatoria</div></a><a href='https://wiri.la/especialidad/ginecologia/receta?location=current'><div class='especialidades'>Receta</div></a>";break;

      case 'clinica-medica':title = "Clínica Médica";
      opcionespracticas = "<a href='https://wiri.la/especialidad/clinica-medica/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/clinica-medica/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a><a href='https://wiri.la/profesional/llamando-al-doctor-clinica-medica/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLXBhOTR5cWd6bXhzbXRrY2JfZWR0YTgiLCJwbGFjZUlEIjoicGxhY2UtZjBjMjk5IiwicHJhY3RpY2UiOiJ0ZWxlbWVkaWNpbmEiLCJzcGVjaWFsdHkiOiJndWFyZGlhIn0='><div class='especialidades'>Guardia 24hs. por videollamada</div></a><a href='https://wiri.la/especialidad/clinica-medica/receta?location=current'><div class='especialidades'>Receta</div></a><a href='https://wiri.la/especialidad/clinica-medica/apto-fisico-a-domicilio?location=current'><div class='especialidades'>Apto Físico a domicilio</div></a>";break;

      case 'diagnostico-por-imagenes':title = "Diagnóstico por Imágenes";
      opcionespracticas = "<a href='https://wiri.la/especialidad/diagnostico-por-imagenes/radiografia?location=current'><div class='especialidades'>Radiografía</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia?location=current'><div class='especialidades'>Ecografía</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-transvaginal?location=current'><div class='especialidades'>Ecografía Transvaginal</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/180106?location=current'><div class='especialidades'>Ecografía mamaria uni o bilateral</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current'><div class='especialidades'>Ecografía Obstétrica</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-ginecologica?location=current'><div class='especialidades'>Ecografía Ginecológica</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/187110?location=current'><div class='especialidades'>Ecografía Tiroidea</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/180301?location=current'><div class='especialidades'>Eco Doppler Cardíaco</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/electrocardiograma-en-consultorio?location=current'><div class='especialidades'>Electrocardiograma</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/espinograma?location=current'><div class='especialidades'>Espinograma</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/tomografia-tridimensional?location=current'><div class='especialidades'>Tomografía Tridimensional</div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/scanfetal?location=current'><div class='especialidades'>Scanfetal</div></a>";break;

      case 'laboratorios-clinicos':title = "Análisis de Laboratorio Clínico";
      opcionespracticas = "<a href='https://wiri.la/especialidad/laboratorios-clinicos/control-general-de-rutina?location=current '><div class='especialidades'>Control General de Rutina</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/chequeo-post-covid?location=current '><div class='especialidades'>Chequeo Post Covid</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current '><div class='especialidades'>Control de Embarazo</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-coagulacion?location=current '><div class='especialidades'>Test de Coagulación</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/apto-fisico-alto-rendimiento?location=current '><div class='especialidades'>Apto Físico de alto rendimiento</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/testanticuerposcovid?location=current '><div class='especialidades'>Test Covid19 - Anticuerpos</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/pcr-covid-hisopado?location=current '><div class='especialidades'>Test Covid19 - Hisopado PCR</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/hisopado-rapido-para-test-covid?location=current '><div class='especialidades'>Test Covid19 - Test rápido antígenos</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/enfermedades-de-transmision-sexual?location=current '><div class='especialidades'>Enfermedades de Transmision Sexual</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-anemia-(completo)?location=current '><div class='especialidades'>Test de Anemia (Completo)</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/perfil-tiroideo-(basico)?location=current '><div class='especialidades'>Perfil Tiroideo (Básico)</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/perfil-tiroideo-(completo)?location=current '><div class='especialidades'>Perfil Tiroideo (Completo)</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/perfil-diabetico?location=current '><div class='especialidades'>Perfil Diabetico</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/perfil-lipidico-(completo)?location=current '><div class='especialidades'>Perfil Lipidico</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/perfil-renal?location=current '><div class='especialidades'>Perfil Renal</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/perfil-hepatico?location=current '><div class='especialidades'>Perfil Hepático</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/marcadores-de-hepatitis-basico?location=current '><div class='especialidades'>Marcadores de Hepatitis (Basico)</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-artritis-reumatoidea?location=current '><div class='especialidades'>Test de Artritis Reumatoidea</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-celiaquia?location=current '><div class='especialidades'>Test de Celiaquía</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-chagas?location=current '><div class='especialidades'>Test de Chagas</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-coagulacion?location=current '><div class='especialidades'>Test de Coagulación</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-osteoporosis?location=current '><div class='especialidades'>Test de Osteoporosis</div></a>
<a href='https://wiri.la/especialidad/laboratorios-clinicos/test-de-sindrome-antifosfolipidico?location=current '><div class='especialidades'>Test de Sindrome Antifosfolipidico</div></a>";break;

      case 'cardiologia':title = "Cardiología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/cardiologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/cardiologia/apto-fisico?location=current'><div class='especialidades'>Apto Físico (Consulta y Electro)</div></a><a href='https://wiri.la/especialidad/cardiologia/electrocardiograma-en-consultorio?location=current'><div class='especialidades'>Electrocardiograma</div></a><a href='https://wiri.la/especialidad/cardiologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'dermatologia':title = "Dermatología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/dermatologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/dermatologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'psicologia':title = "Psicología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/psicologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/psicologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'gastroenterologia':title = "Gastroenterología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/gastroenterologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/gastroenterologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;
      case 'neurologia':title = "Neurología";

      opcionespracticas = "<a href='https://wiri.la/especialidad/neurologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/neurologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'nutricion':title = "Nutrición";
      opcionespracticas = "<a href='https://wiri.la/especialidad/nutricion/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/nutricion/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'odontologia':title = "Odontología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/odontologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a>";break;

      case 'oftalmologia':title = "Oftalmología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/oftalmologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/oftalmologia/consulta-fondo-de-ojo-y-campo-visual?location=current'><div class='especialidades'>Consulta con Fondo de Ojos y Campo Visual</div></a><a href='https://wiri.la/especialidad/oftalmologia/300104?location=current'><div class='especialidades'>Fondo De Ojo con Consulta</div></a><a href='https://wiri.la/especialidad/oftalmologia/campo-visual-completo?location=current'><div class='especialidades'>Campo Visual Completo</div></a><a href='https://wiri.la/especialidad/oftalmologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'otorrinolaringologia':title = "Otorrinolaringología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/otorrinolaringologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/otorrinolaringologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;
      case 'pediatria':title = "Pediatría";
      opcionespracticas = "<a href='https://wiri.la/especialidad/pediatria/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/pediatria/receta?location=current'><div class='especialidades'>Receta</div></a><a href='https://wiri.la/especialidad/pediatria/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'traumatologia':title = "Traumatología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/traumatologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/traumatologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'urologia':title = "Urología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/urologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/urologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      case 'endocrinologia':title = "Endocrinología";
      opcionespracticas = "<a href='https://wiri.la/especialidad/endocrinologia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/endocrinologia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;
      case 'obstetricia':title = "Obstetricia";
      opcionespracticas = "<a href='https://wiri.la/especialidad/obstetricia/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/obstetricia/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;
      case 'psiquiatria':title = "Psiquiatría";
      opcionespracticas = "<a href='https://wiri.la/especialidad/psiquiatria/consulta-general-en-consultorio?location=current'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/psiquiatria/telemedicina?location=current'><div class='especialidades'>Telemedicina</div></a>";break;

      default: title = "Clínica Médica";
      opcionespracticas = "<a href='https://wiri.la/especialidad/clinica-medica/consulta-general-en-consultorio?location=current&utm_medium=referral&utm_source=piloto'><div class='especialidades'>Consulta general en consultorio</div></a><a href='https://wiri.la/especialidad/clinica-medica/telemedicina?location=current&utm_medium=referral&utm_source=piloto'><div class='especialidades'>Telemedicina</div></a><a href='https://wiri.la/profesional/llamando-al-doctor-clinica-medica/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLXBhOTR5cWd6bXhzbXRrY2JfZWR0YTgiLCJwbGFjZUlEIjoicGxhY2UtZjBjMjk5IiwicHJhY3RpY2UiOiJ0ZWxlbWVkaWNpbmEiLCJzcGVjaWFsdHkiOiJndWFyZGlhIn0='><div class='especialidades'>Guardia 24hs. por videollamada</div></a><a href='https://wiri.la/especialidad/clinica-medica/receta?location=current&utm_medium=referral&utm_source=piloto'><div class='especialidades'>Receta</div></a><a href='https://wiri.la/especialidad/clinica-medica/apto-fisico-a-domicilio?location=current&utm_medium=referral&utm_source=piloto'><div class='especialidades'>Apto Físico a domicilio</div></a>";break;
  }
    document.getElementById("titulo").innerText = title;
    document.getElementById("practicas").innerHTML = opcionespracticas;
    document.getElementById("encabezado").innerHTML = encabezado;
}
