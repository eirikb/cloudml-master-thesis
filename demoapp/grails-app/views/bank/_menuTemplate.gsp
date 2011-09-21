         <g:set var="entityName" value="${message(code: 'user.label', default: 'User')}" />
        <div class="nav">
            <span class="menuButton"><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></span>
            <span class="menuButton"><g:link class="useredit" controller="person" action="edit"><g:message code="default.edit.label" args="['Person']" /></g:link></span>
            <sec:ifAllGranted roles="ROLE_ADMIN">
  		    	<span class="menuButton"><g:link class="list" controller="user" action="list"><g:message code="default.list.label" args="[entityName]" /></g:link></span>
            	<span class="menuButton"><g:link class="create" controller="user" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></span>
			</sec:ifAllGranted>
        </div>