<html>
    <head>
        <title><g:layoutTitle default="Grails" /></title>
        <link rel="stylesheet" href="${resource(dir:'css',file:'main.css')}" />
        <link rel="stylesheet" href="${resource(dir:'css',file:'rest.css')}" />
        <link rel="stylesheet" href="${resource(dir:'css',file:'text.css')}" />
        <link rel="stylesheet" href="${resource(dir:'css',file:'960.css')}" />
        <link href='http://fonts.googleapis.com/css?family=Cantarell&subset=latin' rel='stylesheet' type='text/css'>
        <link rel="shortcut icon" href="${resource(dir:'images',file:'favicon.ico')}" type="image/x-icon" />
        <g:layoutHead />
        <g:javascript library="application" />
    </head>
    <body>
    	<div class="container_12">
    		<sec:ifLoggedIn>
    			<div class="menuButton">
  					<g:link class="logout" controller="logout">Logout</g:link>
  				</div>
			</sec:ifLoggedIn>
	        <div id="spinner" class="spinner" style="display:none;">
	            <img src="${resource(dir:'images',file:'spinner.gif')}" alt="${message(code:'spinner.alt',default:'Loading...')}" />
	        </div>
	        <g:layoutBody />
	    </div>
    </body>
</html>