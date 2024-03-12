type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}
type Endereco={
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type NovoCarrinho = Omit<Carrinho,'tipoTransacao'> &{
    endereco: Endereco,
    tipoTransacao : Lowercase<'credito' | 'Debito'>
}

const venda: NovoCarrinho={
    item : {
        nome: 'string',
        descricao: 'string',
        valor: 25
    },
    qtd: 8,
    desconto: 10,
    frete: 9,
    tipoTransacao:  'debito',
    cartao:{ numero: 88788778,
        validade: 'string',
        nome: 'string',
        cvv: 159

    },
    endereco : {cep: 'string',
    rua: 'string',
    bairro: 'string',
    cidade: 'string',
    estado: 'string'}


}