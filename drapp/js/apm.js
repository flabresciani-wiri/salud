  $( function() {
    var projects = [
      {
        value: "bit.ly/gastonmerlo",
        label: "Gastón Merlo",
        desc: "Gastón Merlo",
      },
      {
        value: "bit.ly/gabrielmatorras",
        label: "Gabriel Matorras",
        desc: "Gabriel Matorras",
      },
      {
        value: "bit.ly/oscarviggiano",
        label: "Oscar Viggiano",
        desc: "Oscar Viggiano",
      },
      {
        value: "bit.ly/mauroranua",
        label: "Mauro Ranua",
        desc: "Mauro Ranua",
      },
      {
        value: "bit.ly/rgomezelea",
        label: "Ricardo Gomez",
        desc: "Ricardo Gomez",
      },
      {
        value: "bit.ly/jorgechamorro",
        label: "Jorge Chamorro",
        desc: "Jorge Chamorro",
      },
      {
        value: "bit.ly/nicolasmoreira",
        label: "Nicolas Moreira",
        desc: "Nicolas Moreira",
      }
    ];
 
    $( "#project" ).autocomplete({
      minLength: 0,
      source: projects,
      focus: function( event, ui ) {
        $( "#project" ).val( ui.item.desc );
        return false;
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.desc);
        $( "#project-id" ).val( ui.item.value );
        $( "#project-description" ).html( ui.item.value);
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
    var link = null;
    link = document.getElementById("project-id").value;
    window.location.href = "https://" + link;
        };
