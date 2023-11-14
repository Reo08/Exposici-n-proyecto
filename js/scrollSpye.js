const d = document

export function btnScrollSp(){
    const $section = d.querySelectorAll(".section")

    const cb = (entradas)=> {
        entradas.forEach(entrada => {
            const id = entrada.target.getAttribute("id")

            if(entrada.isIntersecting){
                d.querySelector(`a[data-scroll][href="#${id}"]`).classList.add("aa")
            }else {
                d.querySelector(`a[data-scroll][href="#${id}"]`).classList.remove("aa")
            }
        })
        
    }

    const ob = new IntersectionObserver(cb, {
        rootMargin: "-250px"
    })

    $section.forEach(el => {
        ob.observe(el)
    })

}