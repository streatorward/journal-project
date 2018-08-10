const FormManager = require("./journalForm")
const APIObject = require("./dataManager")
const listEntries = require("./entryList")
const $ = require("jquery")
// const createEntry = require("./Entry")

// Render the journal entry form
$("#journalForm").html(FormManager.renderEntryForm())

// Add an event listener for the save button
$("#saveEntryButton").click(() => {
    // Get form field values
    // Create object from them
    // Add timestamp
    const newEntry = {
        title: $("#entryTitle").val(),
        content: $("#entryContent").val(),
        date: Date(Date.now())
    }

    // POST to API
    APIObject.saveJournalEntry(newEntry).then(() => {
        // Clear the form fields
        FormManager.clearForm()
        $("#entryList").html("")
        listEntries()
    })

    // Put HTML representation on the DOM
})

listEntries()

$("body").click( () => {
    if (event.target.className === "delete") {
        event.target.parentElement.remove();
        APIObject.deleteJournalEntry(event.target.id)
    }
})   