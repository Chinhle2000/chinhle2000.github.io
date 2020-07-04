$(document).ready(function(){


    $('#form-login').on('submit', function() {

        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        if( username != "" && password != "" ){

            window.location.replace('class.html')
            // $.ajax({
            //     url:'https://testapi.io/api/lechinh/LOGIN',
            //     type:'post',
            //     data:{
            //         username:username,
            //         password:password
            //     },
            //     success:function(response){
            //         var msg = "";
            //         if(response == 1){
            //             window.location.href = "class.html";
            //         }else{
            //             msg = "Invalid username and password!";
            //         }
            //         $("#message").html(msg);
            //     }
            // });
        }

        return false;

    })

});