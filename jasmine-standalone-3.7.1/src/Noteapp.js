"use strict"; 

class Noteapp {
    constructor() {
        this.list = []
    }

    createNote(note) {
        this.list.push(note)
    }
}