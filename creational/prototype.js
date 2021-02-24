const car = {
    wheels: 4,
    init () {
        console.log(`Hello, I am a car, I have ${this.wheels} wheels! ${this.owner} is my owner.`)
    },
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Dmytro'
    }
})

carWithOwner.init()
console.log(carWithOwner.__proto__ === car)