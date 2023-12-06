let page_title = "하나은행 내부통제교육 [좌충우돌금융센터 시즌2] 이번엔 윤리강령!!"
let movies = [
    ["[좌충우돌금융센터 시즌2] 0. 예고편","https://youtu.be/fuSV-qyWSeI"],
    ["[좌충우돌금융센터 시즌2] 1. 서류 뒤에 전산있다","https://youtu.be/DC9wekOntp0"],
    ["[좌충우돌금융센터 시즌2] 2. 부당지시","https://youtu.be/u3vEJYJb9h0"],
    ["[좌충우돌금융센터 시즌2] 3. 비밀 아닌 비밀","https://youtu.be/iZK2cg-LJSw"],
    ["[좌충우돌금융센터 시즌2] 4. 은밀한 거래","https://youtu.be/fp-ikHxoxfI"],
    ["[좌충우돌금융센터 시즌2] 5. 실사의 추억","https://youtu.be/ZyJAeB_tVLQ"],
    ["[좌충우돌금융센터 시즌2] 6. 법원 우편물, 시한폭탄이 되다","https://youtu.be/h7m159ZkNcE"],
    ["[좌충우돌금융센터 시즌2] 7. 아주 사적인 메신저","https://youtu.be/UPhUiqGnNwk"],
    ["[좌충우돌금융센터 시즌2] 8. 비밀경비구역 STR","https://youtu.be/2HOMOkyZKFs"],
    ["[좌충우돌금융센터 시즌2] 9. 의심되면 다시 보고","https://youtu.be/M6xpVFo5ZuE"]    
];

$().ready(() => {
    document.title = page_title;
    $('h1').text(page_title);

    $(movies).each((idx, e) => {
        let image_num = (idx.toString()).padStart(2, 0)
        $('ul').append(`<li><a href='${e[1]}'><img src='images/hana.s2.${image_num}.jpg'>${e[0]}</a></li>`);
    });
    $('img').each(e => {
        $(e).on('error', () => {
            $(e).hide();
        });
    });
});
