// .........................FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS(CHAPTERS 38 -42).................. 
//-----------------------------------chap 38 to 42------------------------------------------------



// function power (a,b){
//     var c = Math.pow(a,b)
//     return c 
// }
// var a = power(parseInt(prompt('Enter any number')),parseInt(prompt('Enter Power of that number')));
// alert(a)



// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }

// var a = leapyear(prompt('enter year'));
// alert (a)



// function areaofTriangle(){
//         var a = parseFloat(prompt("Enter a"));
//         var b = parseFloat(prompt("Enter b"));
//         var c = parseFloat(prompt("Enter c"));
//         var d =  ( a + b + c ) / 2;
//         var e =  Math.sqrt(d*((d-a)*(d-b)*(d-c)))
//         return e
// }
// var x = areaofTriangle();
// alert(x)


// function mainFunc(){
//     var a = parseFloat((prompt('Enter numbers of first subject max 100')));
//     var b = parseFloat((prompt('Enter numbers of second subject max 100')))
//     var c = parseFloat((prompt('Enter numbers of third subject max 100')));
//     var z = a+b+c;
//     var e = 300;
//     function avg(){
//         var d = (z)/3
//         alert("Avg marks is : "+ d)
//         return d

//     }
//     var x = avg()
//     function per(){
//         var y = (z/e)*100
//         alert('Percentage : ' + y)
//         return y
//     } 
//     var w = per()
//     return w


// }
// var a = mainFunc()
// console.log(a)                                        




// function ind () {
//     var word = prompt('Enter any word');
//     var character = prompt('Enter character to find the Index of it')

//     for (i = 0; i < word.length; i++) {
//       if (word[i] === character) {
//         return i;
//       }
//     }

//     return -1;
// }
// var a = ind();
// alert(a)




// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

// var a = disemvowel(prompt('Enter sentence'));
// alert(a)






// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }

//     return count
//   }

//   console.log(findOccurrences());





// function distance(){
//     var a = parseFloat(prompt('Enter distance between two cities in Km'));
//     function meter(){
//         var b = a*1000;
//         alert('Distance in meters is : ' + b)
//         return b
//     }
//     function feet(){
//         var c = a*3281;
//         alert('Distance in feet is : ' + c)
//         return c 
//     }
//     function inches(){
//         var d = a*39370;
//         alert('Distance in inches is : ' + d);
//         return d 
//     }
//     function centi(){
//         var e = a*100000;
//         alert('Distance in centimeter is : ' + e)
//         return e 
//     }
//     meter();
//     feet();
//     inches();
//     centi()
//     return a

// }
// var a = distance()
// console.log(a)





// function cash(){
//     var a = parseInt(prompt('Please Enter Amount for Withdraw : '));
//     document.write('You will have ' + Math.floor(a/100) + " hundred Notes and " + Math.floor((a%100)/50)+ " Fifty Notes and " + (((a%100)%50)/10)+ "Ten notes <br>" + "Remaining amount is : " + (((a%100)%50)%10)); 


// }
// cash()

//..........................chap 43 to 48.................................................

// function btn(){
//     alert(`lol`)
// }
//.....................q2......................
// function phone(){
//     alert("Sold Out")
// }
//..................q3......................

// function del(){
//         var btn = event.target.parentNode
//         console.log(btn)
//         btn.remove();
// }
        //....................q4..................
        // function changePic1() {
        //     document.getElementById("myImg").src ="https://th.bing.com/th/id/R.b8cfab742df2c562562ffcea645fc493?rik=Vj0ePxt1ktFQXg&pid=ImgRaw";
        //        }
        //       function changePic22(){
        //        document.getElementById("myImg").src = "https://th.bing.com/th/id/OIP.bJqhY7RPpgM8i9XBnJhiIwHaFh?pid=ImgDet&rs=1";
        //        }
  
 //......................q5....................................
 
//  var a = document.getElementById("heading")
//  var b = 0
//  a.innerHTML=b 
//  function count(){
//          b++
//          a.innerHTML=b
//  }

//  function count1(){
//          b--
//          a.innerHTML=b
//  }