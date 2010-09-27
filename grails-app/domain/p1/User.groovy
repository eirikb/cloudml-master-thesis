package p1

class User {
	
	static hasMany = [accounts: Account]
	
	String username
	String password
	Person person
	boolean enabled
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired
	
	static constraints = {
		username blank: false, unique: true
		password blank: false
	}
	
	static mapping = {
		password column: '`password`'
		person nullable: true
	}
	
	Set<Role> getAuthorities() {
		UserRole.findAllByUser(this).collect { it.role } as Set
	}
}
