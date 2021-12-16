function isInArray(array, value) {
    if (array.indexOf(value) === -1) {
        return false
    else {
        return true
    }
}

const blocked = ["https://github.com", "https://google.com"]

if (isInArray(blocked, window.location.href) === false) {
    replaceText(document.body)
}

function replaceText(element) {  
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
        element.parentElement.style.color = "black"
        element.parentElement.style.backgroundColor = "black"
        }
        if (element.textContent.match(/covid/gi)) {
            element.parentElement.style.color = "black"
            element.parentElement.style.backgroundColor = "black"
            }
        if (element.textContent.match(/covid-19/gi)) {
            element.parentElement.style.color = "black"
            element.parentElement.style.backgroundColor = "black"
            }
        element.textContent = element.textContent.replace(/coronavirus/gi, 'poopface')
        element.textContent = element.textContent.replace(/covid/gi, 'poopface')
        element.textContent = element.textContent.replace(/covid/gi, 'poopface')

    }
}
