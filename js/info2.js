

$(document).ready(function () {
    //Tai du lieu tu server
    $.ajax({
        url: 'https://testapi.io/api/lechinh/LICHSUHOATDONG',
        type: 'GET',
        success: function (result) {
            //In ra de xem
            console.log(result);
            //Duyet du lieu tra ve
            for (var i = 0; i < result.length; i++) {
                //Xay dung chuoi cau truc dong cua table (tr -> td)
                var tr = '<tr>';
                var td = '<td>' + result[i].thoigian + '</td>';
                td += "<td>" + result[i].thongso + "</td>"
                tr += td + '</tr>';
                //Them noi dung dung moi vao bang
                $('tbody').append(tr);

            }
            //An vong xoay
            $('#spinner').hide();
        }
    });

});

function chitiet(username) {
    console.log(username);
}
