var inputEl = document.getElementsByClassName('input-field')[0]
var iconEl = document.getElementsByClassName('icon-error')[0]
var btnEl = document.getElementsByTagName('button')[0]
var txtEl = document.getElementsByClassName('error-text')[0]


function validateInput() {
    var inputVal = inputEl.value
    if (/@/.test(inputVal) && /.com/.test(inputVal)) {
        inputEl.style.border = '2px solid hsl(0, 36%, 70%)'
        iconEl.style.visibility = 'hidden'
        txtEl.style.visibility = 'hidden'
    } else {
        inputEl.style.border = '2px solid hsl(0, 93%, 68%)'
        iconEl.style.visibility = 'visible'
        txtEl.style.visibility = 'visible'
    }
}


btnEl.addEventListener('click', validateInput)