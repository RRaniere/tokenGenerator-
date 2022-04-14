const tokenNumber = document.getElementById("tokenNumber")
const progressBar = document.getElementById("progressBar")
const btnTokenCheck = document.getElementById("tokenCheck")
const tokenInput = document.getElementById("tokenInput")



btnTokenCheck.addEventListener('click', function(){
    tokenVerify()
})


function tokenVerify() {

    if (tokenInput.value == tokenNumber.textContent) {
        window.alert('Welcome')
    } else {
        window.alert('Token incorreto')
    }



}


function tokenGenerator() {
    const tokenChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var token = ''
    for (let i = 0; i < 6; i++) {
        token += tokenChars[getRandom()] ;
    }
    function getRandom() {
        return Math.floor(Math.random() * tokenChars.length)
    }
    tokenNumber.innerText = token
} 
window.addEventListener("DOMContentLoaded", function(){
    tokenGenerator()
    barProgress()
})
function barProgress() {  
    var interval = setInterval(scene, 600)
    var width = 1

    function scene() {
        if (width >= 100) {
            token = ''
            tokenGenerator()
            width = 0
        } else { 
            width++
            progressBar.style.width = width +'%'
        }
    }

}
