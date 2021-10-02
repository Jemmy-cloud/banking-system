class client {
    constructor(id, name, email, password,hashedPassword){
        this.name = name
        this.id = id
        this.email= email
        this.password = password
        this.hashedPassword = hashedPassword
    }
}


module.exports = client