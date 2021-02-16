figma.showUI(__html__, { width: 500, height: 600 });

if (figma.currentPage.selection.length === 0) {
  figma.notify("Select an object to get the selection value.");
}

function makeSelection() {
  if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "TEXT"
  ) {
    var textSelection = (figma.currentPage.selection[0] as TextNode).fontSize;
    figma.ui.postMessage({ fontSize: textSelection });
    var textSelectionWidth = (figma.currentPage.selection[0] as TextNode).width;
    figma.ui.postMessage({ width: textSelectionWidth });
    var textSelectionHeight = (figma.currentPage.selection[0] as TextNode)
      .height;
    figma.ui.postMessage({ height: textSelectionHeight });
    var textSelectionStroke = (figma.currentPage.selection[0] as TextNode)
      .strokeWeight;
    figma.ui.postMessage({ strokeWeight: textSelectionStroke });
    var textSelectionX = (figma.currentPage.selection[0] as TextNode).x;
    figma.ui.postMessage({ x: textSelectionX });
    var textSelectionY = (figma.currentPage.selection[0] as TextNode).y;
    figma.ui.postMessage({ y: textSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "RECTANGLE"
  ) {
    var rectSelectionWidth = (figma.currentPage.selection[0] as RectangleNode)
      .width;
    figma.ui.postMessage({ width: rectSelectionWidth });
    var rectSelectionHeight = (figma.currentPage.selection[0] as RectangleNode)
      .height;
    figma.ui.postMessage({ height: rectSelectionHeight });
    var rectSelectionRadius = (figma.currentPage.selection[0] as RectangleNode)
      .cornerRadius;
    figma.ui.postMessage({ cornerRadius: rectSelectionRadius });
    var rectangleSelectionStroke = (figma.currentPage
      .selection[0] as RectangleNode).strokeWeight;
    figma.ui.postMessage({ strokeWeight: rectangleSelectionStroke });
    var rectangleSelectionX = (figma.currentPage.selection[0] as RectangleNode)
      .x;
    figma.ui.postMessage({ x: rectangleSelectionX });
    var rectangleSelectionY = (figma.currentPage.selection[0] as RectangleNode)
      .y;
    figma.ui.postMessage({ y: rectangleSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "ELLIPSE"
  ) {
    var ellipseSelectionWidth = (figma.currentPage.selection[0] as EllipseNode)
      .width;
    figma.ui.postMessage({ width: ellipseSelectionWidth });
    var ellipseSelectionHeight = (figma.currentPage.selection[0] as EllipseNode)
      .height;
    figma.ui.postMessage({ height: ellipseSelectionHeight });
    var ellipseSelectionArcStart = (figma.currentPage
      .selection[0] as EllipseNode).arcData.startingAngle;
    figma.ui.postMessage({ startingAngle: ellipseSelectionArcStart });
    var ellipseSelectionArcEnd = (figma.currentPage.selection[0] as EllipseNode)
      .arcData.endingAngle;
    figma.ui.postMessage({ endingAngle: ellipseSelectionArcEnd });
    var ellipseSelectionArcInnerRadius = (figma.currentPage
      .selection[0] as EllipseNode).arcData.innerRadius;
    figma.ui.postMessage({ innerRadius: ellipseSelectionArcInnerRadius });
    var ellipseSelectionStroke = (figma.currentPage.selection[0] as EllipseNode)
      .strokeWeight;
    figma.ui.postMessage({ strokeWeight: ellipseSelectionStroke });
    var ellipseSelectionX = (figma.currentPage.selection[0] as EllipseNode).x;
    figma.ui.postMessage({ x: ellipseSelectionX });
    var ellipseSelectionY = (figma.currentPage.selection[0] as EllipseNode).y;
    figma.ui.postMessage({ y: ellipseSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "FRAME"
  ) {
    var frameSelectionWidth = (figma.currentPage.selection[0] as FrameNode)
      .width;
    figma.ui.postMessage({ width: frameSelectionWidth });
    var frameSelectionHeight = (figma.currentPage.selection[0] as FrameNode)
      .height;
    figma.ui.postMessage({ height: frameSelectionHeight });
    var frameSelectionX = (figma.currentPage.selection[0] as FrameNode).x;
    figma.ui.postMessage({ x: frameSelectionX });
    var frameSelectionY = (figma.currentPage.selection[0] as FrameNode).y;
    figma.ui.postMessage({ y: frameSelectionY });
    var paddingT = (figma.currentPage.selection[0] as FrameNode).paddingTop;
    figma.ui.postMessage({ paddingTop: paddingT });
    var paddingB = (figma.currentPage.selection[0] as FrameNode).paddingBottom;
    figma.ui.postMessage({ paddingBottom: paddingB });
    var paddingL = (figma.currentPage.selection[0] as FrameNode).paddingLeft;
    figma.ui.postMessage({ paddingLeft: paddingL });
    var paddingR = (figma.currentPage.selection[0] as FrameNode).paddingRight;
    figma.ui.postMessage({ paddingRight: paddingR });
    var itemSpacing = (figma.currentPage.selection[0] as FrameNode).itemSpacing;
    figma.ui.postMessage({ itemSpacing: itemSpacing });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "GROUP"
  ) {
    var groupSelectionWidth = (figma.currentPage.selection[0] as GroupNode)
      .width;
    figma.ui.postMessage({ width: groupSelectionWidth });
    var groupSelectionHeight = (figma.currentPage.selection[0] as GroupNode)
      .height;
    figma.ui.postMessage({ height: groupSelectionHeight });
    var groupSelectionX = (figma.currentPage.selection[0] as GroupNode).x;
    figma.ui.postMessage({ x: groupSelectionX });
    var groupSelectionY = (figma.currentPage.selection[0] as GroupNode).y;
    figma.ui.postMessage({ y: groupSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "INSTANCE"
  ) {
    var instanceSelectionWidth = (figma.currentPage
      .selection[0] as InstanceNode).width;
    figma.ui.postMessage({ width: instanceSelectionWidth });
    var instanceSelectionHeight = (figma.currentPage
      .selection[0] as InstanceNode).height;
    figma.ui.postMessage({ height: instanceSelectionHeight });
    var instanceSelectionRadius = (figma.currentPage
      .selection[0] as InstanceNode).cornerRadius;
    figma.ui.postMessage({ cornerRadius: instanceSelectionRadius });
    var instanceSelectionStroke = (figma.currentPage
      .selection[0] as InstanceNode).strokeWeight;
    figma.ui.postMessage({ strokeWeight: instanceSelectionStroke });
    var instanceSelectionX = (figma.currentPage.selection[0] as InstanceNode).x;
    figma.ui.postMessage({ x: instanceSelectionX });
    var instanceSelectionY = (figma.currentPage.selection[0] as InstanceNode).y;
    figma.ui.postMessage({ y: instanceSelectionY });
    var paddingT = (figma.currentPage.selection[0] as InstanceNode).paddingTop;
    figma.ui.postMessage({ paddingTop: paddingT });
    var paddingB = (figma.currentPage.selection[0] as InstanceNode)
      .paddingBottom;
    figma.ui.postMessage({ paddingBottom: paddingB });
    var paddingL = (figma.currentPage.selection[0] as InstanceNode).paddingLeft;
    figma.ui.postMessage({ paddingLeft: paddingL });
    var paddingR = (figma.currentPage.selection[0] as InstanceNode)
      .paddingRight;
    figma.ui.postMessage({ paddingRight: paddingR });
    var itemSpacing = (figma.currentPage.selection[0] as InstanceNode)
      .itemSpacing;
    figma.ui.postMessage({ itemSpacing: itemSpacing });
  } else if (
    (figma.currentPage.selection.length > 0 &&
      figma.currentPage.selection[0].type === "COMPONENT") ||
    "COMPONENT_SET"
  ) {
    var componentSelectionWidth = (figma.currentPage
      .selection[0] as ComponentNode).width;
    figma.ui.postMessage({ width: componentSelectionWidth });
    var componentSelectionHeight = (figma.currentPage
      .selection[0] as ComponentNode).height;
    figma.ui.postMessage({ width: componentSelectionHeight });
    var componentSelectionRadius = (figma.currentPage
      .selection[0] as ComponentNode).cornerRadius;
    figma.ui.postMessage({ cornerRadius: componentSelectionRadius });
    var componentSelectionStroke = (figma.currentPage
      .selection[0] as ComponentNode).strokeWeight;
    figma.ui.postMessage({ strokeWeight: componentSelectionStroke });
    var componentSelectionX = (figma.currentPage.selection[0] as ComponentNode)
      .x;
    figma.ui.postMessage({ x: componentSelectionX });
    var componentSelectionY = (figma.currentPage.selection[0] as ComponentNode)
      .y;
    figma.ui.postMessage({ y: componentSelectionY });
    var paddingT = (figma.currentPage.selection[0] as ComponentNode).paddingTop;
    figma.ui.postMessage({ paddingTop: paddingT });
    var paddingB = (figma.currentPage.selection[0] as ComponentNode)
      .paddingBottom;
    figma.ui.postMessage({ paddingBottom: paddingB });
    var paddingL = (figma.currentPage.selection[0] as ComponentNode)
      .paddingLeft;
    figma.ui.postMessage({ paddingLeft: paddingL });
    var paddingR = (figma.currentPage.selection[0] as ComponentNode)
      .paddingRight;
    figma.ui.postMessage({ paddingRight: paddingR });
    var itemSpacing = (figma.currentPage.selection[0] as ComponentNode)
      .itemSpacing;
    figma.ui.postMessage({ itemSpacing: itemSpacing });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "VECTOR"
  ) {
    var vectorSelectionWidth = (figma.currentPage.selection[0] as VectorNode)
      .width;
    figma.ui.postMessage({ width: vectorSelectionWidth });
    var vectorSelectionHeight = (figma.currentPage.selection[0] as VectorNode)
      .height;
    figma.ui.postMessage({ width: vectorSelectionHeight });
    var vectorSelectionStroke = (figma.currentPage.selection[0] as VectorNode)
      .strokeWeight;
    figma.ui.postMessage({ strokeWeight: vectorSelectionStroke });
    var vectorSelectionX = (figma.currentPage.selection[0] as VectorNode).x;
    figma.ui.postMessage({ x: vectorSelectionX });
    var vectorSelectionY = (figma.currentPage.selection[0] as VectorNode).y;
    figma.ui.postMessage({ y: vectorSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "STAR"
  ) {
    var starSelectionWidth = (figma.currentPage.selection[0] as StarNode).width;
    figma.ui.postMessage({ width: starSelectionWidth });
    var starSelectionHeight = (figma.currentPage.selection[0] as StarNode)
      .height;
    figma.ui.postMessage({ width: starSelectionHeight });
    var starSelectionRadius = (figma.currentPage.selection[0] as StarNode)
      .cornerRadius;
    figma.ui.postMessage({ cornerRadius: starSelectionRadius });
    var starSelectionStroke = (figma.currentPage.selection[0] as StarNode)
      .strokeWeight;
    figma.ui.postMessage({ strokeWeight: starSelectionStroke });
    var starSelectionX = (figma.currentPage.selection[0] as StarNode).x;
    figma.ui.postMessage({ x: starSelectionX });
    var starSelectionY = (figma.currentPage.selection[0] as StarNode).y;
    figma.ui.postMessage({ y: starSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "LINE"
  ) {
    var lineSelectionWidth = (figma.currentPage.selection[0] as LineNode).width;
    figma.ui.postMessage({ width: lineSelectionWidth });
    var lineSelectionHeight = (figma.currentPage.selection[0] as LineNode)
      .height;
    figma.ui.postMessage({ width: lineSelectionHeight });
    var lineSelectionStroke = (figma.currentPage.selection[0] as LineNode)
      .strokeWeight;
    figma.ui.postMessage({ strokeWeight: lineSelectionStroke });
    var lineSelectionX = (figma.currentPage.selection[0] as LineNode).x;
    figma.ui.postMessage({ x: lineSelectionX });
    var lineSelectionY = (figma.currentPage.selection[0] as LineNode).y;
    figma.ui.postMessage({ y: lineSelectionY });
  } else if (
    figma.currentPage.selection.length > 0 &&
    figma.currentPage.selection[0].type === "POLYGON"
  ) {
    var polygonSelectionWidth = (figma.currentPage.selection[0] as PolygonNode)
      .width;
    figma.ui.postMessage({ width: polygonSelectionWidth });
    var polygonSelectionHeight = (figma.currentPage.selection[0] as PolygonNode)
      .height;
    figma.ui.postMessage({ width: polygonSelectionHeight });
    var polygonSelectionRadius = (figma.currentPage.selection[0] as PolygonNode)
      .cornerRadius;
    figma.ui.postMessage({ cornerRadius: polygonSelectionRadius });
    var polygonSelectionStroke = (figma.currentPage.selection[0] as PolygonNode)
      .strokeWeight;
    figma.ui.postMessage({ strokeWeight: polygonSelectionStroke });
    var polygonSelectionX = (figma.currentPage.selection[0] as PolygonNode).x;
    figma.ui.postMessage({ x: polygonSelectionX });
    var polygonSelectionY = (figma.currentPage.selection[0] as PolygonNode).y;
    figma.ui.postMessage({ y: polygonSelectionY });
  }
  return;
}

figma.on("selectionchange", () => {
  if (figma.currentPage.selection.length === 0) {
    figma.notify("Select an object to get the selection value.");
  } else {
    makeSelection();
  }
});

figma.ui.onmessage = () => {
  figma.closePlugin();
};
