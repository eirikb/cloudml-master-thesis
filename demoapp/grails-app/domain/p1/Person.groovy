package p1

class Person {
	
	static belongsTo = [user: User]
	
	String firstname
	String lastname
	String address
	String phone
	
    static constraints = {
		firstname(nullable: true)
		lastname(nullable: true)
		address(nullable: true)
		phone(nullable: true)
    }
}
