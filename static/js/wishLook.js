$(document).ready(function () {
    show_wishes();
});

function show_wishes() {
    $('#wishlist').empty()
    $.ajax({
        type: "GET",
        url: "/wish/look",
        data: {},
        success: function (response) {
            let rows = JSON.parse(response['wish_list'])
            for (let i = 0; i < rows.length; i++) {
                let nickname = rows[i]["nickName"]
                let content = rows[i]["wish"]
                let likeCount = rows[i]["likeCount"]
                let id = rows[i]["_id"]["$oid"]
                // console.log(nickname, content, likeCount, id)
                let temp_html = `<li class="list-group-item bg-transparent border-color-white">
                                    <div class="wish-nickname">${nickname}</div>
                                    <div class="wish-area">
                                        <span class="wish-content">${content}</span>
                                        <span class="like-button"><button type="button" class="btn btn-outline-light" onclick="save_like('${id}')">좋아요 ${likeCount}</button></span>
                                    </div>
                                </li>`

                $('#wishlist').append(temp_html)
            }
        }
    });
}

function save_like(id) {
    $.ajax({
        type: "POST",
        url: "/wish/like",
        data: {id_give: id},
        success: function (response) {
            if(response["status"] == '200') {
                alert("좋아요 등록 완료!")
            }
            window.location.reload()
        }
    });
}
