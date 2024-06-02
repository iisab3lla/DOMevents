//RECEITAS
const valorBase = document.getElementById('valor_base');
const valorTransporte = document.getElementById('valor_transporte');
const valorAlimentacao = document.getElementById('valor_alimentacao');
const receitaTotal = document.getElementById('valor_receita');

//DESCONTOS
const descontoAutomovel = document.getElementById('valor_automovel');
const descontoFaltas = document.getElementById('faltas');
const totalD= document.getElementById('valor_descontos');

//TOTAL
const valorTotal = document.getElementById('valor_total');


function calcular() {

    // VALOR RECEITAS
    const valueValorBase = Number(valorBase.value);
    const valueValorTransporte = Number(valorTransporte.value);
    const valueValorAlimentacao = Number(valorAlimentacao.value);

    let total = valueValorBase + valueValorTransporte + valueValorAlimentacao;

    receitaTotal.disabled = false;
    
    receitaTotal.value = total

    receitaTotal.disabled = true;

    // VALOR DESCONTOS
    const valorDescontoA = Number(descontoAutomovel.value);
    const valorDescontoF = Number(descontoFaltas.value);

    let totalDesconto = valorDescontoA + valorDescontoF;

    totalD.disabled = false;
    
    totalD.value = totalDesconto

    totalD.disabled = true;

    // VALOR TOTAL FINAL

    let valorFinal = total - totalDesconto;

    valorTotal.disabled = false;
    
    valorTotal.value = valorFinal;

    valorTotal.disabled = true;


    console.log(total);
    console.log(totalDesconto);
}