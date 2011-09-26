<%@ page import="bank.User" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="layout" content="main" />
        <title>Bank</title>
    </head>
    <body>
		<g:render template="menuTemplate" />
		<div class="body">
			<h2>Transfer money from account '${account?.name }'</h2>
			<h3>Select a user you want to tranfer money to</h3>
			<g:form action="transfer">
				<g:select from="${users }" name="user" optionValue="username" optionKey="id" />
				<g:submitButton name="doSelectUser" value="Select" />
			</g:form>
		</div>
 	</body>
</html>