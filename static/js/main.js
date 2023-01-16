$(document).ready(function () {

});

function save_wish() {
    let nickname = $('#nickname-input').val()
    let comment = $('#comment-input').val()
    console.log(nickname, comment)

    $.ajax({
        type: "POST",
        url: "/wish/regist",
        data: {nickname_give: nickname, wish_give: comment},
        success: function (response) {
            if(response["status"] == '200') {
                alert("소원 빌기 완료!")
                window.location.replace('/wish-look-page')
            } else if (response["status"] == '400') {
                alert("닉네임 또는 소원을 꼭 입력해주세요!")
                window.location.reload()
            }
        }
    });
}
