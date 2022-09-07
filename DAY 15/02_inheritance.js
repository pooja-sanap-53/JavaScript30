// DAY 15 PART 2

//INHERITANCE

class Plane{
    constructor(brand) {
      this._planename = brand;
    }
    present() {
      return 'I have a ' + this._planename;
    }
}
  
class Model extends Plane {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    showDetails() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myplane = new Model('Cessna', 'Citation X');
console.log(myplane._planename); //Cessna
console.log(myplane.model); //Citation X
console.log(myplane.present()); //I have a Cessna
console.log(myplane.showDetails()); //I have a Cessna, it is a Citation X