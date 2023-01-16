$(document).ready(function () {
    show_fortunetelling();
});

function show_fortunetelling() {
    $.ajax({
        type: "GET",
        url: "/fortunetelling",
        data: {},
        success: function (response) {
            let rows = response['allFortune']
            for (let i = 0; i < rows.length; i++) {
                let totalText = rows[i]['totalText']
                let year1 = rows[i]['yearsInfo'][0]['year']
                let year1_text = rows[i]['yearsInfo'][0][' yearText']
                let year2 = rows[i]['yearsInfo'][1]['year']
                let year2_text = rows[i]['yearsInfo'][1][' yearText']
                let year3 = rows[i]['yearsInfo'][2]['year']
                let year3_text = rows[i]['yearsInfo'][2][' yearText']
                let year4 = rows[i]['yearsInfo'][3]['year']
                let year4_text = rows[i]['yearsInfo'][3][' yearText']
                let year5 = rows[i]['yearsInfo'][4]['year']
                let year5_text = rows[i]['yearsInfo'][4][' yearText']

                let html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul class="year-box">
                                        <li><span class="year">${year1} :</span> ${year1_text}</li>
                                        <li><span class="year">${year2} :</span> ${year2_text}</li>
                                        <li><span class="year">${year3} :</span> ${year3_text}</li>
                                        <li><span class="year">${year4} :</span> ${year4_text}</li>
                                        <li><span class="year">${year5} :</span> ${year5_text}</li>                                      
                                     </ul>`
                switch (i) {
                    case 0:
                        $('#flush-collapseOne').append(html_temp)
                        break;
                    case 1:
                        $('#flush-collapseTwo').append(html_temp)
                        break;
                    case 2:
                        $('#flush-collapseThree').append(html_temp)
                        break;
                    case 3:
                        $('#flush-collapseFour').append(html_temp)
                        break;
                    case 4:
                        $('#flush-collapseFive').append(html_temp)
                        break;
                    case 5:
                        $('#flush-collapseSix').append(html_temp)
                        break;
                    case 6:
                        $('#flush-collapseSeven').append(html_temp)
                        break;
                    case 7:
                        $('#flush-collapseEight').append(html_temp)
                        break;
                    case 8:
                        $('#flush-collapseNine').append(html_temp)
                        break;
                    case 9:
                        $('#flush-collapseTen').append(html_temp)
                        break;
                    case 10:
                        $('#flush-collapseEleven').append(html_temp)
                        break;
                    case 11:
                        $('#flush-collapseTwelve').append(html_temp)
                        break;
                }
            }
        }
    });
}
