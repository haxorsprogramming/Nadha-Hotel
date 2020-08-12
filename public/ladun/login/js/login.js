//inisialisasi
document.getElementById("txtUsername").focus();
//route 
const routeToLogin = server+'/prosesLogin';

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});


var app = new Vue({
    el: "#app",
    data: {
        appName: "Nadha Hotel"
    },
    methods: {
        loginAtc: function () {
            let username = document.getElementById('txtUsername').value;
            let password = document.getElementById('txtPassword').value;
            //request login
            $('#btnLogin').addClass('disabled');
            $.post(routeToLogin, {'username':username, 'password':password}, function(data){
                if(data.status === 'error'){
                    pesanUmumApp('warning', 'Login gagal!!', 'Upaya masuk gagal, periksa username & password..');
                    $('#btnLogin').removeClass('disabled');
                    document.getElementById("txtUsername").focus();
                }else{
                    
                }
            });
        }
    }
});

function pesanUmumApp(icon, title, text)
{
  Swal.fire({
    icon : icon,
    title : title,
    text : text
  });
}