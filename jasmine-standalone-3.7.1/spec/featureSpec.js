"use script";

describe("Noteapp", ()=>{
    let noteapp

    beforeEach(()=>{
        noteapp = new Noteapp()
    })

    it("should be able to create a new note", () => {
        noteapp.createNote()
        noteapp.createNote()
        noteapp.createNote()
        expect(noteapp.list.length).toEqual(3);
    })
})