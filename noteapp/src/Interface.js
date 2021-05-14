"use stricts";

document.addEventListener("DOMContentLoaded", ()=>{

    let noteapp = new Noteapp
    let originalList = document.querySelectorAll('li')
    let noteList = document.querySelectorAll('li')
    let expandButton = document.querySelector(".expand-button")
    let deleteButton = document.querySelector(".delete-button")
    let newNoteButton = document.querySelector(".submit-note")
    let myLocalStorage = window.localStorage

    getLocalStorage = () => {
      let notes = []
      for (i = 1; i <= myLocalStorage.length+50; i++){
      if(myLocalStorage[`note_${i}`]) {
        notes.push(myLocalStorage[`note_${i}`])
      }
    }
    return notes
}

    showNotesOnLoad = () => {
        let notes = getLocalStorage()
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
        localStorageSave(note)
        addNoteElement()
        document.querySelector(".note-import").value = ""
    }) 
    
    addNoteElement = () => {
        currentNote = document.createElement("li")
        currentNote.textContent = noteapp.show20Chars(noteapp.list.length)
        document.querySelector("ol").append(currentNote)
    }

    localStorageSave = (note) => {
        window.localStorage.setItem(`note_${noteapp.list.indexOf(note)+1}`, note)
    }

    expandButton.addEventListener("click", ()=> {
        let noteNumber = document.querySelector(".item-number").value
        let expandedNote = noteapp.showEntireNote(noteNumber)

        document.querySelectorAll("li")[noteNumber - 1].innerText = expandedNote
    })

    deleteButton.addEventListener("click", ()=> {
        let noteNumber = document.querySelector(".item-number").value
        noteapp.deleteNote(noteNumber)
        myLocalStorage.removeItem(`note_${noteNumber}`)
        let the_list = document.querySelectorAll("li")[noteNumber-1]
        the_list.parentNode.removeChild(the_list)
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

