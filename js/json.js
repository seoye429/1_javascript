let text = '{"emp":[' +
'{"firstName":"young","lastName":"hwang"}]}'

const obj = JSON.parse(text);
//json을 자바스크립트 형식에 맞게 파싱
document.getElementById("json").innerHTML =
obj.emp[0].firstName + " " +obj.emp[0].lastName;