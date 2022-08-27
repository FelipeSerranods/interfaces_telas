function inserir(){
    var nomeMaquina = String(document.getElementById('nome').value)
    var nomeFabricante = String(document.getElementById('nomefabr').value)
    var comandoMaquina = Number(document.getElementById('comando').value)
    var potenciaMaquina = Number(document.getElementById('potencia').value)
    var horasligadas = document.getElementById('horas').value
    
    var tr = document.createElement('tr')
    
    var td1 = tr.appendChild(document.createElement('td'))
    var td2 = tr.appendChild(document.createElement('td'))
    var td3 = tr.appendChild(document.createElement('td'))
    var td4 = tr.appendChild(document.createElement('td'))
    var td5 = tr.appendChild(document.createElement('td'))

    td1.innerHTML = nomeMaquina
    td2.innerHTML = nomeFabricante
    td3.innerHTML = comandoMaquina
    td4.innerHTML = potenciaMaquina
    td5.innerHTML = horasligadas
    document.getElementById("tabela").appendChild(tr)
}
