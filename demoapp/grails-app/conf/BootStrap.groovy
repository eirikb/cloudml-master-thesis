import bank.*

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
		createRequestmap('/', 'ROLE_USER')
		createRequestmap('/account/*', 'ROLE_USER')
		createRequestmap('/bank', 'ROLE_USER')
		createRequestmap('/bank/*', 'ROLE_USER')
		createRequestmap('/person', 'ROLE_USER')
		createRequestmap('/user/*', 'ROLE_ADMIN')
	}

    def void createRequestmap(url, role) {
        if (!Requestmap.findByUrl(url)) {
            new Requestmap(url: url, configAttribute: role).save(failOnError: true)
        }
    }
}
