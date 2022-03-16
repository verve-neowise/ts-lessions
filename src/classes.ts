class User {

	// field
	name: string
	surname: string

	constructor(name: string, surname: string) {
		this.name = name
		this.surname = surname
	}
	// methods 
	fullName() {
		return this.name + ' ' + this.surname
	}

	validate() {
		return this.name === 'admin'
	}
}

let codership = new User('Ravshanbek', 'Sharipboev')