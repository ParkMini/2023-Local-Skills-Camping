// 날짜 얻기 JS (d = new Date())
function customGetDate2(d = null) {
    d = d ? d : new Date();

    return {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
    }
}

// 5초마다 실행
function aj() {
    console.log('date: ', new Date());
}

setInterval(()=>{
    aj();
}, 5000);

// 주말 구분하기
const d = new Date();
const today = d.getDay(); // 오늘 요일을 저장
const price1 = 10000; // 주중 요금
const price2 = 20000; // 주말 요금
if(today === 0 || today === 6) { // 주말일 경우
    console.log('주말 요금 : ', price2);
} else { // 주중일 경우
    console.log('주중 요금 : ', price1);
}