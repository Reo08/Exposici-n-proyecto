import { scroB } from "./js/btnnScrolll.js"
import { carruSlide } from "./js/carru.js"
import { fases } from "./js/fases.js"
import { lsBtn } from "./js/localSS.js"
import { btnScrollSp } from "./js/scrollSpye.js"

const d = document


function btnBur(btn,panel, anclas){
    const $panel = d.querySelector(panel)

    d.addEventListener("click", e=> {
        if(e.target.matches(btn)){
            $panel.classList.toggle("is-active")
        }
        if(e.target.matches(anclas)){
            $panel.classList.remove("is-active")
        }
    })
}

d.addEventListener("DOMContentLoaded", e=> {
    btnScrollSp()
    fases(".nav-fases a", ".fases")
    scroB(".btn-scroll")
    carruSlide(".slider-hijo", ".anterior",".siguiente")
    btnBur(".header-btn",".panel",".menu a")
})

lsBtn(".btn-dark",".todo", "h2","h3","li","p", "a","[data-capsula]")