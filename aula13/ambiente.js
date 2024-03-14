function enquanto() {
    
    let c = 1
    let tn1 = window.document.querySelector('input#txtn1')
    let n1 = Number(tn1.value)
    while (c <= n1) {
        res.innerHTML += `<p> > Iteração <strong>${c}</strong></p>`
        c++
    }
}
function facaEnquanto() { 
    let c = 1
    let tn2 = window.document.querySelector('input#txtn2')
    let n2 = Number(tn2.value)
    do {
        res.innerHTML += `<p> > Iteração <strong>${c}</strong></p>`
        c++
    } while(c <= n2)
}

