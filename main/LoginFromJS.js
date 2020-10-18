// <script>
// function displayResult() {
//     document.getElementById("myHeader").innerHTML = "Have a nice day!";
// }
// </script>




function btnOnLogin() {

    let userName = document.getElementById("txtUserName").value;
    let passWord = document.getElementById("txtPassWord").value;
    let b = validate(userName,passWord);
    if (b){
    // if (userName === "admin" && passWord === "1234") {
        console.log("user Name Success");
        // window.open("http://google.com");
        window.open(location.href = "./main/MainForm.html")
        // document.getElementById("testingTag").innerHTML = "HI HI HI";
    } else {
        console.log("fuck");
        alert('something went Wrong!');
    }
}

function validate(userName,passWord ) {
    if (userName === "admin" && passWord === "1234") {
        console.log("user Name Success");
        return true;
    } else {
        console.log("fuck");
        return false;
    }
}

// alert("testing alert");
// console.log('hello world')