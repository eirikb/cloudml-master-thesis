<%@ page import="p1.User" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="layout" content="main" />
        <title>Bank</title>
    </head>
    <body>
		<g:render template="menuTemplate" />
		<div class="body">
			<p>${amount } have been successfully transfered from ${account?.name } to ${account2?.name }</p>
			<g:link controller="bank">Go back</g:link>
		</div>
 	</body>
</html>