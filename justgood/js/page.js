let movies = [
    ["[좌충우돌금융센터] 0.예고편","https://youtu.be/VS4rbUm1Nso"],
    ["[좌충우돌금융센터] 1. 혐의거래의 향기","https://youtu.be/cD_ZoEd00HE"],
    ["[좌충우돌금융센터] 2. CTR점검 밸런스게임","https://youtu.be/hXtrLG7VqBs"],
    ["[좌충우돌금융센터] 3. PEPs 팩티바를 넘어라!","https://youtu.be/CUHgruQuw5M"],
    ["[좌충우돌금융센터] 4. 이대리의 서류단속","https://youtu.be/23sO4UmNZbg"],
    ["[좌충우돌금융센터] 5. 위험한 조회","https://youtu.be/62IGisfbHNU"],
    ["[좌충우돌금융센터] 6. 제공하고, 설명하고, 확인하라","https://youtu.be/KTnVlHmZpTA"],
    ["[좌충우돌금융센터] 7. 당신이 쉬는 사이에","https://youtu.be/iWAF1TNGA8U"],
    ["[좌충우돌금융센터] 8. 광고의 조건","https://youtu.be/gw5YFAX8YuE"],
    ["[좌충우돌금융센터] 9. 고발과 함께 사라지나","https://youtu.be/buMF1ufmOeQ"],
    ["[좌충우돌금융센터] 10. 투자의 공과 사","https://youtu.be/WwD6ovltkVY"]
];

$(document).ready(() => {
    $(movies).each((idx, e) => {
        let image_num = (idx.toString()).padStart(2, 0)
        $('#list').append(`<li><a href='${e[1]}'><img src='images/hana${image_num}.jpg'>${e[0]}</a></li>`);
    });
    $('img').each(e => {
        $(e).on('error', () => {
            $(e).hide();
        });
    });
});