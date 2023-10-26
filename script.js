let score = 0
let listContainers = document.querySelectorAll(".container")

for (let i =0; i<listContainers.length;i++){
    listContainers[i].addEventListener('click', () =>{
        let containerChoix = listContainers[i]
        containerChoix.classList.add("clicked")
        containerReset (containerChoix)
        score = (listContainers[i].textContent)
}) 
}

function containerReset (choix){
    for (let i =0; i<listContainers.length;i++){
        if (listContainers[i].textContent!= choix.textContent){
        listContainers[i].classList.remove("clicked")
        }
    }
}
let card = document.querySelector(".card")
let popup = document.querySelector(".popup")
let scoreAffichage = document.querySelector(".popup_score")
//console.log(popup)
let btnSubmit = document.querySelector("button")
btnSubmit.addEventListener('click', () => {
    if(score != 0){
    card.classList.add("desactive")
    popup.classList.add("active")
    scoreAffichage.innerHTML = score
    }
})
