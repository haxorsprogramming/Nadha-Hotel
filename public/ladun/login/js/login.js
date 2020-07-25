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
            axios.post("/prosesLogin", {username : this.username, password : this.password}).then(function (response){
                let obj = response.data; 
                console.log(obj);
            }).catch(function (error) {
                console.log(error);
            });

        }
    }
});
