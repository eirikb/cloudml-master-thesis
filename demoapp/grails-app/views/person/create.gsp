

<%@ page import="p1.Person" %>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="layout" content="main" />
        <g:set var="entityName" value="${message(code: 'person.label', default: 'Person')}" />
        <title><g:message code="default.create.label" args="[entityName]" /></title>
    </head>
    <body>
        <div class="nav">
            <span class="menuButton"><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></span>
        </div>
        <div class="body">
            <h1><g:message code="default.create.label" args="[entityName]" /></h1>
            <g:if test="${flash.message}">
            <div class="message">${flash.message}</div>
            </g:if>
            <g:hasErrors bean="${personInstance}">
            <div class="errors">
                <g:renderErrors bean="${personInstance}" as="list" />
            </div>
            </g:hasErrors>
            <g:form action="save" >
                <div class="dialog">
                    <table>
                        <tbody>
                        
                            <tr class="prop">
                                <td valign="top" class="name">
                                    <label for="firstname"><g:message code="person.firstname.label" default="Firstname" /></label>
                                </td>
                                <td valign="top" class="value ${hasErrors(bean: personInstance, field: 'firstname', 'errors')}">
                                    <g:textField name="firstname" value="${personInstance?.firstname}" />
                                </td>
                            </tr>
                        
                            <tr class="prop">
                                <td valign="top" class="name">
                                    <label for="lastname"><g:message code="person.lastname.label" default="Lastname" /></label>
                                </td>
                                <td valign="top" class="value ${hasErrors(bean: personInstance, field: 'lastname', 'errors')}">
                                    <g:textField name="lastname" value="${personInstance?.lastname}" />
                                </td>
                            </tr>
                        
                            <tr class="prop">
                                <td valign="top" class="name">
                                    <label for="address"><g:message code="person.address.label" default="Address" /></label>
                                </td>
                                <td valign="top" class="value ${hasErrors(bean: personInstance, field: 'address', 'errors')}">
                                    <g:textField name="address" value="${personInstance?.address}" />
                                </td>
                            </tr>
                        
                            <tr class="prop">
                                <td valign="top" class="name">
                                    <label for="phone"><g:message code="person.phone.label" default="Phone" /></label>
                                </td>
                                <td valign="top" class="value ${hasErrors(bean: personInstance, field: 'phone', 'errors')}">
                                    <g:textField name="phone" value="${personInstance?.phone}" />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="buttons">
                    <span class="button"><g:submitButton name="create" class="save" value="${message(code: 'default.button.create.label', default: 'Create')}" /></span>
                </div>
            </g:form>
        </div>
    </body>
</html>
