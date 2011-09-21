package p1

class BankService {

    static transactional = true

    def transferMoney(fromAccount, toAccount, amount) {
		fromAccount.balance -= amount
		fromAccount.save(flush: true)
		toAccount.balance += amount
		toAccount.save(flush: true)
    }
}
