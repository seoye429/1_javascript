//Operrators 연산자(연산기호)
//1)거듭제곱 **
let x=10;
x**=5;  // x를 5번 곱한다느뜻

//2)나눈 나머지는 %
let q=12;
q%=5;

document.getElementById("one").innerHTML=
"1)번 거듭제곱에 값"+ x +"<br/>"+
"2)번 나눈 나머지의 값은"+q+"<br/>";

//---------------------------------------------------------
//비교연산자:true,false
let num1=1; //순수한 숫자
let num2="1"; //문자열숫자
let result=num1==num2;  //출력값:ture
let result2=num1===num2; //출력값:false
let num3=10;
let num4=3;
let result3=num4>num3;

document.getElementById("two").innerHTML=
"타입을 고려하지 않는 같음에 결과 값은" + result + "<br/>"+
"타입까지 고려하여 엄격하게 같음" + result2 + "<br/>"+
"변수에 수를 비교할때 " + result3 + "<br/>";

//-------------------------------------------------------------------
//3) Logical oprerators:논리연산사
let w=6;
let e=3;

document.getElementById("three").innerHTML=
" &&는 and그리고 여서 두개의 조건이 일치해야 true" + "<br/>"+
"(w<10 && e>1)는" + (w<10 && e>1) + "입니다 "+ "<br/>"+
"(w<10 && e<1)는" + (w<10 && e<1) + "입니다 " + "<br/>"+
"(w==10 || e==1)는" + (w==10 || e==1) +"입니다" +"<br/>"+
"(w<10 || e==1)는" + (w<10 || e==1) +"입니다"+"<br/>"+
"!(w===e)는 " + !(w===e) + "입니다"+"<br/>"+
"!(w>e)는 " + !(w>e) + "입니다"
;




