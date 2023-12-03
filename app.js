let p = fetch("https://goweather.herokuapp.com/weather/ny")
let a = document.getElementById('now')
let a_to = document.getElementById('Tomorrow')
let a_dayafter = document.getElementById('Aftertom')

p.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2)
    console.log(value2.forecast[0])
    a.text= value2.forecast[0].temperature
    a_to.text= value2.forecast[1].temperature
    a_dayafter.text= "5"+value2.forecast[2].temperature
})
// for(let i= 0 ; i>)

let q = fetch("https://goweather.herokuapp.com/weather/washington")
let a1 = document.getElementById('now1')
let a_to1 = document.getElementById('Tomorrow1')
let a_dayafter1 = document.getElementById('Aftertom1')
q.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2)
    console.log(value2.forecast[0])
    a1.text= value2.forecast[0].temperature
    a_to1.text= value2.forecast[1].temperature
    a_dayafter1.text= "5"+value2.forecast[2].temperature
})


let r = fetch("https://goweather.herokuapp.com/weather/lasvegas")
let a2 = document.getElementById('now2')
let a_to2 = document.getElementById('Tomorrow2')
let a_dayafter2 = document.getElementById('Aftertom2')
r.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2)
    console.log(value2.forecast[0])
    a2.text= value2.forecast[0].temperature
    a_to2.text= "6"+value2.forecast[1].temperature
    a_dayafter2.text= "5"+value2.forecast[2].temperature
})