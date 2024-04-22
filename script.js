//console.log(1)
    let zina = document.querySelector('zina').value;
    let zinas = document.querySelector('cataZina');

function sutitZinu()
{
    console.log('sutitZin()darbojas');
    zinas.innerHTML = zinas.innerHTML+ '<br>' +zina.value;
}
function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati =await datiNoServera.text;
}