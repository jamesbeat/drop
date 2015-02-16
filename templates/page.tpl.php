<div class="snap-drawers">

	<?php if($page['drawer_left']){ ?>
    	 <div class="snap-drawer snap-drawer-left">
		 	<div>
			   <?php print render($page['drawer_left']); ?>
  		    </div>
		</div>
	<?php } ?>
  
	 <div class="snap-drawer snap-drawer-right">
		 <nav role="navigation" class="mobile_nav">
	          	<?php print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('links', 'clearfix', 'main-menu')))); ?>
         </nav>
           
    	<?php if($page['drawer_right']){ ?>
	 	   <?php print render($page['drawer_right']); ?>
		    <?php } ?>
		    
	</div>
</div>

<div id="snap_table" class="snap-content">

	<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>
	
	  <!-- ______________________ HEADER _______________________ -->
	
	  <header id="header">
	   
	    <div class="container">
	      <?php if ($logo): ?>
	        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
	          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
	        </a>
	      <?php endif; ?>
	
	      <?php if ($site_name || $site_slogan): ?>
	        <div id="name-and-slogan">
	
	          <?php if ($site_name): ?>
	            <?php if ($title): ?>
	              <div id="site-name">
	                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
	              </div>
	            <?php else: /* Use h1 when the content title is empty */ ?>
	              <h1 id="site-name">
	                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
	              </h1>
	            <?php endif; ?>
	          <?php endif; ?>
	
	          <?php if ($site_slogan): ?>
	            <div id="site-slogan"><?php print $site_slogan; ?></div>
	          <?php endif; ?>
	                 
	
	        </div>
	      <?php endif; ?>
	
		   <nav role="navigation" id="main_nav">
	          	<?php print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('links', 'clearfix', 'main-menu')))); ?>
           </nav>
	
	      <?php if ($page['header']): ?>
	        <div id="header-region">
	          <?php print render($page['header']); ?>
	        </div>
	      <?php endif; ?>
	      
		      <!-- Snap Button -->
		    <div class="nav-snap"><a href="" id="snap_btn"><i></i></a></div>
	      
	    </div>
	  </header> <!-- /header -->
	
	  	
	  <!-- ______________________ MAIN _______________________ -->
	
	  <div id="main">
		  
		<?php print $messages; ?>  
		
		 <section id="content">
		
			<?php if (!empty($title)): ?>
		      <div class="container">
			  		<div class="row">
				  		<h1 class="page-header"><?php print $title; ?></h1>
				  	</div>
		      </div>
		     <?php endif; ?>
		     
		     <?php if ($page['highlighted']): ?>
		        <div id="highlighted"><?php print render($page['highlighted']) ?></div>
		     <?php endif; ?>
		     
		      <?php if ($breadcrumb): ?>
		        <?php print $breadcrumb; ?>
		      <?php endif; ?>
			  
		     <div class="container">     
		     	 <div id="content-area">
					 <?php print render($page['content']) ?>
		     	 </div>
		     	 
		     	 <?php if (!empty($action_links)): ?>
			        <ul class="action-links"><?php print render($action_links); ?></ul>
			      <?php endif; ?>
			      
			      <?php if (!empty($tabs)): ?>
			        <?php print render($tabs); ?>
			      <?php endif; ?>
	
		
		          <?php print $feed_icons; ?>

		     </div>    		          
		         		         
		          		
		</section> <!-- /content-inner /content -->
		
		      <?php if ($page['sidebar_first']): ?>
		        <aside id="sidebar-first" class="column sidebar first">
		          <?php print render($page['sidebar_first']); ?>
		        </aside>
		      <?php endif; ?> <!-- /sidebar-first -->
		
		      <?php if ($page['sidebar_second']): ?>
		        <aside id="sidebar-second" class="column sidebar second">
		          <?php print render($page['sidebar_second']); ?>
		        </aside>
		      <?php endif; ?> <!-- /sidebar-second -->
	    
	  </div> <!-- /main -->
	
	  <!-- ______________________ FOOTER _______________________ -->
	
	  <?php if ($page['footer']): ?>
	    <footer id="footer">
	      <div class="container">
	      <?php print render($page['footer']); ?>
	      </div>
	    </footer> <!-- /footer -->
	  <?php endif; ?>
	
	</div> <!-- /page -->
</div> <!-- snap-content -->
