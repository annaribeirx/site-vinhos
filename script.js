document.getElementById('ocasiao').addEventListener('change', function() {
    var ocasiao = this.value;
    var recomendacoesDiv = document.getElementById('recomendacoes');
    
    var recomendacoes = {
        jantar_romantico: [
            { nome: 'Cabernet Sauvignon', imagem: 'cabernet.jpg', preco: 'R$120,00' },
            { nome: 'Pinot Noir', imagem: 'pinot.jpg', preco: 'R$150,00' }
        ],
        celebracao_especial: [
            { nome: 'Champagne', imagem: 'champagne.jpg', preco: 'R$200,00' },
            { nome: 'Prosecco', imagem: 'https://cdn.dooca.store/1390/products/edv8er8xlnuseqoyzi3tejxaqryork0monha.png?v=1646414515.jpg', preco: 'R$180,00' }
        ],
        relaxar: [
            { nome: 'Gaja', imagem: 'gaja.jpg', preco: 'R$85,00' },
            { nome: "Graham's", imagem: 'graham.jpg', preco: 'R$275,00'}
        ],
        noite_com_amigos: [
            {nome: 'Beira Chardonnay', imagem: 'beira.png', preco: 'R$320,00'},
            {nome: "Castelo D'allba", imagem: 'castelo.jpg', preco: 'R$169,00'}
        ],
    };

    recomendacoesDiv.innerHTML = '';
    
    if (recomendacoes[ocasiao]) {
        recomendacoes[ocasiao].forEach(function(vinho) {
            var vinhoElemento = document.createElement('div');
            vinhoElemento.classList.add('vinho');
            vinhoElemento.innerHTML = `
                <img src="${vinho.imagem}" alt="${vinho.nome}">
                <h3>${vinho.nome}</h3>
                <p>Preço: ${vinho.preco}</p>
                <a href="#" class="carrinho">Adicionar ao Carrinho</a>
            `;
            recomendacoesDiv.appendChild(vinhoElemento);
        });
    }
});
