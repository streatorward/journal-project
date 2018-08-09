const createEntry = require("./entry")
const APIObject = require("./dataManager")



function listEntries(){
    APIObject.getJournalEntry()
    .then(results => {
        results.forEach(entries => {
        let entryComponent = createEntry(entries.title, entries.content, entries.date, entries.id);
        writeEntriesToDOM(entryComponent);

    })
    });
}
// let data = APIObject.getJournalEntry()
// console.log(data)
function writeEntriesToDOM(entries){
    document.querySelector("#entryList").innerHTML += entries
}

module.exports = listEntries