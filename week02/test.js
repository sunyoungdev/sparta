function checkGeneration(age) {
    if (age > 120){
        alert('와 19세기에 태어나셨군요!')
    } else if (age >= 80){
        alret('80세 이상! 인생은 여든부터!')
    }  else {
        alert('젊으시군요!')
    }
}

checkGeneration();


function compare(a,b) {
    if (a > b) {
        return a
    } else if (a < b){
        return b
    } else {
        alert('같아요!');
    }
}

compare();

function isNotTwenty(num) {
    if (!(num >= 20 || num < 30)){
		return true;
	} else {
		return false;
	}
}

isNotTwenty();

function printTo(minNum) {
    for (let i = minNum; i >= 0; i--){
        console.log(i);
    }
}

function count딸기(list) {
    let count = 0;
    for (i = 0; i < list.length; i++){
        let fruit = list[i];
        if (fruit == '딸기'){
            count += 1;
        }
    }

    return count;
}

let fruitsBasket = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

count딸기(fruitsBasket);

function countFruit(fruitname, list) {
    let count = 0;
    for (i = 0; i < list.length; i++){
        let fruit = list[i];
        if (fruit == fruitname){
            count += 1;
        }
    }

    return count;
}
countFruit('포도',fruitsBasket);

function countUnderTwentyFive(cityAirList) {
    let count = 0;
    for (let i = 0; i < cityAirList.length; i++){
        let airInfo = cityAirList[i];
        let mise = airInfo['PM10'];
        if (mise < 25){
            count += 1;
        }
    }

    return count;
}

countUnderTwentyFive(cityAir);



let imgUrl = 'https://movie-phinf.pstatic.net/20181019_236/1539926790655oHv5z_JPEG/movie_image.jpg';
let linkUrl = 'https://naver.com/';
let title = '해리포터와 마법사의 돌 영화 정보';
let desc = '기사의 요약 내용이 들어갑니다. 해리 포터(다니엘 래드클리프 분)는 위압적인 버논 숙부(리챠드 그리피스 분)와 냉담한 이모 페투니아 (...';
let comment = '여기에 코멘트가 들어갑니다.';

// 주의: 홑따옴표(')가 아닌 backtick(`)으로 감싸야 합니다.
// Windows: 숫자 1번 키 왼쪽의 버튼을 누르면 backtick(`)이 입력됩니다.
// Mac : 영문으로 전환 후, ₩ 키를 누르면 됩니다.
// backtick을 사용하면 문자 중간에 Javascript 변수를 삽입할 수 있습니다.
let tempHtml = `<div class="card">
                    <img class="card-img-top"
                        src="${imgUrl}"
                        alt="Card image cap">
                    <div class="card-body">
                        <a href="${linkUrl}" class="card-title">${title}</a>
                        <p class="card-text">${desc}</p>
                        <p class="card-text comment">${comment}</p>
                    </div>
                </div>`;
$('#cards-box').append(tempHtml);

