var handlerLogin = document.querySelector(".user-login");
var handlerOnWindowLogin = document.querySelector(".user");
var handlerOverlay = document.querySelector(".addoverlay");
var logGinAccount = document.querySelector("#button-login-account");
var creatNewAccount = document.querySelector("#button-create-account");
var displayPassWord = document.querySelector(".script-display-password");
var turnOnNewAccoun =document.querySelector(".script-new-account");
var turnOfLogin = document.querySelector(".script-login-user");
handlerLogin.addEventListener("click", function () {
  handlerOnWindowLogin.classList.add("script-on-window-input");
  handlerOverlay.classList.add("on-overlay");
  logGinAccount.classList.add("login-background-color");
});
creatNewAccount.addEventListener("click", function () {
  creatNewAccount.classList.add("login-background-color");
  logGinAccount.classList.remove("login-background-color");
  turnOnNewAccoun.classList.remove("turn-of-new-account");
  turnOfLogin.classList.add("turn-of-new-account");
});

logGinAccount.addEventListener("click", function () {
  logGinAccount.classList.add("login-background-color");
  creatNewAccount.classList.remove("login-background-color");
  turnOfLogin.classList.remove("turn-of-new-account");
  turnOnNewAccoun.classList.add("turn-of-new-account");
});

handlerOverlay.addEventListener("click", function () {
  handlerOnWindowLogin.classList.remove("script-on-window-input");
  handlerOverlay.classList.remove("on-overlay");
});
// 1
var seenPassWord = document.querySelector("#seen-password");
var displayPassword = document.querySelector(".script-display-password");
displayPassWord.addEventListener("click", function () {
  displayPassWord.classList.add("none-password");
  nonePassWord.classList.remove("none-password");
  seenPassWord.type = "text";
});

var nonePassWord = document.querySelector(".script-display-none-password");
nonePassWord.addEventListener("click", function () {
  nonePassWord.classList.add("none-password");
  displayPassWord.classList.remove("none-password");

  seenPassWord.type = "password";
});
// 1

var inputEmail = document.querySelector(".script-input-email");
var inputPassword = document.querySelector(".script-input-password");
var messageInputError = document.querySelector(".script-message-input-email");
var correctFormatEmail = document.querySelector(".script-correct-format-email");
var messageInputPassword = document.querySelector(".script-message-input-password");
var buttonLogin = document.querySelector(".script-begin-login");
var check = false;
var handlerEmail = function(){
  if (inputEmail.value !== "@gmail.com"&&inputPassword.value==="") {
    correctFormatEmail.classList.add("display-error");
    correctFormatEmail.classList.remove("correct-format-email");
    messageInputError.classList.add("correct-format-email");
    messageInputError.classList.remove("display-error");
    //<boder 
    inputEmail.classList.add("boder-input");
    inputPassword.classList.add("boder-input");
    //>
    // thong bao nhap cua password
    messageInputPassword.classList.add("display-error");
    messageInputPassword.classList.remove("correct-format-email");
    //>
  }
   if (inputEmail.value === "") {
    correctFormatEmail.classList.add("correct-format-email");
    correctFormatEmail.classList.remove("display-error");
    
    messageInputError.classList.remove("correct-format-email");
    messageInputError.classList.add("display-error");

    

  }else if (inputEmail.value.includes("@gmail.com")) {
    correctFormatEmail.classList.add("correct-format-email");
    correctFormatEmail.classList.remove("display-error");
    inputEmail.classList.add("boder-input");
    inputEmail.classList.remove("boder-input");
  } 
 if(inputPassword.value===""&&inputEmail!==""){
  messageInputPassword.classList.add("display-error");
  messageInputPassword.classList.remove("correct-format-email");
  inputPassword.classList.add("boder-input");
 }else if(inputPassword.value&&inputEmail!==""){
  messageInputPassword.classList.remove("display-error");
  messageInputPassword.classList.add("correct-format-email");
  inputPassword.classList.remove("boder-input");
  inputEmail.classList.add("boder-input");
  correctFormatEmail.classList.add(".display-error")
  correctFormatEmail.classList.add("display-error");
 
 }
if(inputEmail.value.includes("@gmail.com")&&inputPassword.value){
  messageInputPassword.classList.remove("display-error");
  messageInputPassword.classList.add("correct-format-email");
  inputPassword.classList.remove("boder-input");
  correctFormatEmail.classList.remove("correct-format-email");
    correctFormatEmail.classList.add("display-error");
    inputEmail.classList.add("boder-input");
    inputEmail.classList.remove("boder-input");
    messageInputError.classList.remove("display-error");
    correctFormatEmail.classList.remove("display-error");
    correctFormatEmail.classList.add("correct-format-email");
    check=true;
}
}
var Successfullogin = document.querySelector(".scrip-successful-login");
buttonLogin.addEventListener("click",function(){
  if(check){
Successfullogin.classList.add("successful-login-color");
  Successfullogin.classList.remove("successful-login");
  } 
})


inputEmail.addEventListener("input",handlerEmail);
inputEmail.addEventListener("blur",handlerEmail);
inputPassword.addEventListener("blur",handlerEmail);
inputPassword.addEventListener("input",handlerEmail)
buttonLogin.addEventListener("click",handlerEmail);