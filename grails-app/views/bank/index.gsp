

<%@ page import="p1.User" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="layout" content="main" />
        <g:set var="entityName" value="${message(code: 'user.label', default: 'User')}" />
        <title><g:message code="default.create.label" args="[entityName]" /></title>
    </head>
    <body>
        <div class="nav">
            <span class="menuButton"><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></span>
            <span class="menuButton"><g:link class="useredit" controller="person" action="edit"><g:message code="default.edit.label" args="['Person']" /></g:link></span>
            <sec:ifAllGranted roles="ROLE_ADMIN">
  		    	<span class="menuButton"><g:link class="list" controller="user" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></span>
            	<span class="menuButton"><g:link class="create" controller="user" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></span>
			</sec:ifAllGranted>
        </div>
        <div class="body">
            <g:if test="${flash.message}">
            	<div class="message">${flash.message}</div>
            </g:if>
            <div class="box grid_7">
            	<h3>Personal info</h3>
	            <g:if test="${user.person}">
	            	<g:if test="${user.person.firstname || user.person.lastname} ">
	            	 	<p>Welcome ${user.person.lastname }, ${user.person.firstname }</p>
	            	</g:if>
	            	<g:if test="${user.person.address }">
	            		<p>Address: ${user.person.address }</p>
	            	</g:if>
	            	<g:if test="${user.person.phone }">
	            		<p>Phone: ${user.person.phone }</p>
	            	</g:if>
	            </g:if>
	            <g:else>
	            	<p>You have no person info set, please <g:link controller="person" action="edit">create it</g:link>.</p>
	            </g:else>
            </div>
            <div class="clear"></div>
            <div class="box grid_7">
            	<h3>Accounts</h3>
	            <g:if test="${user.accounts}">
					<div class="list">
		                <table>
		                    <thead>
		                        <tr>
		                            <g:sortableColumn property="name" title="Name" />
		                            <g:sortableColumn property="balance" title="Balance" />
		                            <th>Transfer</th>
		                        </tr>
		                    </thead>
		                    <tbody>
		                    <g:each in="${user.accounts}" status="i" var="account">
		                        <tr class="${(i % 2) == 0 ? 'odd' : 'even'}">
		                            <td>${fieldValue(bean: account, field: "name")}</td>
		                            <td>${fieldValue(bean: account, field: "balance")}</td>
		                            <td><g:link class="transfer" controller="account" action="transfer">Transfer</g:link></td>
		                        </tr>
		                    </g:each>
		                    </tbody>
		                </table>
		            </div>
	            </g:if>
	            <g:else>
	            	<p>You have no accounts registered, please <g:link controller="account" action="create">create one</g:link>.</p>
	            </g:else>
	            <span class="menuButton"><g:link class="create" controller="account" action="create"><g:message code="default.new.label" args="['Account']" /></g:link></span>
            </div>
        </div>
    </body>
</html>
