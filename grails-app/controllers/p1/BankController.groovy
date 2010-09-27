package p1

class BankController {
	
	def springSecurityService
	
	def index = {
		def id = springSecurityService.principal?.id?.toInteger()
		def user = User.get(id)
		[user: user]
	}
}
