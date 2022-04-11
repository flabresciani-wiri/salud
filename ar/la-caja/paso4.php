<?php

header( "Content-Type: text/html; charset=ISO-8859-1" );

//--------------------------------------------------------------------------------------------------------//

$PathtoRoot = '';

?>
<!DOCTYPE html>
<html lang="es">

<head>
	<title>La Caja: Cotizador Seguro Integral de Comercio</title>
	<?php include('inc/i_head.php'); ?>
</head>

<body id="top">

	<?php include('inc/i_header-progress.php'); ?>
	<script>
		$( function () {
			$( ".progress-bar" ).css( {
				"width": "75%"
			} );

		} );
				$(function() {

			$('.steps').html('Paso 4 de 5');

		});
	</script>

	<div class="wrapper">

		<section>

			<form action="paso5.php">




				<div class="container">

				<h2>Seleccioná tu forma de pago. ¡Estás a un paso de tener tu seguro!</h2>

				<hr class="mg-sm-t mg-lg-b">

				<div class="bg bg-gl pd-full shadow mg-lg-b">
				<div class="block-resume">

						<div class="row">
							<div class="col-sm-4 col-xs-12">
								<span><i class="fal fa-check-circle">&nbsp;</i>Seguro de Salud Premium +</span>
								<h3>Rubro: <span class="color-1 font-4">Salud</span></h3>
								<hr class="visible-xs mg-b mg-t">
							</div>
							<div class="col-sm-4 col-xs-6">
								<span><i class="fal fa-check-circle">&nbsp;</i>Cuota mensual</span>
                                        <h3 class="color-1 font-4">$2.000,00</h3>
                                      
							</div>
							<div class="col-sm-4 col-xs-6">
								<span><i class="fal fa-check-circle hidden-xs">&nbsp;</i>Presupuesto N°</span>
                                        <h3>00022656145</h3>
                                     
							</div>
						</div>
						

					</div>
				</div>


				



					
					<h3 style="color:#352641;margin-bottom: 15px">Elegí cómo querés pagar tu póliza</h3>
							<!--<hr class="mg-sm-t mg-lg-b">-->
							<div class="row">
						<div class="col-sm-4 col-xs-12">

							<label id="pago-toggle1" class="pago-toggle control radio mg-lg-b" data-target="#pago1" style="margin-bottom: 15px;margin-top: 15px;">
                                    <input type="radio" name="medio-de-pago" value="opc-credito">
                                    <span class="control-indicator"></span> Tarjeta de crédito 
                                </label>
                                </div>
						<div class="col-sm-4 col-xs-12">

							<label id="pago-toggle2" class="pago-toggle control radio mg-xlg-b" data-target="#pago2">
                                    <input type="radio" name="medio-de-pago" value="opc-debito">
                                    <span class="control-indicator"></span> Cuenta bancaria
                                </label>
						

						</div>
						
						<div class="col-sm-4 col-xs-12">

							<label id="pago-toggle3" class="pago-toggle control radio mg-xlg-b" data-target="#pago3" style="display: none">
                                    <input type="radio" name="medio-de-pago" value="opc-mercado">
                                    <span class="control-indicator"></span> Mercado Pago <span class="label label-default">NUEVO</span>
                                </label>
						

						</div>
					</div>

					<div id="pago1" class="pago-hidden">
						<hr class="hr-light mg-b">
						<div class="row">

							<div class="col-sm-6 col-xs-12">
								<label class="label-control">Nombre y Apellido Titular<button type="button" class="btn-link color-1" data-toggle="popover" data-content="Tal cual figuran en la tarjeta." data-placement="top" data-original-title="" title=""><i class="far fa-question-circle"></i></button></label>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="">
								</div>
							</div>
							<div class="col-sm-6 col-xs-12">
								<label class="label-control">Tarjeta N°</label>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Ej.: 2222444411113333">
								</div>
							</div>
						</div>
						

						<div class="row">

							<div class="col-xs-6 col-sm-3">
								<label class="label-control">Mes de Vencimiento</label>
								<div class="form-group">
									<select class="form-control">
										<option value="">Enero</option>
									</select>
								</div>
							</div>
							<div class="col-xs-6 col-sm-3">
								<label class="label-control">Año de Vencimiento</label>
								<div class="form-group">
									<select class="form-control">
										<option value="">2019</option>
									</select>
								</div>
							</div>

						</div>
						
						
					</div>

					<div id="pago2" class="pago-hidden">
						<hr class="hr-light mg-b">
						<div class="row">


							<div class="col-sm-4">
								<label class="label-control">CBU N°</label>
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Ej.: 75315984269751354">
								</div>
							</div>

						</div>

					</div>
					
					<div id="pago3" class="pago-hidden">
						<hr class="hr-light mg-b">
						<div class="row">
						
						
						
                                <div class="col-xs-12 col-sm-4 col-sm-offset-4">
          <div class="box-bordered pd-full mg-t mg-lg-b text-center"> 
          <img src="assets/images/logo-mercadopago.svg" alt="Mercado Pago" class="mg-b" height="35px" >
            <p>Te direccionaremos a <strong>Mercado Pago</strong> para que elijas tu forma de pago y luego terminar la contratación de tu seguro.
            </p>
            <a href="#" class="btn btn-ghost-g mg-t btn-full">PAGAR CON MERCADO PAGO</a>
            <p></p>
          </div>
        </div>


						

						</div>

					</div>
					
					<hr class="mg-sm-t mg-lg-b">
					<p class="small mg-lg-b">
						Autorizo a que las sumas de dinero necesarias para pagar los premios del Seguro Integral de Comercio que solicito y sus respectivas renovaciones, sean debitados en forma directa y automática de la tarjeta de crédito o cuenta bancaria indicada más arriba. El cobro se realizará por mes adelantado. Me notifico que el monto de la cuota informada corresponde a un periodo regular. En el primer mes se podrá cobrar un periodo irregular de un mes y/o fracción. 
					</p>





				</div>



				<hr>

				<div class="container">
					<div class="mg-lg-b mg-lg-t">

						<div class="row">
							<div class="col-xs-12 col-sm-4 col-sm-offset-4">



								<a href="paso5.php" class="btn btn-c1 btn-full">
									Continuar
								</a>
							


							</div>
						</div>
					</div>
				</div>


			</form>




		</section>



		

	</div>

	<?php include('inc/i_payment-data.php'); ?>


	<?php //include('inc/i_contact-box.php'); ?>

	<?php include('inc/i_footer.php'); ?>

	<?php include('inc/i_modals.php'); ?>

	<!-- Steps  -->

	<script type="text/javascript">
		$( function () {
			$( '#steps li:nth-child(1)' ).addClass( 'active' );
			$( '#steps li:nth-child(2)' ).addClass( 'active' );

		} );
	</script>

	<script type="text/javascript">
		$( function () {




			$( '.pago-hidden' ).slideUp( 0 );

			$( '.pago-toggle' ).change( function () {
				var status = $( this ).find( 'input[type="radio"]' ).val();
				if ( status == 'opc-debito' ) {
					$( '#pago1' ).slideUp();
					$( '#pago3' ).slideUp();
					$( '#pago2' ).slideDown();
				} 
			} );
			
			$( '.pago-toggle' ).change( function () {
				var status = $( this ).find( 'input[type="radio"]' ).val();
				if ( status == 'opc-credito' ) {
					$( '#pago2' ).slideUp();
					$( '#pago3' ).slideUp();
					$( '#pago1' ).slideDown();
				} 
			} );
			
			$( '.pago-toggle' ).change( function () {
				var status = $( this ).find( 'input[type="radio"]' ).val();
				if ( status == 'opc-mercado' ) {
					$( '#pago1' ).slideUp();
					$( '#pago2' ).slideUp();
					$( '#pago3' ).slideDown();
				} 
			} );

		} );
	</script>






</body>

</html>