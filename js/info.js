var host = 'https://testapi.io/api/lechinh/DANHSACHSINHVIEN?fbclid=IwAR0OPMBMtE1KLSoJHDR2zv0Glm-Kf9AAla6Eu3p8zW9HrRDvxqXHjOFVeTg';
// var result1;

$(document).ready(function () {
    //Tai du lieu tu server
    $.ajax({
        url: 'https://testapi.io/api/lechinh/DANHSACHSINHVIEN?fbclid=IwAR0OPMBMtE1KLSoJHDR2zv0Glm-Kf9AAla6Eu3p8zW9HrRDvxqXHjOFVeTg',
        type: 'GET',
        success: function (result) {
            //In ra de xem
            console.log(result);
            //Duyet du lieu tra ve
            for (var i = 0; i < result.length; i++) {
                //Xay dung chuoi cau truc dong cua table (tr -> td)
                var tr = '<tr>';
                var td = '<td>' + result[i].id + '</td>';
                td += "<td>" + result[i].mssv + "</td>"
                td += '<td>' + result[i].hoten + '</td>'
                td += '<td>' + result[i].lop + '</td>'
                td += '<td>' + result[i].toan + '</td>'
                td += '<td>' + result[i].ly + '</td>'
                td += '<td>' + result[i].hoa + '</td>'
                td += '<td>' + ' <button class="btn-primary chitiet"id="chitiet">Chi tiet</button>' + '</td>'
                tr += td + '</tr>';
                //Them noi dung dung moi vao bang 
                $('tbody').append(tr);

            }
            //An vong xoay
            $('#spinner').hide();
        }
    });


    $(document).on('click', '#chitiet', function() {
        window.location.href="info.html"
    })
});

function chitiet(username) {
    console.log(username);
}
