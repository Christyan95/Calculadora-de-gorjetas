function calcularTipo(event) {
    event.preventDefault();

    let conta = document.getElementById('conta').value;
    let serviço = document.getElementById('serviço').value;
    let pessoas = document.getElementById('pessoas').value;

    if(conta == '' || serviço == '')
    {
        alert('Por favor, preencha os valores')
        return;
    }

    if(pessoas == '' || pessoas <= 1)
    {
        pessoas = 1;
        document.getElementById('cada').style.display = "none";
    } else
    {
        document.getElementById('cada').style.display = "block";
    }

    let totalConta = (conta * serviço) / pessoas;
    totalConta = totalConta.toFixed(2);

    document.getElementById('tipo').innerHTML = totalConta;
    document.getElementById('total').style.display = "block";
}

document.getElementById('total').style.display = "none";
document.getElementById('cada').style.display = "none";

document.getElementById('form').addEventListener('submit', calcularTipo);