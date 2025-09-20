function clicar(){
        var m = document.getElementById("mf") 
        var h = document.getElementById("i")   
        var x = document.getElementById("y")
        var b = document.getElementById("t")
        var vel = Number(b.value)
        
        if(vel > 60){
            h.innerHTML = `Voce Ultrapassou os 60km/h \n Voce foi Multado!`
            m.innerHTML = `Seja Prudente no transito`
        }else {
          x.innerHTML = `A sua km foi de ${vel}km/h Dirija sempre com o cinto`        
              }       
       }