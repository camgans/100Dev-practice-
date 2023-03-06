// 
// 0 -> 32

document.querySelector('#check').addEventListener('click', convert)

function convert() {

    //need value that is celsius
    let temp = document.querySelector('#temperature').value
    //convert from celsius to fahrenheight
    temp = temp * 9/5 + 32
    //show the result
    document.querySelector('#placeToSee').innerHTML = temp
}
