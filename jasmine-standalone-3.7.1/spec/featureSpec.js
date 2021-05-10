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

    it("should be able to give us an array of first 20 characters of each note", () => {
        noteapp.createNote("I am iron man and I like fighting thanos")
        noteapp.createNote("lorem ipsum lorem ipsum lorem")
        expect(noteapp.show20Chars(1)).toEqual(noteapp.list[0].slice(0, 20))
    })
})