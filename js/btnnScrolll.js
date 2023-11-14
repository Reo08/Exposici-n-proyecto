const d = document

export function scroB(btn){
    const $btn = d.querySelector(btn)

    window.addEventListener("scroll", e=> {
        if(d.documentElement.scrollTop > 600){
            $btn.classList.remove("hidden")
        }else {
            $btn.classList.add("hidden")
        }
    })
    d.addEventListener("click", e=> {
        if(e.target.matches(btn)){
            d.documentElement.scrollTop = 0
        }
    })
}