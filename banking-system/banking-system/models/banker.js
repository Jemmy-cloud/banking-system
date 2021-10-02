class banker {
    constructor(id, name, email, password, hashedPassword) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.hashedPassword = hashedPassword
    }
}

module.exports = banker