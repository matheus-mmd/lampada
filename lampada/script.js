
function on() {
    document.getElementById('lampada').innerHTML = '<img src="../img/on.png" alt=""></img>'
}

function off() {
    document.getElementById('lampada').innerHTML = '<img src="../img/off.png" alt=""></img>'
}

function piscar() {

    setTimeout(() => {
        document.getElementById('lampada').innerHTML = '<img src="../img/on.png" alt=""></img>'
    }, 200)
    setTimeout(() => {
        document.getElementById('lampada').innerHTML = '<img src="../img/off.png" alt=""></img>'
    }, 2000)
    

}