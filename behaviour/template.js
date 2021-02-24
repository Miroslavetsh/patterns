class Employee {
    constructor(name , salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {

    }

    work() {
        return `${this.name} is worked! ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has salary: ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Developer is processing...'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Testing is processing...'
    }
}

const dev = new Developer('Myroslav', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Hoor', 1000)
console.log(tester.getPaid())
console.log(tester.work())