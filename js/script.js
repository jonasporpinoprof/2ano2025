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

      // Produto 3
      let preco3 = parseFloat(document.getElementById("preco_3").textContent);
      let qtd3 = parseInt(document.getElementById("qtd_3").value);
      let total3 = preco3 * qtd3;
      document.getElementById("total_3").textContent = formatarMoeda(total3);
      totalGeral += total3;

       // Produto 4
      let preco4 = parseFloat(document.getElementById("preco_4").textContent);
      let qtd4 = parseInt(document.getElementById("qtd_4").value);
      let total4 = preco4 * qtd4;
      document.getElementById("total_4").textContent = formatarMoeda(total4);
      totalGeral += total4;


      // Atualiza total geral
      document.getElementById("total_geral").textContent = formatarMoeda(totalGeral);
    }

    // Função auxiliar: formatarMoeda(valor)

    function formatarMoeda(valor) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}