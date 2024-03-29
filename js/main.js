let elBox1 = document.querySelector('.box1')
let elBox2 = document.querySelector('.box2')
let elBox3 = document.querySelector('.box3')
let elDiv1 = document.querySelector('.div1')
let elDiv2 = document.querySelector('.div2')
let a = 0
setInterval(()=>{
    a = a + 1
    if (a <= 3) {
        elDiv2.classList.add('g')
        elDiv1.classList.remove('r')
        elBox1.classList.add('q')
        elBox2.classList.remove('s')
        elBox3.classList.remove('y')
    }else if(a == 4 || a == 8){
        elDiv1.classList.remove('r')
        elBox2.classList.add('s')
        elBox3.classList.remove('y')
        elBox1.classList.remove('q')
    }else if(a >= 5 && a <= 7){
        elDiv1.classList.add('r')
        elBox3.classList.add('y')
        elDiv2.classList.remove('g')
        elBox2.classList.remove('s')
        elBox1.classList.remove('q')
    }
    if(a == 8){
        a = 0
    }
},1000)