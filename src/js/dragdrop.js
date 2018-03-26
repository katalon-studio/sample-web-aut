if (window.pageId === 'dragdrop.html') {

    var droppable = $("#droppable");
    var draggable = $('#draggable');

    droppable.on("dragover", (e) => {
        e.preventDefault();
    });

    droppable.on("drop", (e) => {
        e.preventDefault();
        var data = e.originalEvent.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
        draggable.html("Dropped!");
    });

    draggable.on("dragstart", (e) => {
        draggable.html("Dragging...");
        e.originalEvent.dataTransfer.setData("text", e.target.id);
    });

    draggable.on("dragend", (e) => {
        if (droppable.children().length === 0) {
            draggable.html("Drag me!");
        }
    });
}