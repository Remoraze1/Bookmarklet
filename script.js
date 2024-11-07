// Display an alert with instructions when a bookmarklet is clicked
document.querySelectorAll('.bookmarklet').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('To use this bookmarklet, drag it into your bookmark bar or right-click to add it.');
    });
});
