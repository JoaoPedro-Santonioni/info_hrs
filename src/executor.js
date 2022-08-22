function carrega(){

    let cabeçalho =  window.document.querySelector('h1#cab');
    let foto = window.document.querySelector('img#foto');
    let hrs_time = window.document.getElementById('hrs');
    let min_time = window.document.getElementById('min');

    const relogio = setInterval(function time(){
        let datetoday = new Date();
        let hora = datetoday.getHours();
        let minutes = datetoday.getMinutes();

            if (hora < 10) hora = '0' + hora;
            if (minutes < 10) minutes = '0' + minutes;

        hrs_time.textContent = hora;
        min_time.textContent = minutes;

            if(hora >= 6 && hora <= 12 ){
                cabeçalho.innerHTML = `Bom dia!`
                document.body.style.background = '#3f75aa'
                foto.src = `images/manha.png`
    
            }else if(hora >= 13 && hora <=18){
                cabeçalho.innerHTML = `Boa Tarde!`
                document.body.style.background = '#FF9633'
                foto.src = `images/tarde.png`
            
            }else if(hora >= 19 && hora <=23){
                cabeçalho.innerHTML = `Boa Noite!`
                document.body.style.background = '#071C42'
                foto.src = `images/noite.png`
            
            }else if(hora = 24 && hora <= 5){
                cabeçalho.innerHTML = `Boa Madrugada!`
                document.body.style.background = '#02030C'
                foto.src = `images/madrugada.png`
            }  


    });


    
    
}