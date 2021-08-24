const assert = require('assert')
const Registry = require('../src/Registry')

describe('Registration', function() {

	describe('Registry', function() {
		
		const registry = new Registry

		it('successfully registers a person', function() {
			// given i have a full name 
			const fullName = 'Bob Ross'
			// and i have a billing address
			const billingAddress = '1234 Trenton Ave, Annapolis, MD 21208'
			// and i have an email address
			const emailAddress = 'WiggityWhiteDan@gmail.com'
			// and i have a date of birth
			const dateOfBirth = '01/02/1993'
			// and i have a phone number
			const phoneNumber = '123-456-7890'

			// when i provide that information
			registry.register(fullName, billingAddress, emailAddress, dateOfBirth, phoneNumber)

			// then i will be on the registration list
			assert(registry.list.some(user => (
				user.fullName === fullName &&
				user.billingAddress === billingAddress &&
				user.emailAddress === emailAddress &&
				user.dateOfBirth === dateOfBirth &&
				user.phoneNumber === phoneNumber
			)))
			
		})

	})

	it('works', function() {

		assert(true)
	})

}) 

// given, when, then

// actual full name, billing address, email address, DOB, phone number

// given i have a full name 
// and i have a billing address
// and i have an email address
// and i have a date of birth
// and i have a phone number
// when i provide that information
// then i will be on the registration list
