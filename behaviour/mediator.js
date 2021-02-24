class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    recieve(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.recieve(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].recieve(message, from)
                }
            })
        }
    }
}

const Vladilen = new User('Vladilen')
const Elena = new User('Elena')
const Igor = new User('Igor')

const room = new ChatRoom()

room.register(Vladilen)
room.register(Elena)
room.register(Igor)

Vladilen.send('Hello', Elena)
Elena.send('GG', Vladilen)
Igor.send('HALO')