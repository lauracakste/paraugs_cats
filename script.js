//console.log(1)
function sutitZinu()
{
    console.log('sutitZin()darbojas');
    let zina = document.querySelector('zina').value;
    let zinas = document.querySelector('cataZina');
    zinas.innerHTML = zinas.innerHTML+ '<br>' +zina.value;
}