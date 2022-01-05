function checkAccount(){
    let acc = document.getElementById("account").value
    let pass = document.getElementById("pass").value
    if(acc === "admin" && pass === "123456" ){
        alert('Chào mừng bạn đến với trang baomoi.net')
        // document.getElementById("dangNhap").action = "index.html"
        window.location.href = 'form-login/login.html'
    }else {
        alert('Sai thông tin đăng nhập')
        document.getElementById("dangNhap").action = "login.html"
    }
}