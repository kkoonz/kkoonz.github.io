let page_title = "LG전자 데이터로 일하는 리더 교육"
let movies = [
    ["[데.일.리. 인터뷰] 0. 예고편","https://youtu.be/QtyDRq80fos"],
    ["[데.일.리. 인터뷰] 1. 데.일.리 상담소(1/2)","https://youtu.be/03mOhVP5InY"],
    ["[데.일.리. 인터뷰] 2. 데.일.리 상담소(2/2)","https://youtu.be/QZ1eFInLDVc"],
    ["[데.일.리. 드라마] the 데이터 0. 예고편","https://youtu.be/2GYCAeDmDG8"],
    ["[데.일.리. 드라마] the 데이터 1. 데이터로 일 안할거야?","https://youtu.be/iO982ENuxZU"],
    ["[데.일.리. 드라마] the 데이터 2. 일잘러가 되려면","https://youtu.be/2R666OhofSU"],
    ["[데.일.리. 드라마] the 데이터 3. 리부트 데.일.리.","https://youtu.be/JJ-ymd_ojq4"] 
];

$().ready(() => {
    document.title = page_title;
    $('h1').text(page_title);

    $(movies).each((idx, e) => {
        // let image_num = (idx.toString()).padStart(2, 0)
        let image_num = idx.toString()
        $('ul').append(`<li><a href='${e[1]}'><img src='images/${image_num}.jpg'>${e[0]}</a></li>`);
    });
    $('img').each(e => {
        $(e).on('error', () => {
            $(e).hide();
        });
    });
});