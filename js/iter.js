const name="ABCDEFGHIJKLMN"    //1) 상수네임=문자열

let text=""  //상수를 활용하기 위해서 변수를 만든다  //비여진 값을 대입합니다.

for(const x of name){
    text+=x+"<br>";   //변수 개별에 줄바꿈 태그를 더해서     //+=비여진 상테에다 더한다 라는 뜻,기존에 있는 값에 더해서 다시 저장해줘라는 뜻
}

// document.write(text): 상수name이 순서대로 줄바꿈해서 출력됨

document.getElementById("one").innerHTML=text;

//-----------------------------------------------------------------------------------------------------

//2) Set는 중복을 허용하지 않음 ,그래서 출럭값: a,b.c만 나옴
const letter=new Set(["a","a","b","c"]);  //const 재선언 재할당 금지 시킴

let txt="";
for (const q of letter){
    txt+=q+"<br>";
}

// document.write=txt;

document.getElementById("two").innerHTML=txt;

//----------------------------------------------------------------------------------

//3) 키와 밸류=>란 map
const fruits=new Map([ //[]->브라켓이라고 함
    ["apples",1000],  //[key,value]
    ["bnana",500],
    ["orange",200]
]);

let nums=fruits.get("orange");

document.getElementById("three").innerHTML="지금 창고에는"+nums+"개의 오렌지가 있습니다";



