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
            console.log(rows)
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

                console.log(year1, year1_text)
                let html_temp = ``
                switch (i) {
                    case 0:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseOne').append(html_temp)
                        break;
                    case 1:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseTwo').append(html_temp)
                        break;
                    case 2:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseThree').append(html_temp)
                        break;
                    case 3:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseFour').append(html_temp)
                        break;
                    case 4:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseFive').append(html_temp)
                        break;
                    case 5:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseSix').append(html_temp)
                        break;
                    case 6:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseSeven').append(html_temp)
                        break;
                    case 7:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseEight').append(html_temp)
                        break;
                    case 8:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseNine').append(html_temp)
                        break;
                    case 9:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseTen').append(html_temp)
                        break;
                    case 10:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseEleven').append(html_temp)
                        break;
                    case 11:
                        html_temp = `<div class="accordion-body">${totalText}</div>
                                     <ul>
                                        <li>${year1} : ${year1_text}</li>
                                        <li>${year2} : ${year2_text}</li>
                                        <li>${year3} : ${year3_text}</li>
                                        <li>${year4} : ${year4_text}</li>
                                        <li>${year5} : ${year5_text}</li>                                      
                                     </ul>`
                        $('#flush-collapseTwelve').append(html_temp)
                        break;
                }
            }
        }
    });
}
