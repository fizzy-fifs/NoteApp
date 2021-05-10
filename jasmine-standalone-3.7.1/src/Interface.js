"use stricts";

document.addEventListener("DOMContentLoaded", ()=>{

    let originalList = document.querySelectorAll('li')
    let noteList = document.querySelectorAll('li')

    const abreviatedList = (list) => {
        let abv = []
        list.forEach(item => {abv.push(item.innerText.substr(0, 20))})
        console.log(abv)
        console.log(noteList)
     }

    abreviatedList(noteList)

    const showFullItem = (number) => {
       console.log(originalList[number-1].innerText)
    }

    

    let showButton = document.querySelector(".show-button")

    showButton.addEventListener("click", ()=> {
        showFullItem(1)
    })




    // document.querySelector(".item-number")
})