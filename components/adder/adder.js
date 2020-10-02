const add = (x, y, z) => { return x + y + z }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Emmett',
    firstNumber: 5,
    secondNumber: 3,
    thirdNumber: 2
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      const z = parseInt(this.thirdNumber)
      return `${this.guest}, your sum is ${add(i, j, z)}.`
    }
  }
})
