let inputTexto = document.querySelector(".input-texto");
let traducaoTexto = document.querySelector(".traducao");
let idioma = document.querySelector(".idioma");

async function traduzir() {

    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt-BR|"
        + idioma.value

    let resposta = await fetch(endereco)

    let dados = await resposta.json()

    traducaoTexto.textContent = dados.responseData.translatedText
}

function ouvirVoz() {
    // Ferramenta de transcrição de audio //
    let voz = window.webkitSpeechRecognition

    // Deixando a ferramenta pronta para uso //
    let reconhecimentoVoz = new voz()

    // Configurando a ferramenta para ouvir //
    reconhecimentoVoz.lang = "pt-BR"

    // Me avisequando ele terminou de transcrever a voz //
    reconhecimentoVoz.onresult = (evento) => {
        let textoTranscricao = evento.results[0][0].transcript

        inputTexto.textContent = textoTranscricao

        traduzir()

    }

    reconhecimentoVoz.start()

}