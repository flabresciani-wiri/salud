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
  var packs = "";
  var h1_title = "";
  var especialidad = decodeURI(getUrlVars()["e"]);
  var content = decodeURI(getUrlVars()["utm_content"]);
  var linkespecialidad = "";
  var linkespecialidad2 = "";

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
      pack = "<div class='section-holder-border item-block item-absolute' data-at='section-border'></div><div class='section-holder-overlay item-block item-absolute' data-at='section-overlay'></div><div class='section-block'><div class='section-inner section-fit section-relative'> <div class='widget item-absolute headline' id='element-929' data-at='headline'><div class='contents'><h1><span class='x_b614627d x_a2e00130'><span class='x_1a7fc0ca' id='pack_h1'>Packs de Ginecología</span></span></h1></div></div><div class='widget item-absolute paragraph ' id='element-935' data-at='paragraph'><div class='contents'> <p class='x_dc68832a'><span class='x_7b2817bf' id='pack_h2' >¿Necesitás hacerte un chequeo anual o resolver tus dudas con un ginecólogo? Con nuestros packs podés cuidarte más por menos, seleccioná el tuyo y atendete esta misma semana.</span></p></div></div><a href='https://wiri.la/especialidad/ginecologia?location=current' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-933'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/especialidad/ginecologia?location=current' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-930'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-932' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/especialidad/ginecologia?location=current' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'>Consulta ginecológica</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-936' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/ginecologia?location=current' id='link-5j68xglh9oq' data-link-5j68xglh9oq='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-931' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/ginecologia?location=current' id='link-x3dol5bs70a' data-link-x3dol5bs70a='' class='url-link'>Resolvé todas tus dudas con un ginecólogo.</a></span></p></div></div><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-934'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-937'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-938' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'>Chequeo anual</a></span></span> </h3></div></div><div class='widget item-absolute headline ' id='element-939' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current' id='link-b3gn7owsym8' data-link-b3gn7owsym8='' class='url-link'>Desde $ 1.200</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-940' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/ginecologia/consulta-pap-y-colpo-con-laboratorio?location=current' id='link-zn7w7do6ksf' data-link-zn7w7do6ksf='' class='url-link'>Incluye consulta + PAP + Colposcopia.</a></span></p></div></div><a href='https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-945'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-942'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-944' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'>Guardia Ginecológica 24 hs</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-948' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==' id='link-cfe4o54fyh' data-link-cfe4o54fyh='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-943' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/profesional/guardia-ginecologica-por-videollamada/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLTE1ZjViYWNiIiwicGxhY2VJRCI6InBsYWNlLWYwYzI5OSIsInByYWN0aWNlIjoiY29uc3VsdGEtZ2VuZXJhbC1lbi1jb25zdWx0b3JpbyIsInNwZWNpYWx0eSI6Imd1YXJkaWEifQ==' id='link-t6hyjvu951' data-link-t6hyjvu951='' class='url-link'>Ginecólogos 24 horas a tu disposición. Atendete ya.</a></span></p></div></div><a href='https://wiri.la/especialidad/ginecologia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-946'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/ginecologia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-949'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-950' data-at='headline'><div class='contents'> <h3>  <span class='x_00098c5b x_fcd2d15f'><a href='https://wiri.la/especialidad/ginecologia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'>Videoconsulta ginecológica</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-951' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/ginecologia/telemedicina' id='link-gsod0oiz6m' data-link-gsod0oiz6m='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-952' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/ginecologia/telemedicina' id='link-d00svtcoxe6' data-link-d00svtcoxe6='' class='url-link'>Hablá con un especialista sin salir de casa.</a></span></p></div></div></div></div>";
      document.getElementById("page-block-lt5i2fh3e8e").innerHTML = pack;    
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
      pack = "<div class='section-holder-border item-block item-absolute' data-at='section-border'></div><div class='section-holder-overlay item-block item-absolute' data-at='section-overlay'></div><div class='section-block'><div class='section-inner section-fit section-relative'> <div class='widget item-absolute headline' id='element-929' data-at='headline'><div class='contents'><h1><span class='x_b614627d x_a2e00130'><span class='x_1a7fc0ca' id='pack_h1'>Packs de obstetricia</span></span></h1></div></div><div class='widget item-absolute paragraph ' id='element-935' data-at='paragraph'><div class='contents'> <p class='x_dc68832a'><span class='x_7b2817bf' id='pack_h2' >Con nuestros packs obstétricos podés cuidarte mejor a vos y a tu bebé, seleccioná el tuyo y atendete esta misma semana pagando solo cuando te atendés.</span></p></div></div><a href='https://wiri.la/especialidad/obstetricia?location=current' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-933'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/especialidad/obstetricia?location=current' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-930'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-932' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/especialidad/obstetricia?location=current' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'>Consulta obstétrica</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-936' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/obstetricia?location=current' id='link-5j68xglh9oq' data-link-5j68xglh9oq='' class='url-link'>Desde $ 700</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-931' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/obstetricia?location=current' id='link-x3dol5bs70a' data-link-x3dol5bs70a='' class='url-link'>Resolvé todas tus dudas con los mejores obstetras.</a></span></p></div></div><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-934'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-937'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-938' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'>Ecografía obstétrica</a></span></span> </h3></div></div><div class='widget item-absolute headline ' id='element-939' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current' id='link-b3gn7owsym8' data-link-b3gn7owsym8='' class='url-link'>Desde $ 900</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-940' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/diagnostico-por-imagenes/ecografia-obstetrica?location=current' id='link-zn7w7do6ksf' data-link-zn7w7do6ksf='' class='url-link'>Examen con visualización del embrión o feto.</a></span></p></div></div><a href='https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-945'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-942'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-944' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'>Control del embarazo</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-948' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current' id='link-cfe4o54fyh' data-link-cfe4o54fyh='' class='url-link'>Desde $ 1.730</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-943' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/laboratorios-clinicos/control-de-embarazo?location=current' id='link-t6hyjvu951' data-link-t6hyjvu951='' class='url-link'>Examen prenatal mediante una muestra de sangre</a></span></p></div></div><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-946'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-949'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-950' data-at='headline'><div class='contents'> <h3>  <span class='x_00098c5b x_fcd2d15f'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'>Videoconsulta obstétrica</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-951' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-gsod0oiz6m' data-link-gsod0oiz6m='' class='url-link'>Desde $ 500</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-952' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-d00svtcoxe6' data-link-d00svtcoxe6='' class='url-link'>Hablá con un especialista sin salir de casa.</a></span></p></div></div></div></div>";
      document.getElementById("page-block-lt5i2fh3e8e").innerHTML = pack;
      img = "https://v.fastcdn.co/u/2d7105a6/57387411-0-Obstetricia.jpg";
      break;

      case 'psiquiatria':
      especialistas = "Psiquiatras";
      especialista = "psiquiatra";
      keywords = "psiquiatra, Psiquiatras, psiquiatria, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      break;

      case 'telemedicina':
      especialistas = "Telemedicina";
      especialista = "psiquiatra";
      keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Wiri, Telemedicina, Guardia online 24 horas, Médicos telemedicina 24 horas, Telemedicina argentina, Telemedicina online, Médicos 24 horas";
      pack = "<div class='section-holder-border item-block item-absolute' data-at='section-border'></div><div class='section-holder-overlay item-block item-absolute' data-at='section-overlay'></div><div class='section-block'><div class='section-inner section-fit section-relative'> <div class='widget item-absolute headline' id='element-929' data-at='headline'><div class='contents'><h1><span class='x_b614627d x_a2e00130'><span class='x_1a7fc0ca' id='pack_h1'>Packs de Telemedicina</span></span></h1></div></div><div class='widget item-absolute paragraph ' id='element-935' data-at='paragraph'><div class='contents'> <p class='x_dc68832a'><span class='x_7b2817bf' id='pack_h2' >Atendete por telemedicina evitando contagios y esperas en guardias. Agendá un turno y cuidate de manera más fácil, simple y rápida, estés donde estés.</span></p></div></div><a href='https://wiri.la/telemedicina' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-933'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/telemedicina' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-930'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-932' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/telemedicina' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'>Telemedicina programada</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-936' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/telemedicina' id='link-5j68xglh9oq' data-link-5j68xglh9oq='' class='url-link'>Desde $ 500</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-931' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/telemedicina' id='link-x3dol5bs70a' data-link-x3dol5bs70a='' class='url-link'>Atendete online con médicos de más de 40 especialidades.</a></span></p></div></div><a href='https://wiri.la/especialidad/guardia' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-934'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/especialidad/guardia' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-937'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-938' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/guardia' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'>Guardia online 24 hs</a></span></span> </h3></div></div><div class='widget item-absolute headline ' id='element-939' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/guardia' id='link-b3gn7owsym8' data-link-b3gn7owsym8='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-940' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/guardia' id='link-zn7w7do6ksf' data-link-zn7w7do6ksf='' class='url-link'>Médicos clínicos, pediatras y ginecólogos 24 horas, los 7 días de la semana. Atendete ya.</a></span></p></div></div><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-945'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-942'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-944' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'>Psicoterapia online</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-948' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-cfe4o54fyh' data-link-cfe4o54fyh='' class='url-link'>Desde $ 500</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-943' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-t6hyjvu951' data-link-t6hyjvu951='' class='url-link'>¿La situación actual te supera? Hablá con un profesional.</a></span></p></div></div><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-946'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-949'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-950' data-at='headline'><div class='contents'> <h3>  <span class='x_00098c5b x_fcd2d15f'><a href='https://wiri.la/profesional/llamando-al-doctor-pediatria/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLXhwamVjZnNocHJqNnd1dThtd2p1OG0ifQ==' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'>Guardia pediátrica</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-951' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-gsod0oiz6m' data-link-gsod0oiz6m='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-952' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-d00svtcoxe6' data-link-d00svtcoxe6='' class='url-link'>¿Emergencia? Conectate con un profesional en el momento y desde donde estés.</a></span></p></div></div></div></div>";
      document.getElementById("page-block-lt5i2fh3e8e").innerHTML = pack;
      h1_title = "Atendete online con médicos particulares";
      linkespecialidad = "<a href='https://wiri.la/telemedicina' id='link-6jksnupd35j' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>Atendete por telemedicina</span></a>";
      linkespecialidad2 = "<a href='https://wiri.la/buscador?location=current' id='link-2kxirnimzof' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>Agendá un turno presencial</span></a>";
      document.getElementById("desde-tu-casa").innerHTML = "desde tu casa.";
      document.getElementById("h1_title").innerHTML = h1_title;
      document.getElementById("element-844").innerHTML = linkespecialidad2;
      break;

      case 'psicoterapiaonline':
      especialistas = "Psicoterapistas online";
      especialista = "psiquiatra";
      keywords = "Wiri Salud, Médicos particulares, Medicina low cost, Wiri, Psicología, Psicología online Argentina, Psicólogos low cost, Psicólogos online, Terapia por videollamada, Psicología número teléfono";
      pack = "<div class='section-holder-border item-block item-absolute' data-at='section-border'></div><div class='section-holder-overlay item-block item-absolute' data-at='section-overlay'></div><div class='section-block'><div class='section-inner section-fit section-relative'> <div class='widget item-absolute headline' id='element-929' data-at='headline'><div class='contents'><h1><span class='x_b614627d x_a2e00130'><span class='x_1a7fc0ca' id='pack_h1'>Packs de Telemedicina</span></span></h1></div></div><div class='widget item-absolute paragraph ' id='element-935' data-at='paragraph'><div class='contents'> <p class='x_dc68832a'><span class='x_7b2817bf' id='pack_h2' >Atendete por telemedicina evitando contagios y esperas en guardias. Agendá un turno y cuidate de manera más fácil, simple y rápida, estés donde estés.</span></p></div></div><a href='https://wiri.la/telemedicina' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-933'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/telemedicina' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'><div class='widget item-absolute ' id='element-930'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-932' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/telemedicina' id='link-n3m0n9ihh3' data-link-n3m0n9ihh3='' class='url-link'>Telemedicina programada</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-936' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/telemedicina' id='link-5j68xglh9oq' data-link-5j68xglh9oq='' class='url-link'>Desde $ 500</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-931' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/telemedicina' id='link-x3dol5bs70a' data-link-x3dol5bs70a='' class='url-link'>Atendete online con médicos de más de 40 especialidades.</a></span></p></div></div><a href='https://wiri.la/especialidad/guardia' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-934'><div class='contents shape box figure ' data-at='shape'></div></div></a><a href='https://wiri.la/especialidad/guardia' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'><div class='widget item-absolute ' id='element-937'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-938' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/guardia' id='link-ky44e8x2e1' data-link-ky44e8x2e1='' class='url-link'>Guardia online 24 hs</a></span></span> </h3></div></div><div class='widget item-absolute headline ' id='element-939' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/guardia' id='link-b3gn7owsym8' data-link-b3gn7owsym8='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-940' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/guardia' id='link-zn7w7do6ksf' data-link-zn7w7do6ksf='' class='url-link'>Médicos clínicos, pediatras y ginecólogos 24 horas, los 7 días de la semana. Atendete ya.</a></span></p></div></div><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-945'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229761-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'><div class='widget item-absolute ' id='element-942'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-944' data-at='headline'><div class='contents'> <h3>  <span class='x_da6ad2be'>   <a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-lm6f303v9qc' data-link-lm6f303v9qc='' class='url-link'>Psicoterapia online</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-948' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-cfe4o54fyh' data-link-cfe4o54fyh='' class='url-link'>Desde $ 500</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-943' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-t6hyjvu951' data-link-t6hyjvu951='' class='url-link'>¿La situación actual te supera? Hablá con un profesional.</a></span></p></div></div><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-946'><div class='contents shape box figure' data-at='shape' data-src='https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg' style='background-image: url(&quot;https://v.fastcdn.co/u/2d7105a6/57229756-0-Cards-para-landings-.jpg&quot;);'></div></div></a><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'><div class='widget item-absolute ' id='element-949'><div class='contents shape box figure ' data-at='shape'></div></div></a><div class='widget item-absolute headline ' id='element-950' data-at='headline'><div class='contents'> <h3>  <span class='x_00098c5b x_fcd2d15f'><a href='https://wiri.la/profesional/llamando-al-doctor-pediatria/eyJkYXRhYmFzZSI6InVzZXJkYi0zNzYzYTkyMCIsInByYWN0aXRpb25lcklEIjoicHJhY3RpdGlvbmVyLXhwamVjZnNocHJqNnd1dThtd2p1OG0ifQ==' id='link-mrnivfcuvy' data-link-mrnivfcuvy='' class='url-link'>Guardia pediátrica</a></span> </h3></div></div><div class='widget item-absolute headline ' id='element-951' data-at='headline'><div class='contents'> <h3>  <span class='x_6f8d78f4 x_da6ad2be'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-gsod0oiz6m' data-link-gsod0oiz6m='' class='url-link'>Desde $ 600</a></span> </h3></div></div><div class='widget item-absolute paragraph ' id='element-952' data-at='paragraph'><div class='contents'> <p class='x_fae6260b x_0a34168d'><span class='x_a269ab78'><a href='https://wiri.la/especialidad/obstetricia/telemedicina' id='link-d00svtcoxe6' data-link-d00svtcoxe6='' class='url-link'>¿Emergencia? Conectate con un profesional en el momento y desde donde estés.</a></span></p></div></div></div></div>";
      document.getElementById("page-block-lt5i2fh3e8e").innerHTML = pack;
      h1_title = "Psicólogos particulares online";
      linkespecialidad = "<a href='https://wiri.la/especialidad/psicologia/telemedicina' id='link-6jksnupd35j' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>Reservá un turno con un psicólogo</span></a>";
      document.getElementById("h1_title").innerHTML = h1_title;
      break;


      default: 
      especialistas = "Médicos";
      especialista = "médico";
      keywords = "médico, médicos, medicina general, Wiri Salud, Médicos particulares, Medicina low cost, Chequeo anual ginecología, Wiri";
      linkespecialidad = "<a href='https://wiri.la/buscador?location=current' id='link-6jksnupd35j' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>Reservá un turno médico</span></a>";
      break;
  }

    var url_img = "url(" + img + ")";
    document.getElementById("element-772").style.backgroundImage = url_img;


    if (linkespecialidad == "") {
    linkespecialidad = "<a href='https://wiri.la/especialidad/" + especialidad + "?location=current' id='link-6jksnupd35j' class='url-link btn item-block' data-at='button' data-link-6jksnupd35j=''>Reservá un turno con un " + especialista + "</span></a>";
    }
    document.getElementById("linkespecialidad").innerHTML = linkespecialidad;    

    if (h1_title == "") {document.getElementById("especialistas").innerText = especialistas;}


    var title = "Wiri Salud - " + especialistas + " de calidad de forma inmediata y sin cuota mensual.";
    document.getElementsByTagName('meta')["keywords"].content = keywords;
    document.title = title;

}