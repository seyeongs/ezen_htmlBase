function calc(){
    var currentYear = 2022;
    var birthYear = prompt("태어난 연도를 입력하세요","yyyy");
    var age = currentYear-birthYear+1;
    var result;
    if(isNaN(birthYear)){
        result="<h2>입력값 오류</h2>"
    }else{
        result = "<h2>당신의 나이는 " + age + "세입니다.</h2>";
    }
    document.querySelector("#result").innerHTML = result;
}