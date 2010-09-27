package p1

class Account {
	static belongsTo = [user: User]
	
	String name
	Double balance = 0
	
	static constraints = {
		name(blank: false)
	}
}
