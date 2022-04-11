

<?php

 $config['dev_server']   = '127.0.0.1';

 if($_SERVER['HTTP_HOST'] != $config['dev_server']) {
  	//$config["base_url"]  = "http://www.lacajaonline.com.ar/201712-Suite/";
  	//$config["base_url"]  = "https://www.tripi.com.ar/works/lacaja.suite.com.ar/";
  	$config["base_url"]  = "http://lacajaonline.com.ar/201805-Coti-HOGAR/";
 } else {
  	$config["base_url"] = "http://localhost/lacajaonline/201805-Coti-HOGAR/";
 }
  
?>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, user-scalable=no"/>
<meta name="format-detection" content="telephone=no">

<base href="<?php echo($config["base_url"]); ?>"/>

<!-- fav & smartphone icons -->
<link rel="apple-touch-icon" sizes="180x180" href="assets/ico/apple-touch-icon.png">
<link rel="icon" type="image/png" href="assets/ico/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="assets/ico/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="assets/ico/manifest.json">
<link rel="mask-icon" href="assets/ico/safari-pinned-tab.svg" color="#CCCCCC">
<meta name="theme-color" content="#ffffff">

<!-- jquery -->
<script type="text/javascript" src="assets/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="assets/js/jquery.easing.1.3.min.js"></script>

<!-- font-awesome -->
<link rel="stylesheet" href="assets/css/fontawesome-pro-brands.css" type="text/css"/>
<link rel="stylesheet" href="assets/css/fontawesome-pro-core.css" type="text/css"/>
<link rel="stylesheet" href="assets/css/fontawesome-pro-light.css" type="text/css"/>
<link rel="stylesheet" href="assets/css/fontawesome-pro-regular.css" type="text/css"/>
<link rel="stylesheet" href="assets/css/fontawesome-pro-solid.css" type="text/css"/>
<link rel="stylesheet" href="assets/css/fontawesome-pro-svg-framework.css" type="text/css"/>

<!-- dripicons -->
<link rel="stylesheet" href="assets/css/dripicons.css" type="text/css"/>

<!-- animate.css -->
<link rel="stylesheet" href="assets/css/animate.css" type="text/css"/>

<!-- sweetalert.js -->
<script type="text/javascript" src="assets/js/sweetalert.min.js"></script>
<link rel="stylesheet" href="assets/css/sweetalert.css" type="text/css"/>

<!-- bootstrap-toggle -->
<link rel="stylesheet" href="assets/css/bootstrap-toggle.min.css" type="text/css"/>
<script type="text/javascript" src="assets/js/bootstrap-toggle.min.js"></script>

<!-- bootstrap-slider -->
<link rel="stylesheet" href="assets/css/bootstrap-slider.min.css" type="text/css"/>
<script type="text/javascript" src="assets/js/bootstrap-slider.min.js"></script>

<!-- owl.carousel -->
<link rel="stylesheet" href="assets/css/owl.carousel.css" type="text/css"/>
<script type="text/javascript" src="assets/js/owl.carousel.min.js"></script>

<!-- jquery.scrollTo -->
<script type="text/javascript" src="assets/js/jquery.scrollTo.min.js"></script>

<!-- datetimepicker.js -->
<script type="text/javascript" src="assets/js/moment-with-locales.js"></script>
<script type="text/javascript" src="assets/js/bootstrap-datetimepicker.min.js"></script>
<link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.css" type="text/css"/>

<!-- validator.js -->
<script type="text/javascript" src="assets/js/validator.min.js"></script>

<!-- bootstrap -->
<link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css"/>
<!-- main -->
<link rel="stylesheet" href="assets/css/normalize.css" type="text/css"/>
<link rel="stylesheet" href="assets/css/main.css" type="text/css"/>

<link rel="stylesheet" href="assets/css/hogar.css" type="text/css"/>
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->