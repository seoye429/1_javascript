class Car{ //주의사항 : 인수는 파라미터 항목에 맞는 수로 사용
    constructor(name, brand,year){
        this.name = name;
        this.bran = brand;
        this.year = year;
    }
    age(x){ //시간을 불러와야함(현재시간을 불러와서 빼야함)
        return x - this.year;
    }
}

const myCar = new Car ("자전거","삼천리",2000); //new로 새로운 객체를 등록할 때 위의 constructor의 수와 맞게하기
const yourCar = new Car("그냥 걷기","mommy",2002);

//현재시간 구하기
const date = new Date(); //시간은 참조할 뿐 가공할 수 없음
let year = date.getFullYear(); //변수 year에 현재년도를 대입

document.getElementById("in").innerHTML =
"내가 산 차는 " + myCar.age(year) + " 년이 지났어요" + "</br>";
