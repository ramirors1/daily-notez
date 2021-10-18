const notes = [
{
id: 1,
subject: "Trash",
date: "1 Oct 2021",
feeling: "sick",
timeSpent: 10
},

{
id: 2,
subject: "Dishes",
date: "2 Oct 2021",
feeling: "tired",
timeSpent: 15
    }
]

const createNote = (note) => {
    /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
    const lastIndex = notes.length - 1

    // Get the last object in the array
    const currentLastNote = notes[lastIndex]

    // Get id property value of last phone
    const maxId = currentLastNote.id

    /*
        Step 2: Increase the current max id by 1
    */
    const idForNewNote = maxId + 1

    /*
        Step 3: Add the id property to the toy object
    */
    note.id = idForNewNote
    
    const dateCreated = Date();
    note.dateCreated = dateCreated
    /*
        Step 4: Add the toy object to the array
    */
    notes.push(note)
}
const moreNewerNote = {
    subject: "Dust",
    date: "3 Oct 2021",
    feeling: "sucked",
    timeSpent: 30,
    
}

createNote(moreNewerNote)

console.log(notes)

/*
    Now that the function is defined, you can invoke it
    and put a value in the parenthesis (a.k.a. the argument).
    The object will be stored in the `note`
    parameter for use in the function.
*/

// Display all the phones
// const noteAboutToday = {
// id: 3,
// subject: "Sweep",
// date: "3 Oct 2021",
// feeling: "bored",
// timeSpent: 25    
// }
// notes.push(noteAboutToday)


// const searchTerm = "tired"

// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//        console.log(note) 
//     }
// }


// for (const note of notes) {
//     console.log(`Note ${note.id}
//     on ${note.date}
//      I learned how to ${note.subject}
//       I spent ${note.timeSpent} minutes
//       I felt ${note.feeling} 
//     `)
// }

// console.log(notes) 