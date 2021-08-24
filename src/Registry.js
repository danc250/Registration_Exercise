module.exports = 
class Registry {

	constructor() {
		this.list = []
	}

	register(fullName, billingAddress, emailAddress, dateOfBirth, phoneNumber) {

		this.list.push({
			fullName, 
			billingAddress, 
			emailAddress, 
			dateOfBirth, 
			phoneNumber
		})
	}
}