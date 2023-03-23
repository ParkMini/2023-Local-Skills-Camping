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