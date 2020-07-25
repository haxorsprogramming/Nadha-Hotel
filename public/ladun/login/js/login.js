//inisialisasi
document.getElementById("txtUsername").focus();

$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

var app = new Vue({
    el: "#app",
    data: {
        appName: "NadhaResto",
        username : '',
        password : ''
    },
    methods: {
        loginAtc: function () {
            this.username = document.getElementById('txtUsername').value;
            this.password = document.getElementById('txtPassword').value;
            //request login
            $('#btnLogin').addClass('disabled');
            axios.post("/prosesLogin", {username : this.username, password : this.password}).then(function(response){
                let obj = response.data; 
                console.log(obj);
                if(obj.status === 'success'){
                    setTimeout(function(){window.location.assign('/dashboard');}, 800);
                }else{
                    pesanUmumApp('error', 'Gagal', 'Login gagal, periksa kembali username & password anda!!!');
                    $('#btnLogin').removeClass('disabled');
                }
            }).catch(function (error) {
                console.log(error);
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