"use stricts";

document.addEventListener("DOMContentLoaded", ()=>{

    let noteapp = new Noteapp
    let originalList = document.querySelectorAll('li')
    let noteList = document.querySelectorAll('li')
    let expandButton = document.querySelector(".expand-button")
    let newNoteButton = document.querySelector(".submit-note")
    let myLocalStorage = window.localStorage


    showNotesOnLoad = () => {
        let notes = Object.values(myLocalStorage)
        notes.forEach(note => noteapp.createNote(note))
        for (item of noteapp.list) {
           eachNote = document.createElement("li")
            eachNote.textContent = noteapp.show20Chars(noteapp.list.indexOf(item)+1)
            document.querySelector("ol").append(eachNote)
            }
        }

    showNotesOnLoad()


    newNoteButton.addEventListener("click", async()=> {
        let note = await createEmoji(document.querySelector(".note-import").value)
        noteapp.createNote(note)
        window.localStorage.setItem(`note_${noteapp.list.indexOf(note)+1}`, note)
        addNote()
        document.querySelector(".note-import").value = ""
    }) 
    
    addNote = () => {
        currentNote = document.createElement("li")
        currentNote.textContent = noteapp.show20Chars(noteapp.list.length)
        document.querySelector("ol").append(currentNote)
    }



    expandButton.addEventListener("click", ()=> {
        let noteNumber = document.querySelector(".item-number").value
        let expandedNote = noteapp.showEntireNote(noteNumber)

        document.querySelectorAll("li")[noteNumber - 1].innerText = expandedNote
    })

    createEmoji = (text) => {
        let jsonText = JSON.parse(`{ "text": "${text}" }`)
         return fetch('https://makers-emojify.herokuapp.com/', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(jsonText)
             })
         .then(response => response.json())
         .then(data => data.emojified_text)
     }


})

