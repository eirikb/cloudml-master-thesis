package p1

class PersonController {
	
	static allowedMethods = [save: "POST", update: "POST", delete: "POST"]
	
	def springSecurityService
	
	def index = { redirect(action: "edit") }
	
	def create = {
		def personInstance = new Person()
		personInstance.properties = params
		return [personInstance: personInstance]
	}
	
	def save = {
		def personInstance = new Person(params)
		def id = springSecurityService.principal?.id?.toInteger()
		def user = User.get(id)
		personInstance.user = user
		if (personInstance.save(flush: true)) {
			user.person = personInstance
			user.save(flush: true)
			flash.message = "${message(code: 'default.created.message', args: [message(code: 'person.label', default: 'Person'), personInstance.id])}"
			redirect(controller: "bank")
		}
		else {
			render(view: "create", model: [personInstance: personInstance])
		}
	}
	
	def edit = {
		def id = springSecurityService.principal?.id?.toInteger()
		def user = User.get(id)
		def personInstance = user.person
		if (!personInstance) {
			flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'person.label', default: 'Person'), params.id])}"
			redirect(action: "create")
		}
		else {
			return [personInstance: personInstance]
		}
	}
	
	def update = {
		def id = springSecurityService.principal?.id?.toInteger()
		def user = User.get(id)
		def personInstance = user.person
		if (personInstance) {
			if (params.version) {
				def version = params.version.toLong()
				if (personInstance.version > version) {
					
					personInstance.errors.rejectValue("version", "default.optimistic.locking.failure", [message(code: 'person.label', default: 'Person')] as Object[], "Another user has updated this Person while you were editing")
					render(view: "edit", model: [personInstance: personInstance])
					return
				}
			}
			personInstance.properties = params
			if (!personInstance.hasErrors() && personInstance.save(flush: true)) {
				flash.message = "${message(code: 'default.updated.message', args: [message(code: 'person.label', default: 'Person'), personInstance.id])}"
				redirect(controller: "bank")
			}
			else {
				render(view: "edit", model: [personInstance: personInstance])
			}
		}
		else {
			flash.message = "${message(code: 'default.not.found.message', args: [message(code: 'person.label', default: 'Person'), params.id])}"
			redirect(action: "list")
		}
	}
}
