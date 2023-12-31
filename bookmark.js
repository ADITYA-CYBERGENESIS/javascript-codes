let button =document.getElementById("btn");
let link =button.addEventListener('click',() => {
link = prompt("Enter the link");
return link
});

let title =button.addEventListener('click',() => {
    title = prompt("Enter the title for bookmark");
    return title
});

button.addEventListener('click',() => {
    let newBookmark = document.createElement('a');
    newBookmark.href = link;
    newBookmark.textContent = title;
    button.after(newBookmark);
})