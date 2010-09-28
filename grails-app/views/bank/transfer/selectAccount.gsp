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
			<h2>Transfer money from account '${account?.name }'</h2>
			<h3>Select amount and account for the user ${user?.username }</h3>
			<g:form action="transfer">
				<g:select from="${accounts }" name="account" optionValue="name" optionKey="id" />
				<div class="clear"></div>
				<p>Amount:</p>
				<g:textField name="amount" />
				<div class="clear"></div> 
				<g:submitButton name="doSelectAccount" value="Send" />
			</g:form>
		</div>
 	</body>
</html>