function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900){
        console.log('[ERROR] verifique os dados e tente novamente')
        alert('[ERROR] verifique os dados e tente novamente')
    } else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let concordancia = ''
        let img = document.createElement('img')
        //img.setAttribute('id', 'foto')


        //verifica o sexo
        if(fsex[0].checked){
            genero = 'homem'
            concordancia = 'um'
            if(idade >= 0 && idade <= 10) {
                //crinaça
                 img.setAttribute('src', 'menino-pequeno.png')
            }else if(idade >= 11 && idade <= 18){
                //jovem
                img.setAttribute('src', 'adolescente m.png')
            }else if(idade > 18 && idade <= 50){
                //adulto
                 img.setAttribute('src', 'homem adulto.png')
            }else{
                //idoso
                //eu declarei uma img la no html, entAO NAO precisa do setatribute
                img.src = 'idoso.png'
            }
            
        } else if(fsex[1].checked){
            genero = 'mulher'
            concordancia = 'uma'
            if(idade >= 0 && idade <= 10) {
                //crianca
                 img.setAttribute('src', 'menina pequena.png')
            }else if(idade >= 11 && idade <= 18){
                //jovem
                 img.setAttribute('src', 'adolescente f.png')
            }else if(idade > 18 && idade <= 50){
                //adulto
                img.setAttribute('src', 'mulher adulta.png')
            }else{
                //idoso
                 img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = '' // Limpa primeiro
        res.appendChild(img) // Adiciona a imagem primeiro

        // Cria e adiciona o texto depois
        let texto = document.createElement('p')
        texto.textContent = `Detectamos ${concordancia} ${genero} de ${idade} anos.`
        res.appendChild(texto)
       
    }
}