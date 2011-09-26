package bank

import java.io.Serializable;

class Account implements Serializable {
	static belongsTo = [user: User]
	
	String name
	Double balance = 0
	
	static constraints = {
		name(blank: false)
	}
}
