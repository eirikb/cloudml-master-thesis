package p1

class Account {
	static belongsTo = [user: User]
	
	Double balance = 0
	
	static constraints = {
	}
}
