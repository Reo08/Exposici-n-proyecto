const d = document

export function lsBtn(btn,todo,h2,h3,li,p,a,capsula){
    const $btn = d.querySelector(btn)
    const $todo = d.querySelector(todo)
    const $h2 = d.querySelectorAll(h2)
    const $h3 = d.querySelectorAll(h3)
    const $li = d.querySelectorAll(li)
    const $p = d.querySelectorAll(p)
    const $a = d.querySelectorAll(a)
    const $capsulas = d.querySelectorAll(capsula)

    let luna = "🌑"
    let sol = "☀"

    const dark = () => {
        $todo.classList.add("tema-oscuro")
        $h2.forEach(el => {
            el.classList.add("tema-oscuro-letra")
        })
        $h3.forEach(el => {
            el.classList.add("tema-oscuro-letra")
        })
        $li.forEach(el => {
            el.classList.add("tema-oscuro-letra")
        })
        $p.forEach(el => {
            el.classList.add("tema-oscuro-letra")
        })
        $a.forEach(el => {
            el.classList.add("tema-oscuro-letra")
        })
        $capsulas.forEach(el => {
            el.classList.add("tema-oscuro-capsula")
        })
        $btn.textContent = sol
        localStorage.setItem("tema", "dark")
    }

    const light = ()=> {
        $todo.classList.remove("tema-oscuro")
        $h2.forEach(el => {
            el.classList.remove("tema-oscuro-letra")
        })
        $h3.forEach(el => {
            el.classList.remove("tema-oscuro-letra")
        })
        $li.forEach(el => {
            el.classList.remove("tema-oscuro-letra")
        })
        $p.forEach(el => {
            el.classList.remove("tema-oscuro-letra")
        })
        $a.forEach(el => {
            el.classList.remove("tema-oscuro-letra")
        })
        $capsulas.forEach(el => {
            el.classList.remove("tema-oscuro-capsula")
        })
        $btn.textContent = luna
        localStorage.setItem("tema", "light")
    }
    

    d.addEventListener("click", e=> {
        if(e.target.matches(btn)){
            if(e.target.textContent === luna){
                dark()
            }else {
                light()
            }
        }

    })

    d.addEventListener("DOMContentLoaded", e=> {
        if(localStorage.getItem("tema") === null) localStorage.setItem("tema","light")
        if(localStorage.getItem("tema") === "light") light()
        if(localStorage.getItem("tema" === "dark")) dark()
    })
}