figma.showUI(__html__, { width: 500, height: 600 });
if (figma.currentPage.selection.length < 1) {
    figma.notify("Select an object to get the selection value.");
}
function makeSelection() {
    if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'TEXT') {
        var textSelection = figma.currentPage.selection[0].fontSize;
        figma.ui.postMessage({ "fontSize": textSelection });
        var textSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": textSelectionWidth });
        var textSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "height": textSelectionHeight });
    }
    if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'RECTANGLE') {
        var rectSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": rectSelectionWidth });
        var rectSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "height": rectSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'ELLIPSE') {
        var ellipseSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": ellipseSelectionWidth });
        var ellipseSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "height": ellipseSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'FRAME') {
        var frameSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": frameSelectionWidth });
        var frameSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "height": frameSelectionHeight });
        const frameTextSelection = figma.currentPage.findChildren(n => n.type === 'TEXT');
        if (frameTextSelection.length > 0) {
            return figma.currentPage.selection[0].fontSize;
        }
        figma.ui.postMessage({ "fontSize": frameTextSelection });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'GROUP') {
        var groupSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": groupSelectionWidth });
        var groupSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "height": groupSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'INSTANCE') {
        var instanceSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": instanceSelectionWidth });
        var instanceSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "height": instanceSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'COMPONENT') {
        var componentSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": componentSelectionWidth });
        var componentSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "width": componentSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'VECTOR') {
        var vectorSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": vectorSelectionWidth });
        var vectorSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "width": vectorSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'STAR') {
        var starSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": starSelectionWidth });
        var starSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "width": starSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'LINE') {
        var lineSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": lineSelectionWidth });
        var lineSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "width": lineSelectionHeight });
    }
    else if (figma.currentPage.selection.length === 1 && figma.currentPage.selection[0].type === 'POLYGON') {
        var polygonSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ "width": polygonSelectionWidth });
        var polygonSelectionHeight = figma.currentPage.selection[0].height;
        figma.ui.postMessage({ "width": polygonSelectionHeight });
    }
    return;
}
figma.on("selectionchange", () => {
    makeSelection();
});
figma.ui.onmessage = () => {
    figma.closePlugin();
};
