"use strict"; 

class Noteapp {
    constructor() {
        this.list = []
    }

    createNote(note) {
        this.list.push(note)
    }

    show20Chars(noteNumber) {
       return this.list[noteNumber - 1].slice(0, 20)
    }

    showEntireNote(noteNumber) {
        return this.list[noteNumber - 1]
     }
}