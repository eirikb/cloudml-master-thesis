import p1.*

class BootStrap {
	
	def springSecurityService
	
	
	def init = { servletContext -> createAuth() }
	def destroy = {
	}
	
	def void createAuth() {
		def userRole = Role.findByAuthority('ROLE_USER') ?: new Role(authority: 'ROLE_USER').save(failOnError: true)
		def adminRole = Role.findByAuthority('ROLE_ADMIN') ?: new Role(authority: 'ROLE_ADMIN').save(failOnError: true)
		
		def adminUser = User.findByUsername('admin') ?: new User(
				username: 'admin',
				password: springSecurityService.encodePassword('admin'),
				enabled: true).save(failOnError: true)
		
		
		if (!adminUser.authorities.contains(adminRole)) {
			UserRole.create adminUser, adminRole
		}
		if (!adminUser.authorities.contains(userRole)) {
			UserRole.create adminUser, userRole
		}
		
		new Requestmap(url: '/account/*', configAttribute: 'ROLE_USER').save(failOnError: true)
		new Requestmap(url: '/user/*', configAttribute: 'ROLE_ADMIN').save(failOnError: true)
	}
}
