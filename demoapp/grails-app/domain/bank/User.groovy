package bank

import java.io.Serializable;

class User implements Serializable {
	
	static hasMany = [accounts: Account]
	
	String username
	String password
	Person person
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired
	
	static constraints = {
		username blank: false, unique: true
		password blank: false
		person nullable: true
	}
	
    static mapping = { 
      table '`user`' 
      password column: '`password`' 
   } 
	
	Set<Role> getAuthorities() {
		UserRole.findAllByUser(this).collect { it.role } as Set
	}
}
