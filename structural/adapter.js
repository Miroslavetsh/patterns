class OldCalc {
    operations(t1, t2, opertion) {
        switch (opertion) {
            case 'add' : return t1 +t2
            case 'sub' : return t1 - t2 
            default :  return NaN
        } 
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 +t2
    }

    sub(t1, t2) {
        return t1 - t2 
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }

    operations(t1, t2, opertion) {
        switch (opertion) {
            case 'add' : return this.calc.add(t1, t2)
            case 'sub' : return this.calc.sub(t1, t2)
            default :  return NaN
        } 
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(19, 15, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(15, 25))

const adapter = new CalcAdapter()
console.log(adapter.operations(12, 11, 'sub'))