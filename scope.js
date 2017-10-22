// var a
// console.log(a)
// console.log(b)

// // //histing
// if(true) {
//     var b = 2
//     a = 1
//     console.log(b)
// }
// console.log(a)
// console.log(b)

// function a1() {
//     var a = 5
//     console.log(a)
//     console.log(b)

//     // if(true) {
//     //     var b = 2
//     //     console.log(b)
//     // }
//     // console.log(b)
// }
// //JS มองแบบนี้
// // function a1() {
// //     var a = 5
// //     var b
// //     console.log(a)
// //     console.log(b)

// //     if(true) {
// //         b = 2
// //         console.log(b)
// //     }
// //     console.log(b)
// // }
// a1()
//กรณีไม่ได้ประก่าศ var a จะไม่พบค่า
//console.log(a)

// function a1() {
//     a = 5
//     console.log(a)
// }

// console.log(a)

// a1()
// console.log(a)

function a1(fn) {
    var a = 5
    console.log(`a = ${a}`)
    console.log(typeof fn)
    //fn()    //object ไม่สามารถ invok ได้
    if(typeof fn === 'function') {
        fn()
    }
}

function b1() {
    var b = 1
    console.log(`b = ${b}`)
}

var o = new b1() //o ประกาศ new b1() ก็เท่ากับเรียกใช้ b1() แล้ว เลยแสดงb1()ก่อน
a1(b1)
a1(o)

var o1 = {}
function SimpleObject() {

}

var o2 = new SimpleObject()
o1.name = 'Golf'
o2.email = 'Sontaya16071997@gmail.com'
console.log(o1)
console.log(o2)