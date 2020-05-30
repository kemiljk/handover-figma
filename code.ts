figma.showUI(__html__, { width: 300, height: 300 });

if (figma.currentPage.selection.length !== 1) {
  figma.notify("Select a single text block to get the selection value.")
}

if (figma.currentPage.selection.length === 1) {
  var selection = figma.currentPage.selection["0"].fontSize;
  figma.ui.postMessage({ "fontSize": selection });
}

figma.on("selectionchange", () => { 
  var selection = figma.currentPage.selection["0"].fontSize;
  figma.ui.postMessage({ "fontSize": selection });
})

figma.ui.onmessage = () => {
  figma.closePlugin();
};
