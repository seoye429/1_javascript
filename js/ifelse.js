const time = new Date().getHours();
//상수 시간 = 데이트 객체를 얻고 거기서 시간을 얻어옵니다
let greeting; //let은 재선언 재할당이 금지
if (time < 10){
    greeting = "굿모닝"
}else if(time < 20){
    greeting = "비가 오는 날이에요"
}else{
    greeting = "학원 끝나고 좋은밤"
}
document.getElementById("con").innerHTML = greeting;

let text;
if(Math.random() < 0.5){
    text = "전 0.5보다 작아요"
}else{
    text = "<a href='http://youtube.com'>유튜브</a>";
}
document.getElementById('txt').innerHTML = text;

let day;
switch (new Date().getDay()){
    case 0:
        day="일요일"
        break;
    case 1:
        day="월요일"
        break;
    case 4:
        day="목요일"
        break;
    case 6:
        day="토요일"
        break;
    default : 
        day = "오늘은 아마도 화요일 인것 같아요"
}
document.getElementById("day").innerHTML = day;