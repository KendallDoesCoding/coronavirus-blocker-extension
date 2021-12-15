const blocked = ["https://github.com", "https://google.com"]

if (!blocked.contains(window.location.href)) {
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
