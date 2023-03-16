export function btnLanding(e){
    const btn = document.getElementsByClassName("bg")[0].style
    const btnI = document.getElementsByClassName("buttonLanding")[0].style
    btn.animation = "0.3s linear bgBig forwards"
    btnI.color = "black"

}
export function btnLandingOut(e){
    const btn = document.getElementsByClassName("bg")[0].style
    const btnI = document.getElementsByClassName("buttonLanding")[0].style
    btn.animation = "0.3s linear bgBigOut forwards"
    btnI.color = "white"
}

export function hoverCard(e, name, genders , rating){


}