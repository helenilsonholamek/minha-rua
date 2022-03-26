const inputCep = document.querySelector('#cep')
const BASE_API = 'https://brasilapi.com.br/api'

inputCep.onkeyup = async (evento) => {
    if (inputCep.value.length < 8) {
        return
    }

    const resposta = await fetch(`${BASE_API}/cep/v1/${inputCep.value}`, {
        method: 'GET',
    })

    const conteudoResposta = await resposta.json ()
    const rua = document.querySelector('#rua')
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#cidade')
    const uf = document.querySelector('#UF')

    console.log(conteudoResposta)

    // alert(`Cep Completo e o valor é: ${inputCep.value} e a cidde é: ${conteudoResposta.city} \n`)
    rua.value = conteudoResposta.street.toUpperCase()
    bairro.value = conteudoResposta.neighborhood.toUpperCase()
    uf.value = conteudoResposta.state.toUpperCase()
    cidade.value = conteudoResposta.city.toUpperCase()
}
