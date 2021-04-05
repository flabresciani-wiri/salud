  $( function() {
    var projects = [
      {
        value: "guardia",
        label: "guardia urgencia Resfrío Sinusitis Gripe Erupciones Asma Alergias Dolor garganta Vómitos Diarrea viajero",
        desc: "Guardia médica 24 hs.",
      },
      {
        value: "ginecologia",
        label: "ginecologia pap colpo transvaginal ecografia diu cepillado biopsia uterino vulva polipectomia telemedicina videollamada videoconsulta",
        desc: "Ginecología",
      },
      {
        value: "clinica-medica",
        label: "Clínica Médica cabecera general telemedicina videollamada videoconsulta",
        desc: "Clínica Médica",
      },
      {
        value: "diagnostico-por-imagenes",
        label: "diagsnostico imagenes Electrocardiograma Espinograma Radiografía Ecografía Transvaginal mamografia eco doppler ecodoppler tomografia scan scanfetal",
        desc: "Diagnóstico por Imágenes",
      },
      {
        value: "laboratorios-clinicos",
        label: "laboratorio analisis sangre Control Rutina test covid transmision sexual alergias perfil tiroideo coagulacion embarazo anemia diabetico hepatitis hepatico lipidico renal artritis celiaquia chagas osteoporosis chagas Antifosfolipidico",
        desc: "Análisis de Laboratorio Clínico",
      },
      {
        value: "cardiologia",
        label: "cardiologia Electrocardiograma PRESUROMETRIA ERGOMETRIA Eco Doppler ecodoppler vasos aorta holter telemedicina videollamada videoconsulta",
        desc: "Cardiología",
      },
      {
        value: "dermatologia",
        label: "dermatologia piel alergia Mesoterapia manchas telemedicina videollamada videoconsulta",
        desc: "Dermatología",
      },
      {
        value: "psicologia",
        label: "psicologia telemedicina videollamada videoconsulta",
        desc: "Psicología",
      },
      {
        value: "gastroenterologia",
        label: "gastroenterologia panza higado telemedicina videollamada videoconsulta",
        desc: "Gastroenterología",
      },
      {
        value: "neurologia",
        label: "neurologia eeg poligrafia psg telemedicina videollamada videoconsulta",
        desc: "Neurología",
      },
      {
        value: "nutricion",
        label: "nutricion telemedicina videollamada videoconsulta",
        desc: "Nutrición",
      },
      {
        value: "odontologia",
        label: "odontologia dentista diente muela conducto extraccion",
        desc: "Odontología",
      },
      {
        value: "oftalmologia",
        label: "oftalmologia oculista fondo ojo campo visual Angriogafia Gonioscopia ocular Paquimetria Topografia OCT telemedicina videollamada videoconsulta",
        desc: "Oftalmología",
      },
      {
        value: "otorrinolaringologia",
        label: "otorrinolaringologia oido nariz laringe telemedicina videollamada videoconsulta",
        desc: "Otorrinolaringología",
      },
      {
        value: "pediatria",
        label: "pediatria niño infantil telemedicina videollamada videoconsulta",
        desc: "Pediatría",
      },
      {
        value: "traumatologia",
        label: "traumatologia huesos fractura esguince tendinitis tendon yeso vendaje telemedicina videollamada videoconsulta",
        desc: "Traumatología",
      },
      {
        value: "urologia",
        label: "urologia cistitis pene urinarias Incontinencia Litiasis Pielonefritis Balanitis Hematuria Prostatitis prostata vejiga riñón uretra uréter genital andrologia erolitiasis endourología telemedicina videollamada videoconsulta",
        desc: "Urología",
      },
      {
        value: "endocrinologia",
        label: "endocrinologia grandulas hormonas metabolismo Acondroplasia Acromegalia Addison telemedicina videollamada videoconsulta",
        desc: "Endocrinología",
      },
      {
        value: "obstetricia",
        label: "obstetricia emabarazo parto puerperio telemedicina videollamada videoconsulta",
        desc: "Obstetricia",
      },
      {
        value: "psiquiatria",
        label: "psiquiatria mental Esquizofrenia Trastorno Dislexia Obsesivo toc Mutismo Disociativo Cotard",
        desc: "Psiquiatría",
      },
      {
        value: "laboratorios-clinicos/test-de-covid",
        label: "test covid coronavirus covid19 ",
        desc: "Test de Covid-19",
      },
      {
        value: "guardias-medicas",
        label: "guardia urgencia emergencia telemedicina videollamada videoconsulta",
        desc: "Guardia Médica 24 horas",
      }
    ];
 
    $( "#project" ).autocomplete({
      minLength: 2,
      source: projects,
      focus: function( event, ui ) {
        $( "#project" ).val( ui.item.desc );
        return false;
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.desc );
        $( "#project-id" ).val( ui.item.value );
        $( "#project-description" ).html( ui.item.valu );
        $( "#project-icon" ).attr( "src", "images/" + ui.item.icon );
        ir_a();
        return false;
      }
    })
    .autocomplete( "instance" )._renderItem = function( ul, item ) {
      return $( "<li>" )
//        .append( "<div>" + item.label + "<br>" + item.desc + "</div>" )
        .append( "<div>" + item.desc + "</div>" )
        .appendTo( ul );
    };
  } );



//submit
    function ir_a(){
    var especialidad_elegida = null;
    especialidad_elegida = document.getElementById("project-id").value;
    window.location.href = "categoria.html?e=" + especialidad_elegida;
        };
