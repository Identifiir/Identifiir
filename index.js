

var counter1 = document.getElementById('counter1').innerHTML;
var zero = 0;
var zero2 = 0;
var zero3 = 0;
console.log(counter1);




const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const intervalup1 = async () => {
  for (let i = 0; i < 14; i++) {
    await sleep(120)


    zero+=0.1;
   var final = zero.toFixed(1);
document.getElementById('counter1').innerHTML = final



  }
}

const intervalup2 = async () => {
  for (let i2 = 0; i2 < 16; i2++) {
    await sleep(120)


    zero2+=0.1;
   var final2 = zero2.toFixed(1);
document.getElementById('counter2').innerHTML = final2



  }
}

const intervalup3 = async () => {
  for (let i3 = 0; i3 < 14; i3++) {
    await sleep(120)


    zero3+=1;

document.getElementById('counter3').innerHTML = zero3



  }
}
intervalup1()
intervalup2()
intervalup3()

function redirect () {

  window.location.href = "directory.html"
}