<?php

header( "Content-Type: text/html; charset=ISO-8859-1" );

?>
<!DOCTYPE html>
<html lang="es">

<head>
	<title>La Caja: Cotizador Seguro  de Salud Premium +</title>

	<?php include('inc/i_head.php'); ?>
	<!-- slider relacionados css -->
	<link rel="stylesheet" type="text/css" href="slick/slick.css">
	<link rel="stylesheet" type="text/css" href="slick/slick-theme.css">
</head>

<body id="top">

	<?php include('inc/i_header-progress.php'); ?>

	<script>
		$( function () {
			$( ".progress-bar" ).css( {
				"width": "100%"
			} );

		} );
				$(function() {

			$('.steps').html('Tu póliza se emitió con éxito.');

		});
	</script>
		<style>
		.back {
			display: none;
		}
	</style>
	<div class="wrapper">
		<section id="cotizador">
			<div class="container" style="height: 500px;position: relative;">

				<div class="vertical-center" >

					<img src="assets/images/gracias.png" style="width: 50px";>
					<h2 class="font-2 mg-t">Ahora sí ¡ya estás asegurado!</h2>
					<p class="mg-t mg-b">En breve te enviaremos un mail con los datos de tu póliza y una guía de cómo utilizar tu seguro para que saques el máximo provecho junto a Wiri Salud.</p>							
				</div>
			</div>
				<div class="col-xs-12 col-sm-4 col-sm-offset-4" >
						<a href="https://wiri.la/" class="btn btn-c1 btn-full">Ir a Wiri Salud</a>
				</div>
		</section>
		
		
		

	


	<?php 
	/* NO MOSTRAMOS CAJA CON CONTACTOS
	include('inc/i_contact-box.php');
	*/ 
	?>
	
	</div>
	
	<?php 
		/* NO MOSTRAMOS footer de la caja
		include('inc/i_footer.php'); 
		*/
	?>


<!-- alert-site -->
<style>
	.alert-site {
	position: fixed;
	z-index: 3000;
	bottom: 0px;
	left: 0px;
	right: 0px;
	background-color: rgb(51, 51, 51, 0.75);
	padding: 15px;
}
.alert-site .close {
	color: #ffffff !important;
	opacity: 0.75;
}
	
</style>



	<!-- Steps -->
	<script type="text/javascript">
		$( function () {

			$( '#steps li:nth-child(1)' ).addClass( 'active' );
			$( '#steps li:nth-child(2)' ).addClass( 'active' );
			$( '#steps li:nth-child(3)' ).addClass( 'active' );
			$( '#steps li:nth-child(4)' ).addClass( 'active' );

		} );
	</script>


</body>

</html>