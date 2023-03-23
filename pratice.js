// 날짜 얻기 JS (d = new Date())
function customGetDate2(d = null) {
  d = d ? d : new Date();

  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
  };
}

// 5초마다 실행
function aj() {
  console.log("date: ", new Date());
}

setInterval(() => {
  aj();
}, 5000);

// 주말 구분하기
const d = new Date();
const today = d.getDay(); // 오늘 요일을 저장
const price1 = 10000; // 주중 요금
const price2 = 20000; // 주말 요금
if (today === 0 || today === 6) {
  // 주말일 경우
  console.log("주말 요금 : ", price2);
} else {
  // 주중일 경우
  console.log("주중 요금 : ", price1);
}

// 중복 예약 확인
const data = [
  {
    id: 1,
    date: "2023-03-23",
  },
  {
    id: 2,
    date: "2023-03-23",
  },
  {
    id: 3,
    date: "2023-03-25",
  }
];

const chooseDate = new Date('2023-03-23');
data.forEach((schedule) => {
    const d = customGetDate2(schedule.date);
    const d2 = customGetDate2(chooseDate);
    if(`${d.year}-${d.month}-${d.day}` === `${d2.year}-${d2.month}-${d2.day}`) {
        console.log('이미 예약 됨 : ', schedule.id);
    }
})

// 전화번호 - 구분
// 정규 표현식을 쓰거나 배열을 사용해서 하나하나 비교 해보기