//javascript v5
var name ='golf'
var count = 0
var isCompleted = true
var price = 10.50
var a
var b = null

console.log(typeof name)
console.log(typeof count)
console.log(typeof isCompleted)
console.log(typeof price)
console.log(typeof a)
console.log(typeof b)


//javascript v6
let a1 =0
let isDone = false
const PT = 3.142


if(isCompleted) {
    console.log('Job is completed!')
}


for(count=0; count < 5; count++) {
    console.log(count)
}


while(isCompleted) {
    console.log('Enter while loop')
    isCompleted = false
}


var o = {}  //ประกาศ Object
var o1 = {} //o1 ไม่รู้จักของ o.name, o.email เลย
o.name = 'Golf'
o.email = '58160434@go.buu.ac.th'
console.log(typeof o)
console.log(o)

o1 = {
    name: 'Golf',
    email: '58160434@go.buu.ac.th'
}
console.log(o1)

function SimpleObject() {   //เป็น Object

}

var so = new SimpleObject()
console.log(typeof so)