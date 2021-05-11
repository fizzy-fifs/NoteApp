"use script";


function it (label, test) {

    console.log(`test: ${label}`)
    test()
}

function expect(actualValue) {
    return { 
        toEqual: function (expectedValue){
            if(actualValue === expectedValue){
                console.log("your test has passed, you are an amazing coder!!!")

            } else {
                console.log("failure, but do not let this get you down, see below for details and debug!!!")
                console.log(`expected: ${expectedValue}\ngot: ${actualValue}\nPlease review your code`)
            } 
        },

        toBeTruthy: function(){
            if(actualValue === true){
                console.log("your test has passed, you are an amazing coder!!!")
            } else {
                console.log("failure, but do not let this get you down, see below for details and debug!!!")
            }
        }
    }
}


// ---------------------------------------------- //


let noteapp;

it("should be able to create a new note", () => {
    noteapp = new Noteapp()
    noteapp.createNote()
    noteapp.createNote()
    noteapp.createNote()
    expect(noteapp.list.length).toEqual(3);
})

it("should be able to give us an array of first 20 characters of each note", () => {
    noteapp = new Noteapp()
    noteapp.createNote("I am iron man and I like fighting thanos")
    noteapp.createNote("lorem ipsum lorem ipsum lorem")
    expect(noteapp.show20Chars(1)).toEqual(noteapp.list[0].slice(0, 20))
})

it("shows the entire note", () => {
    noteapp = new Noteapp()
    noteapp.createNote("I am iron man and I like fighting thanos")
    noteapp.createNote("lorem ipsum lorem ipsum lorem")
    expect(noteapp.showEntireNote(1)).toEqual(noteapp.list[0])
})
