import { scroB } from "./js/btnnScrolll.js"
import { carruSlide } from "./js/carru.js"
import { fases } from "./js/fases.js"
import { lsBtn } from "./js/localSS.js"
import { btnScrollSp } from "./js/scrollSpye.js"

const d = document

d.addEventListener("DOMContentLoaded", e=> {
    btnScrollSp()
    fases(".nav-fases a", ".fases")
    scroB(".btn-scroll")
    carruSlide(".slider-hijo", ".anterior",".siguiente")
})

lsBtn(".btn-dark",".todo", "h2","h3","li","p", "a","[data-capsula]")