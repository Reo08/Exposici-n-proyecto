const d = document

export function carruSlide(elementos,anterior,siguiente){
    const $elementos = d.querySelectorAll(elementos)
    let i = 0
    d.addEventListener("click", e=> {
        if(e.target.matches(anterior)){
            e.preventDefault()
            $elementos[i].classList.remove("is-visible")
            i--

            if(i < 0){
                i = $elementos.length -1
            }

            $elementos[i].classList.add("is-visible")
        }

        if(e.target.matches(siguiente)){
            e.preventDefault()
            $elementos[i].classList.remove("is-visible")
            i++
            if(i >= $elementos.length){
                i=0
            }
            $elementos[i].classList.add("is-visible")
        }
    })
}