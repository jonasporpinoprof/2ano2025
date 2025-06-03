function atualizarTotal() {
      let totalGeral = 0;

      // Produto 1
      let preco1 = parseFloat(document.getElementById("preco_1").textContent);
      let qtd1 = parseInt(document.getElementById("qtd_1").value);
      let total1 = preco1 * qtd1;
      document.getElementById("total_1").textContent = formatarMoeda(total1);
      totalGeral += total1;

      // Produto 2
      let preco2 = parseFloat(document.getElementById("preco_2").textContent);
      let qtd2 = parseInt(document.getElementById("qtd_2").value);
      let total2 = preco2 * qtd2;
      document.getElementById("total_2").textContent = formatarMoeda(total2);
      totalGeral += total2;


      // Atualiza total geral
      document.getElementById("total_geral").textContent = formatarMoeda(totalGeral);
    }

    // Função auxiliar: formatarMoeda(valor)

    function formatarMoeda(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}