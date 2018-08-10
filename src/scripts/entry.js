const createEntry = (title, content, date, id) => {
    return `
    <article class="journalEntry">
        <h2>
            <h2>${title}</h2>
        </h2>
        <h5>
            ${content}
        </h5>
        <p>
            <time>${date}</time>
        </p>
        <button class="delete" id=${id}><span>Delete Post</span></button>
    </article>
    `
}





module.exports = createEntry




// id="${id}"