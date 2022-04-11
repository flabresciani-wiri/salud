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
				"width": "100%"
			} );

		} );
				$(function() {

			$('.steps').html('Paso 5 de 5');

		});
	</script>

	<div class="wrapper">

		<section>

			<div class="container">
				<h2>�Confirm� tu solicitud!</h2>
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
								<span><i class="fal fa-check-circle hidden-xs">&nbsp;</i>Presupuesto N�</span>
								<h3>00022656145</h3>     
							</div>
						</div>
					</div>
				</div>

				<h5 style="font-size: 13px;">Verific� tus datos, las coberturas y las sumas aseguradas que elegiste para tu plan:</h5>
				<!--<hr class="mg-sm-t mg-lg-b">-->

				<div class="AccordionStyle panel-group" id="faq-accordion">
					<div class="ShowAllTabs">
						<input type="button" value="Abrir todos" onclick="return change(this);" cdata-toggle="collapse" data-parent="#accordion" class="btn bp-accordion--button" />
					</div>

					<div class="panel">
						<div class="panel-heading" id="heading1">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" class="collapsed dis-blk">
									<i class="fal fa-plus-circle">&nbsp;</i> <span style="font-size: 15px">Informaci�n de tu plan personalizado</span>
								</a>
							</h4>
						</div>
						<div id="collapse1" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;">
							<div class="panel-body">
								<div class="row">
									<div class="col-md-12">
										
										<!-- Bloque coberturas b�sicas -->
										<div class="prod-item mg-b">
											<div class="bd-full">
												<div class="bg bg-gl2 pd-full">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 cobertura">
															<h3>Coberturas b�sicas:</h3>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 hidden-sm hidden-xs">
															<p>Suma asegurada: </p>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Incendio edificio</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Incendio contenido</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Cristales</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Responsabilidad Civil Comprensiva</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Remoci�n de escombros</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Gastos de limpieza</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<!-- Bloque coberturas adicionales -->
										<div class="prod-item mg-b">
											<div class="bd-full">
												<div class="bg bg-gl2 pd-full">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 cobertura">
															<h3>Coberturas adicionales:</h3>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 hidden-sm hidden-xs">
															<p>Suma asegurada: </p>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Gastos Extraordinarios</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Honorarios Profesionales</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Equipos electr�nicos</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
												<div class="bd-t">
													<div class="row">
														<div class="col-lg-8 col-md-8 col-sm-7 col-xs-7">
															<div class="pd-full">
																<h4>Da�os por agua</h4>
															</div>
														</div>
														<div class="col-lg-4 col-md-4 col-sm-5 col-xs-5">
															<div class="pd-full">
																<p class="large">$ 88.888</span></p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel">
						<div class="panel-heading active" id="heading2">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" class="collapsed dis-blk">
									<i class="fal fa-plus-circle">&nbsp;</i><span style="font-size: 15px"> Detalle de tus datos</span>
								</a>
							</h4>
						</div>
						<div id="collapse2" class="panel-collapse collapse" aria-expanded="true" style="">
							<div class="panel-body">
								<div class="row">
									<div class="col-md-12">
										<h4 class="mg-b mg-lg-t">Datos del Riesgo asegurado</h4>
										<hr class="mg-b">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Domicilio</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">Fitz roy 857</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Localidad</label>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">Victoria</p>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">San Fernando</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-xs-12 col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Provincia</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">Buenos Aires</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<h4 class="mg-b mg-lg-t">Tus Datos</h4>
										<hr class="mg-b">
										<div class="row">
											<div class="col-xs-12 col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Tipo de documento</label>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">DNI</p>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">21479482</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Apellido y nombre</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">Fernandez basavilvaso, Juan Manuel</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Nacimiento</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">27 04 1972</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Domicilio contractual</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">Av. Libertador General San Mart�n 15789 10B</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">C�digo potal</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">1643</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-xs-12 col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Tel�fonos</label>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">(011) 15 4444 5555</p>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">(011) 4785 2479</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Correo electr�nico</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">Fernandez.basa.juan1972@gmail.com</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<h4 class="mg-b mg-lg-t">Forma de Pago</h4>
										<hr class="mg-b">
										<div class="row">
											<div class="col-xs-12 col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Tipo</label>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">Cr�dito</p>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">4697 2400 0024 6776</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Titular</label>
												</div>
											</div>
											<div class="col-sm-8">
												<div class="form-group no-mg">
													<p class="form-control-static">Fernandez basavilvaso, Juan Manuel</p>
												</div>
											</div>
										</div>
										<hr class="hr-light mg-sm-b mg-sm-t">
										<div class="row">
											<div class="col-xs-12 col-sm-4">
												<div class="form-group no-mg">
													<label class="label-control mg-sm-t">Vencimiento</label>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">01</p>
												</div>
											</div>
											<div class="col-xs-6 col-sm-4">
												<div class="form-group no-mg">
													<p class="form-control-static">19</p>
												</div>
											</div>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="panel">
						<div class="panel-heading active" id="heading3">
							<h4 class="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" class="collapsed dis-blk">
									<i class="fal fa-plus-circle">&nbsp;</i><span style="font-size: 15px"> Declaraci�n Jurada</span>
								</a>
							</h4>
						</div>
						<div id="collapse3" class="panel-collapse collapse" aria-expanded="true">
							<div class="panel-body pd-lg-b">
								<p>
									I) Seg�n la resoluci�n UIF 134/2018, una persona pol�ticamente es aquella que desarrolla o ha desarrollado funciones p�blicas destacadas (ej: miembros de los tres poderes de gobierno nacionales o provinciales, jefes de fuerzas armadas o de seguridad, rectores o decanos de universidades nacionales, etc). Tambi�n lo ser� en caso de ser familiar directo de un funcionario p�blico. �Sos una Persona pol�ticamente expuesta?
								</p>
								<div class="row mg-t">
									<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
										<label id="opc-1" class="pago-toggle control radio mg-b" data-target="#pago1">
											<input type="radio" name="persona-expuesta" value="si">
											<span class="control-indicator"></span> SI
										</label>
									</div>
									<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
										<label id="opc-2" class="pago-toggle control radio mg-b" data-target="#pago2">
											<input type="radio" name="persona-expuesta" checked="true" value="no">
											<span class="control-indicator"></span> NO
										</label>
									</div>
								</div>
								<hr class="hr-light mg-t mg-lg-b" />
								
								
								<p>
									II) �Cumpl�s con las disposiciones vigentes en materia de prevenci�n del Lavado de Activos y Financiaci�n del Terrorismo? (Art�culo 20 de la Ley 25.246 y Art.19, inc.h, Resoluci�n 230/2011)
								</p>
								<div class="row mg-t">
									<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
										<label id="opc-1" class="pago-toggle control radio mg-b" data-target="#pago1">
											<input type="radio" name="lavado-activos" checked="true"  value="si">
											<span class="control-indicator"></span> SI
										</label>
									</div>
									<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
										<label id="opc-2" class="pago-toggle control radio mg-b" data-target="#pago2">
											<input type="radio" name="lavado-activos" value="no">
											<span class="control-indicator"></span> NO
										</label>
									</div>
								</div>
								<hr class="hr-light mg-t mg-lg-b" />
						    	
						    	
								<p>III) �Declar�s bajo juramente que los fondos que utilizas y utilizar�s para pagar tu seguro provienen de ingresos derivados de actividad l�cita?</p>
								<div class="row mg-t">
									<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
										<label id="opc-1" class="pago-toggle control radio mg-b" data-target="#pago1">
											<input type="radio" name="fondos-licitos" checked="true"  value="si">
											<span class="control-indicator"></span> SI
										</label>
									</div>
									<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
										<label id="opc-2" class="pago-toggle control radio mg-b" data-target="#pago2">
											<input type="radio" name="fondos-licitos" value="no">
											<span class="control-indicator"></span> NO
										</label>
									</div>
								</div>
								<hr class="hr-light mg-t mg-lg-b" />
								
								<p>
									IV) De conformidad con lo establecido en el C�digo Civil y Comercial de la Naci�n (Art�culos N� 1110 y siguientes), en los contratos celebrados fuera de los establecimientos comerciales y a distancia, el Tomador tiene derecho a la revocaci�n del contrato dentro de los diez d�as a partir de su celebraci�n. Si el plazo venciera en d�a inh�bil, se prorrogar� hasta el primer d�a h�bil siguiente. La Caja podr� ejercer el derecho al cobro de primas por el plazo de riesgo corrido. La revocaci�n debe ser notificada por escrito o medios electr�nicos o similares a la contrataci�n.
								</p>
							</div>
						</div>
					</div>
				</div>

<script type="text/javascript">
function change( el )
{
    if ( el.value === "Abrir todos" )
        el.value = "Cerrar todos";
    else
        el.value = "Abrir todos";
}
</script>
<script>
	$( '.panel-group .ShowAllTabs' ).click( function () {

		$( this ).toggleClass( 'show_all_panels' );

		if ( $( this ).hasClass( 'show_all_panels' ) ) {
			$( this ).closest( '.panel-group' ).find( '.panel-title' ).removeClass( 'collapsed' ).prop( 'aria-expanded', "true" ).attr( 'aria-expanded', "true" );
			$( this ).closest( '.panel-group' ).find( '.panel-collapse' ).addClass( 'in' ).prop( 'aria-expanded', "true" ).attr( 'aria-expanded', "true" ).css( "height", "auto" );
		} else {
			$( this ).closest( '.panel-group' ).find( '.panel-title' ).addClass( 'collapsed' ).prop( 'aria-expanded', "false" ).attr( 'aria-expanded', "false" );
			$( this ).closest( '.panel-group' ).find( '.panel-collapse' ).removeClass( 'in' ).prop( 'aria-expanded', "false" ).attr( 'aria-expanded', "false" );
		}

	} );
</script>
				


				



				



				<div class="box-bordered pd-full mg-lg-t" style="font-size: 13px;border: transparent;">
					<p class="text-center">
						I) Declaro que los datos informados son correctos, exactos y revisten car�cter de declaraci�n jurada.
					</p>
					<p class="text-center">
						II) Acepto que el env�o de la solicitud no otorga cobertura. S�lo habr� seguro si La Caja la acepta. De lo contrario, la solicitud quedar� sin efecto.
					</p>
					<p class="text-center">
						III) Solicito que se me entregue la documentaci�n referida a mi p�liza por medios electr�nicos. Autorizo a que me env�en mensajes por Whats App al tel�fono celular informado y/o a trav�s de cualquier otro medio electr�nico (Ej: Mail, Chat online, App M�vil).
					</p>
					<p class="text-center">
						IV) Presto conformidad para que la informaci�n que otorgo en esta solicitud sea utilizada por La Caja para acciones de marketing en forma directa o a trav�s de terceros.
					</p>
					<div class="text-center mg-t">
						<label class="control checkbox">
          <input type="checkbox">
          <span class="control-indicator" style="width: 18px;height: 18px;margin-top: 9px;border-radius: 3px;"></span><span style="font-size: 15px;"> Acepto las condiciones </span></label>
					
					</div>
				</div>


			</div>


			<div class="container">
				<div class="mg-lg-b">

					<div class="row">
						<div class="col-xs-12 col-sm-4 col-sm-offset-4">



							<a href="paso6.php" class="btn btn-c1 btn-full">
									Confirmar
								</a>
						



						</div>
					</div>
				</div>
			</div>


			</form>




		</section>






	</div>

	<?php include('inc/i_footer.php'); ?>


	<!-- Steps  -->

	<script type="text/javascript">
		$( function () {
			$( '#steps li:nth-child(1)' ).addClass( 'active' );
			$( '#steps li:nth-child(2)' ).addClass( 'active' );
			$( '#steps li:nth-child(3)' ).addClass( 'active' );
			$( '#steps li:nth-child(4)' ).addClass( 'active' );
			$( '#steps li:nth-child(5)' ).addClass( 'active' );

		} );
	</script>




	<!-- Steps  -->

	<script type="text/javascript">
		$( function () {
			$( '#steps li:nth-child(1)' ).addClass( 'active' );
			$( '#steps li:nth-child(2)' ).addClass( 'active' );
			$( '#steps li:nth-child(3)' ).addClass( 'active' );

		} );
	</script>


</body>

</html>