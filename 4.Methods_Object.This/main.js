// let calculator = {
//     read() {
//         this.a = + prompt('a', 0);
//         this.b = + prompt('b', 0);
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul(){
//         return this.a * this.b;
//     },
// }

// calculator.read();
// console.log(calculator);
// alert(calculator.sum());
// alert(calculator.mul());





let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
};

console.log(ladder.up().up().down().showStep());


