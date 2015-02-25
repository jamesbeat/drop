<!DOCTYPE html>
<html>
<head>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
	
	<?php $themedir = drupal_get_path('theme', 'drop'); ?>
	
	<link rel="apple-touch-icon" sizes="57x57" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php print $themedir; ?>/images/optimized/icons/apple-touch-icon-180x180.png">
	<meta name="msapplication-TileColor" content="#123456">
	<meta name="msapplication-TileImage" content="<?php print $themedir; ?>/images/optimized/icons/mstile-144x144.png">
	<meta name="msapplication-config" content="<?php print $themedir; ?>/images/optimized/icons/browserconfig.xml"></head>
  
</head>
<body class="<?php print $classes; ?>" <?php print $attributes; ?>>
  <div id="skip">
    <a href="#content"><?php print t('Jump to Navigation'); ?></a>
  </div>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  
  <script type='text/javascript'>//<![CDATA[
;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
//]]></script>

</body>
</html>