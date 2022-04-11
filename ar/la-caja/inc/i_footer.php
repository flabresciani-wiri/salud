<footer>
<!-- Goto top
<a href="#" class="goto-top"></a>
--><a class="goto-top smooth" href="#top" title="Subir" style="display: block">&nbsp;</a>
	<div id="footer-copy" class="pd-v-lg">
		<div class="container">
			<div class="row">
				<div class="col-sm-8 col-md-11">
					<p class="no-mg">
						Consultá acerca de las coberturas, sus límites, condiciones de suscripción y exclusiones de la póliza.<br>
						Los Seguros son emitidos por Caja de Seguros S.A. Fitz Roy 957 (C1414CHI) C.A.B.A.,<br>
						CUIT 30-66320562-1 | Superintendencia de Seguros de la Nación 0-800-666-8400 | www.ssn.gob.ar
					</p>
					  
				</div>
				<div class="col-sm-4 col-md-1">
					<div class="logo-footer mg-lg-t-xs"></div>
				</div>
			</div>
		</div>
	</div>
</footer>

<script src="assets/js/bootstrap.min.js"></script>
<!-- date time picker  -->
<script type="text/javascript">
	$( function () {

		$( "[data-toggle=popover]" ).popover();

		$( '.datetimepicker' ).datetimepicker( {
			locale: 'es',
			format: 'L',
			minDate: moment().add( 1, 'days' ),
			maxDate: moment().add( 20, 'days' )
		} );


	} );
</script>



<script type="text/javascript">
	
	$(function(){
		
		$( "[data-toggle=popover]" ).popover();
		
		
		$(window).scroll(function(){
			var value = $(this).scrollTop();
			if (value>0) {
				$('body').addClass('header-small');
			} else {
				$('body').removeClass('header-small');
			}
		});
		$(window).scroll();

	});

</script>


<!-- Open "Tu Cotizacion"  -->
<script type="text/javascript">
	$( document ).ready( function () {
		if ( matchMedia ) {
			var mq = window.matchMedia( "(max-width: 768px)" );
			mq.addListener( WidthChange );
			WidthChange( mq );
		}

		function WidthChange( mq ) {
			if ( mq.matches ) {
				$( "#Foo" ).removeClass( "in" );
			}
		}
	} );
</script>


<!-- SMOOTH SCROLL  --><script>
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.smooth").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
</script>

