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
            let rows = response['wish_list']
            for (let i = 0; i < rows.length; i++) {
                let nickname = rows[i]["nickName"]
                let content = rows[i]["wish"]

                let temp_html = `<li class="list-group-item">
                                    <div class="wish-nickname">${nickname}</div>
                                    <div class="wish-content">${content}</div>
                                </li>`

                $('#wishlist').append(temp_html)
            }
        }
    });
}
