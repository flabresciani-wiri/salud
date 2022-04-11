<section class="sticky-contact">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-lg-offset-8 col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6">
				<div id="contact-box-general" class="desktop--contact-box-container">
					<div class="user-container">
						<div class="image" style="background-image:url('assets/images/user.jpg')" alt="User"></div>
						<div class="name">
							<p>¿Necesitás ayuda?</p>
						</div>
					</div>
					<div id="tabs-container">
						<ul class="tabs-menu">
							<li><a href="#tab-1"><i class="fal fa-comments"></i></a>
							</li>
							<li><a href="#tab-3"><i class="fal fa-envelope"></i></a>
							</li>
							<li><a href="#tab-2"><i class="fal fa-phone"></i></a>
							</li>
							<li><a href="#tab-4"><i class="fal fa-map-marker-alt"></i></a>
							</li>
						</ul>
						<div class="row">
						<div class="">
							<div class="tab">
								<div id="tab-1" class="tab-content">
									<div class="pd-full">
										<a href="#tab-4" class="close"><span aria-hidden="true">&times;</span></a>
										<h3 class="font-2 mg-b color-1">Chat</h3>
										<hr class="mg-b">
										<div class="row">
											<div class="col-sm-12">
												<p>Chateá con uno de nuestros representantes</p>
												<a href="#" role="button" target="_blank" class="btn btn-c1 full mg-t">Comenzar</a>

											</div>
										</div>
									</div>
								</div>
								<div id="tab-2" class="tab-content">
									<div class="pd-full">
										<a href="#tab-4" class="close"><span aria-hidden="true">&times;</span></a>
										<h3 class="font-2 mg-b color-1">Llamanos</h3>
										<hr class="mg-b">
										<div class="row">
											<div class="col-sm-12">
												<p>Una sola línea para todas tus consultas:</p>
												<a class="btn btn-c1 full mg-t" href="tel:08105556555"><i class="fal fa-phone fa-fw"></i> 0810 555-6555</a>
											</div>
										</div>
									</div>
								</div>
								<div id="tab-3" class="tab-content">

									<div class="pd-full">
										<a href="#tab-4" class="close"><span aria-hidden="true">&times;</span></a>
										<h3 class="font-2 mg-b color-1">Escribinos</h3>
										<hr class="mg-b">
										<form action="index.php">
											<div class="row">
												<div class="col-sm-12">
													<label class="label-control">Tu Nombre</label>
												
													<div class="form-group">
														<input type="text" class="form-control" placeholder="">
													</div>
												</div>
												<div class="col-sm-12">
													<label class="label-control">Correo electrónico</label>
													<div class="form-group">
														<input type="text" class="form-control" placeholder="Ej.: ejemplo@lacaja.com.ar">
													</div>
												</div>
												<div class="col-sm-12">
													<label class="label-control">Teléfono Celular (Código área + número)</label>
												</div>
												<div class="col-sm-6 col-xs-6">
													<div class="input-group mg-b-xs">
														<input type="text" class="form-control" placeholder="Ej.: 011">
													</div>
												</div>
												<div class="col-sm-6 col-xs-6">

													<div class="form-group">
														<input type="text" class="form-control" placeholder="Ej.: 48578118">
													</div>
												</div>
												<div class="col-sm-12">
													<label class="label-control">Tu consulta</label>
												
													<div class="form-group">
														<textarea id="message" type="text" placeholder="Tu mensaje" class="form-control"></textarea>
													</div>
												</div>
												<div class="col-sm-12">
													<button type="submit" class="btn btn-c1 full">Enviar</button>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div id="tab-4" class="tab-content">
									<div class="pd-full">
										<a href="#tab-4" class="close"><span aria-hidden="true">&times;</span></a>
										<h3 class="font-2 mg-b color-1">Sucursales</h3>
										<hr class="mg-b">
										<div class="row">
											<div class="col-sm-12">
												<p>Acercate a una de nuestras más de 60 sucursales</p>

												<a href="https://www.lacaja.com.ar/sucursales" role="button" target="_blank" class="btn btn-c1 full mg-t">Buscar</a>
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

</section>
<!-- sticky contact  -->
<script>
	$( document ).scroll( function () {
		var y = $( this ).scrollTop();
		if ( y > 150 ) {
			$( '.sticky-contact' ).fadeIn();
		} else {
			$( '.sticky-contact' ).fadeOut();
		}

	} );
</script>
<!-- open tabs  -->
<script>
	$( document ).ready( function () {
		var $tabs = $( ".tabs-menu a" ).click( function ( event ) {

			event.preventDefault();
			$( ".tab-content" ).hide();

			var $parent = $( this ).parent();

			if ( $parent.is( '.current' ) ) {
				$parent.removeClass( 'current' );
				$tabs.removeClass( 'current' );
				return;
			}

			$tabs.removeClass( 'current' );
			$parent.addClass( "current" );

			var tab = $( this ).attr( "href" );
			$( tab ).fadeIn();
		} ).parent();

		$( 'body' ).click( function ( e ) {
			if ( !$( e.target ).closest( '#tabs-container' ).length ) {
				$tabs.filter( '.current' ).find( 'a' ).click();
			}
		} )
	} );
</script>
<!-- close tabs  -->
<script>
	$( document ).ready( function () {
		$( ".close" ).click( function () {
			$( ".tab-content" ).hide();
			$( ".tabs-menu li" ).removeClass( 'current' );
		} );
	} );
</script>