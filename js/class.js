$(document).ready(function () {
    //Tai du lieu tu server
    $.ajax({
        url: 'https://testapi.io/api/lechinh/DANHSACHLOPHOC',
        type: 'GET',
        success: function (result) {
            
            for(let i = 0; i < result.length; i++) {

                let html = '<div class="col-md-3"><div class="card"><img class="card-img-top" src="' + result[i].anh + '"><div class="card-body"><h4 class="card-title">'+ result[i].ten +'</h4><p class="card-text">Sỉ số: ' + result[i].siso + '</p><p class="card-text">Số sinh viên FA: ' + result[i].fa + '</p><a href="#" class="btn btn-outline-secondary" id="more">See More</a></div></div></div>';

                $('.class-list').append(html)

            }
            

        }
    });

    $(document).on('click', '#more', function() {
        window.location.href="infomation.html"
    })
});



