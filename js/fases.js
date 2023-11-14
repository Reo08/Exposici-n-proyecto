const d = document

export function fases(fases,descripciones){
    const $fases = d.querySelectorAll(fases)
    const $descripciones = d.querySelectorAll(descripciones)

    d.addEventListener("click", e=> {
        if(e.target.matches(fases)){
            if(e.target.textContent === "Fase de inicio"){
                e.preventDefault()
                $descripciones.forEach(el => {
                    if(el.classList.contains("ver")){
                        el.classList.remove("ver")
                    }
                })
                $descripciones[0].classList.add("ver")
            }
            if(e.target.textContent === "Fase de elaboracion"){
                e.preventDefault()
                $descripciones.forEach(el => {
                    if(el.classList.contains("ver")){
                        el.classList.remove("ver")
                    }
                })
                $descripciones[1].classList.add("ver")
            }
            if(e.target.textContent === "Fase de construccion"){
                e.preventDefault()
                $descripciones.forEach(el => {
                    if(el.classList.contains("ver")){
                        el.classList.remove("ver")
                    }
                })
                $descripciones[2].classList.add("ver")
            }
            if(e.target.textContent === "Fase de transicion"){
                e.preventDefault()
                $descripciones.forEach(el => {
                    if(el.classList.contains("ver")){
                        el.classList.remove("ver")
                    }
                })
                $descripciones[3].classList.add("ver")
            }
            if(e.target.textContent === "Fase de cierre"){
                e.preventDefault()
                $descripciones.forEach(el => {
                    if(el.classList.contains("ver")){
                        el.classList.remove("ver")
                    }
                })
                $descripciones[4].classList.add("ver")
            }
            $fases.forEach(el => {
                el.classList.remove("a")
            })
            e.target.classList.add("a")
        }
    })
}