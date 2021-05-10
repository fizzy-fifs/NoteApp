"use stricts";

document.addEventListener("DOMContentLoaded", ()=>{

    let noteapp = new Noteapp
    let originalList = document.querySelectorAll('li')
    let noteList = document.querySelectorAll('li')
    let expandButton = document.querySelector(".expand-button")
    let newNoteButton = document.querySelector(".submit-note")

    newNoteButton.addEventListener("click", ()=> {
        let note = document.querySelector(".note-import").value
        noteapp.createNote(note)
        
        currentNote = document.createElement("li")
        currentNote.textContent = noteapp.show20Chars(noteapp.list.length)
        document.querySelector("ol").append(currentNote)
    })


    expandButton.addEventListener("click", ()=> {
        let noteNumber = document.querySelector(".item-number").value
        let expandedNote = noteapp.showEntireNote(noteNumber)

        document.querySelectorAll("li")[noteNumber - 1].innerText = expandedNote
    })






    // const addItem = () => {

    // }

    // showButton.addEventListener("click", ()=> {
    //     showFullItem(1)
    // })








    // const abreviatedList = (list) => {
    //     let abv = []
    //     list.forEach(item => {abv.push(item.innerText.substr(0, 20))})
    // }

    // abreviatedList(noteList)

    // const showFullItem = (number) => {
    //    console.log(originalList[number-1].innerText)
    // }

    // showButton.addEventListener("click", ()=> {
    //     showFullItem(1)
    // })


})