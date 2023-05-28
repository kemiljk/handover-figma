figma.showUI(__html__, { themeColors: true, width: 300, height: 500 });
if (figma.currentPage.selection.length === 0) {
    figma.notify('Select an object to get the selection value.');
}
async function makeSelection() {
    const { selection } = figma.currentPage;
    if (selection.length > 0 && selection[0].type === 'TEXT') {
        let textType = selection[0].type;
        figma.ui.postMessage({ component: textType });
        let textSelection = selection[0].fontSize;
        figma.ui.postMessage({ fontSize: textSelection });
        let textSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: textSelectionWidth });
        let textSelectionHeight = selection[0].height;
        figma.ui.postMessage({ height: textSelectionHeight });
        let textSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: textSelectionStroke });
        let textSelectionX = selection[0].x;
        figma.ui.postMessage({ x: textSelectionX });
        let textSelectionY = selection[0].y;
        figma.ui.postMessage({ y: textSelectionY });
        let textSelectionLineHeight = selection[0].getRangeLineHeight(0, selection[0].characters.length).value;
        figma.ui.postMessage({ lineHeight: textSelectionLineHeight });
        let textSelectionLetterSpacing = selection[0].getRangeLetterSpacing(0, selection[0].characters.length).value;
        figma.ui.postMessage({ letterSpacing: textSelectionLetterSpacing });
    }
    else if (selection.length > 0 && selection[0].type === 'RECTANGLE') {
        let rectType = selection[0].type;
        figma.ui.postMessage({ component: rectType });
        let rectSelectionWidth = figma.currentPage.selection[0].width;
        figma.ui.postMessage({ width: rectSelectionWidth });
        let rectSelectionHeight = selection[0].height;
        figma.ui.postMessage({ height: rectSelectionHeight });
        let rectSelectionRadius = selection[0].cornerRadius;
        figma.ui.postMessage({ cornerRadius: rectSelectionRadius });
        let rectangleSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: rectangleSelectionStroke });
        let rectangleSelectionX = selection[0].x;
        figma.ui.postMessage({ x: rectangleSelectionX });
        let rectangleSelectionY = selection[0].y;
        figma.ui.postMessage({ y: rectangleSelectionY });
    }
    else if (selection.length > 0 && selection[0].type === 'ELLIPSE') {
        let ellType = selection[0].type;
        figma.ui.postMessage({ component: ellType });
        let ellipseSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: ellipseSelectionWidth });
        let ellipseSelectionHeight = selection[0].height;
        figma.ui.postMessage({ height: ellipseSelectionHeight });
        let ellipseSelectionArcStart = selection[0].arcData.startingAngle;
        figma.ui.postMessage({ startingAngle: ellipseSelectionArcStart });
        let ellipseSelectionArcEnd = selection[0].arcData.endingAngle;
        figma.ui.postMessage({ endingAngle: ellipseSelectionArcEnd });
        let ellipseSelectionArcInnerRadius = selection[0].arcData.innerRadius;
        figma.ui.postMessage({ innerRadius: ellipseSelectionArcInnerRadius });
        let ellipseSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: ellipseSelectionStroke });
        let ellipseSelectionX = selection[0].x;
        figma.ui.postMessage({ x: ellipseSelectionX });
        let ellipseSelectionY = selection[0].y;
        figma.ui.postMessage({ y: ellipseSelectionY });
    }
    else if (selection.length > 0 && selection[0].type === 'FRAME') {
        let frameType = selection[0].type;
        figma.ui.postMessage({ component: frameType });
        let frameSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: frameSelectionWidth });
        let frameSelectionHeight = selection[0].height;
        figma.ui.postMessage({ height: frameSelectionHeight });
        let frameSelectionX = selection[0].x;
        figma.ui.postMessage({ x: frameSelectionX });
        let frameSelectionY = selection[0].y;
        figma.ui.postMessage({ y: frameSelectionY });
        let frameSelectionRadius = selection[0].cornerRadius;
        figma.ui.postMessage({ cornerRadius: frameSelectionRadius });
        let paddingT = selection[0].paddingTop;
        figma.ui.postMessage({ paddingTop: paddingT });
        let paddingB = selection[0].paddingBottom;
        figma.ui.postMessage({ paddingBottom: paddingB });
        let paddingL = selection[0].paddingLeft;
        figma.ui.postMessage({ paddingLeft: paddingL });
        let paddingR = selection[0].paddingRight;
        figma.ui.postMessage({ paddingRight: paddingR });
        let itemSpacing = selection[0].itemSpacing;
        figma.ui.postMessage({ itemSpacing: itemSpacing });
    }
    else if (selection.length > 0 && selection[0].type === 'GROUP') {
        let groupType = selection[0].type;
        figma.ui.postMessage({ component: groupType });
        let groupSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: groupSelectionWidth });
        let groupSelectionHeight = selection[0].height;
        figma.ui.postMessage({ height: groupSelectionHeight });
        let groupSelectionX = selection[0].x;
        figma.ui.postMessage({ x: groupSelectionX });
        let groupSelectionY = selection[0].y;
        figma.ui.postMessage({ y: groupSelectionY });
    }
    else if (selection.length > 0 && selection[0].type === 'INSTANCE') {
        let inType = selection[0].type;
        figma.ui.postMessage({ component: inType });
        let instanceSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: instanceSelectionWidth });
        let instanceSelectionHeight = selection[0].height;
        figma.ui.postMessage({ height: instanceSelectionHeight });
        let instanceSelectionRadius = selection[0].cornerRadius;
        figma.ui.postMessage({ cornerRadius: instanceSelectionRadius });
        let instanceSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: instanceSelectionStroke });
        let instanceSelectionX = selection[0].x;
        figma.ui.postMessage({ x: instanceSelectionX });
        let instanceSelectionY = selection[0].y;
        figma.ui.postMessage({ y: instanceSelectionY });
        let paddingT = selection[0].paddingTop;
        figma.ui.postMessage({ paddingTop: paddingT });
        let paddingB = selection[0].paddingBottom;
        figma.ui.postMessage({ paddingBottom: paddingB });
        let paddingL = selection[0].paddingLeft;
        figma.ui.postMessage({ paddingLeft: paddingL });
        let paddingR = selection[0].paddingRight;
        figma.ui.postMessage({ paddingRight: paddingR });
        let itemSpacing = selection[0].itemSpacing;
        figma.ui.postMessage({ itemSpacing: itemSpacing });
    }
    else if ((selection.length > 0 && selection[0].type === 'COMPONENT') || 'COMPONENT_SET') {
        let comType = selection[0].type;
        figma.ui.postMessage({ component: comType });
        let componentSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: componentSelectionWidth });
        let componentSelectionHeight = selection[0].height;
        figma.ui.postMessage({ width: componentSelectionHeight });
        let componentSelectionRadius = selection[0].cornerRadius;
        figma.ui.postMessage({ cornerRadius: componentSelectionRadius });
        let componentSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: componentSelectionStroke });
        let componentSelectionX = selection[0].x;
        figma.ui.postMessage({ x: componentSelectionX });
        let componentSelectionY = selection[0].y;
        figma.ui.postMessage({ y: componentSelectionY });
        let paddingT = selection[0].paddingTop;
        figma.ui.postMessage({ paddingTop: paddingT });
        let paddingB = selection[0].paddingBottom;
        figma.ui.postMessage({ paddingBottom: paddingB });
        let paddingL = selection[0].paddingLeft;
        figma.ui.postMessage({ paddingLeft: paddingL });
        let paddingR = selection[0].paddingRight;
        figma.ui.postMessage({ paddingRight: paddingR });
        let itemSpacing = selection[0].itemSpacing;
        figma.ui.postMessage({ itemSpacing: itemSpacing });
    }
    else if (selection.length > 0 && selection[0].type === 'VECTOR') {
        let vecType = selection[0].type;
        figma.ui.postMessage({ component: vecType });
        let vectorSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: vectorSelectionWidth });
        let vectorSelectionHeight = selection[0].height;
        figma.ui.postMessage({ width: vectorSelectionHeight });
        let vectorSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: vectorSelectionStroke });
        let vectorSelectionX = selection[0].x;
        figma.ui.postMessage({ x: vectorSelectionX });
        let vectorSelectionY = selection[0].y;
        figma.ui.postMessage({ y: vectorSelectionY });
    }
    else if (selection.length > 0 && selection[0].type === 'STAR') {
        let starType = selection[0].type;
        figma.ui.postMessage({ component: starType });
        let starSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: starSelectionWidth });
        let starSelectionHeight = selection[0].height;
        figma.ui.postMessage({ width: starSelectionHeight });
        let starSelectionRadius = selection[0].cornerRadius;
        figma.ui.postMessage({ cornerRadius: starSelectionRadius });
        let starSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: starSelectionStroke });
        let starSelectionX = selection[0].x;
        figma.ui.postMessage({ x: starSelectionX });
        let starSelectionY = selection[0].y;
        figma.ui.postMessage({ y: starSelectionY });
    }
    else if (selection.length > 0 && selection[0].type === 'LINE') {
        let lineType = selection[0].type;
        figma.ui.postMessage({ component: lineType });
        let lineSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: lineSelectionWidth });
        let lineSelectionHeight = selection[0].height;
        figma.ui.postMessage({ width: lineSelectionHeight });
        let lineSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: lineSelectionStroke });
        let lineSelectionX = selection[0].x;
        figma.ui.postMessage({ x: lineSelectionX });
        let lineSelectionY = selection[0].y;
        figma.ui.postMessage({ y: lineSelectionY });
    }
    else if (selection.length > 0 && selection[0].type === 'POLYGON') {
        let polyType = selection[0].type;
        figma.ui.postMessage({ component: polyType });
        let polygonSelectionWidth = selection[0].width;
        figma.ui.postMessage({ width: polygonSelectionWidth });
        let polygonSelectionHeight = selection[0].height;
        figma.ui.postMessage({ width: polygonSelectionHeight });
        let polygonSelectionRadius = selection[0].cornerRadius;
        figma.ui.postMessage({ cornerRadius: polygonSelectionRadius });
        let polygonSelectionStroke = selection[0].strokeWeight;
        figma.ui.postMessage({ strokeWeight: polygonSelectionStroke });
        let polygonSelectionX = selection[0].x;
        figma.ui.postMessage({ x: polygonSelectionX });
        let polygonSelectionY = selection[0].y;
        figma.ui.postMessage({ y: polygonSelectionY });
    }
    if (selection.length > 1 && selection.every((s) => s.type === selection[0].type)) {
        figma.ui.postMessage({ component: selection[0].type });
    }
    else if (selection.length > 1 && !selection.every((s) => s.type === selection[0].type)) {
        figma.ui.postMessage({ component: 'MIXED' });
    }
}
figma.on('run', () => {
    makeSelection();
    figma.notify('Selection values updated');
});
figma.on('selectionchange', () => {
    makeSelection();
    figma.notify('Selection values updated');
});
figma.ui.onmessage = () => {
    figma.closePlugin();
};
