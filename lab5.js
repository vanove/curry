//1
function makeCounter(){
    let currentCount = 1;

    return function(){
        return currentCount++;
    };
}

let counter = makeCounter();
console.log(counter)
alert(counter());
alert(counter());
alert(counter());

let counter2 = makeCounter();
alert (counter2());

///var2
/*
let currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter());
alert(counter());

alert(counter2());
alert(counter2());
*/
//2
//function(a,b,c,)       function(a)(b)(c)
function volumeCuboid(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}
volumeCuboid(4)(2)(3)
console.log(volumeCuboid(4)(2)(3))
const volumeWithA = volumeCuboid(5);

const volume1 = volumeWithA(3)(4); 
const volume2 = volumeWithA(2)(6); 
const volume3 = volumeWithA(7)(8); 

console.log(volume1); 
console.log(volume2);  
console.log(volume3);  
//3
let x=0;
let y=0;
function* generator(){
    while(true){
        const command = yield { x, y };
        switch(command){
            case 'left':
                x-=10;
                break;
                case 'right':
                    x+=10;
                    break;
                    case 'up':
                        y+=10;
                        break;
                        case'down':
                        y-=10;
                        break;
                        default:
                            console.log('Неверная команда');
        }
    }
}
const move=generator();
while(true){
    const command=prompt('Введите команду(left,right,up,down):');
    if(!command)break;
    for(i=0;i<10;i++){
        const coords = move.next(command).value;
        console.log(`Координаты: (${coords.x}, ${coords.y})`);
    }
}
//4
function Ivan(){
    console.log("hello Ivan");
}
var myvar=52;
let mylet=20;
const myconst=30;
function myfunction()
{
    console.log("hello from window");
}
console.log(window.myvar);
console.log(window.mylet);
console.log(window.myconst);
console.log(window.myfunction);
window.myvar=230;
window.myfunction=Ivan;
console.log(window.myvar);
console.log(window.myfunction);