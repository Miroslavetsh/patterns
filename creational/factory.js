

class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MembershipFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    }

    create (name, type = 'simple') {
        const Membership = MembershipFactory.list[type] || MembershipFactory.list.simple
        const member = new Membership(name)
        member.type = type
        member.define = function () {
            console.log(`${this.name}, ${this.type} : ${this.cost}`)
        }
        return member
    }
}

const factory = new MembershipFactory()

const members = [
    factory.create('Myroslav', 'premium'),
    factory.create('Anna', 'standard'),
    factory.create('Toloshnyi', 'simple'),
    factory.create('Anton'),
]

members.forEach(member => member.define())