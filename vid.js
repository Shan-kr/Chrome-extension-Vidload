
    document.getElementById("stopwatch").addEventListener("click", function() {
        popupWindow = window.open('stopwatch.html', 'Stopwatch', 'width=350,height=180');
    popupWindow.focus();
});
document.getElementById("note").addEventListener("click", function() {
    popupWindow = window.open('note.html', 'Note', 'width=375,height=500');
popupWindow.focus();
});