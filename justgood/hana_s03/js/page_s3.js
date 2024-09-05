let page_title = "이제 바뀌는 중입니다 (하나금융그룹 윤리강령 Core7)"
let movies = [
    ["EP01. 언제나 최우선은 손님입니다.","https://youtu.be/VoAFrTq20xM"],
    ["EP02. 차별! 다양성과의 이별","https://youtu.be/pEVuTQqeafU"],
    ["EP03. 성희롱과 괴롭힘 이젠 OUT","https://youtu.be/H04o3iT37tg"],
    ["EP04. 소통으로 통하고 배려로 더하라","https://youtu.be/aqyPjehA_YM"],
    ["EP05. 금풍과 향응, 거리가 멀수록 좋습니다","https://youtu.be/4Yp4dr71sfQ"],
    ["EP06. 어디서나 공사구분, 말조심","https://youtu.be/IPpF9zpxii0"]
];

$().ready(() => {
    // title 및 meta.title 문자열은 직접 html 변경 필요
    //document.title = page_title;
    $('h1').text(page_title);

    $(movies).each((idx, e) => {
        let image_num = idx + 1;
        image_num = (image_num.toString()).padStart(2, 0);
        $('ul').append(`<li><a href='${e[1]}'><img src='images/hana.s3.${image_num}.jpg'><h2>${e[0]}</h2></a></li>`);
    });
    $('img').each(e => {
        try {
            $(e).on('error', () => {
                $(e).hide();
            });
        } catch(e) {

        }
    });
});
