figma.showUI(__html__, { width: 300, height: 300 });
figma.notify("Please select a text layer to use Px ›› Ems");

const selection = figma.currentPage.selection["0"].fontSize;
/* console.log(figma.currentPage.selection["0"].fontSize); */
figma.ui.postMessage({ "fontSize": selection })

figma.ui.onmessage = () => {
  figma.closePlugin();
};