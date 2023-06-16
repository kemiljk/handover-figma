figma.showUI(__html__, { themeColors: true, width: 300, height: 500 });
if (figma.currentPage.selection.length === 0) {
    figma.notify('Select an object to get the selection value.');
}
function makeSelection() {
    const { selection } = figma.currentPage;
    if (selection.length === 0) {
        const emptyValues = ['type', 'fontSize', 'width', 'height', 'strokeWeight', 'x', 'y', 'cornerRadius', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
        emptyValues.forEach((value) => {
            figma.ui.postMessage({ [value]: 0, component: 'EMPTY' });
        });
        return;
    }
    const typeMappings = new Map([
        [
            'TEXT',
            {
                type: 'TextNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                fontSize: 0,
                lineHeight: 0,
                letterSpacing: 0,
            },
        ],
        [
            'RECTANGLE',
            {
                type: 'RectangleNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'ELLIPSE',
            {
                type: 'EllipseNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
            },
        ],
        [
            'FRAME',
            {
                type: 'FrameNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'GROUP',
            {
                type: 'GroupNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'INSTANCE',
            {
                type: 'InstanceNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'COMPONENT',
            {
                type: 'ComponentNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'VECTOR',
            {
                type: 'VectorNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'STAR',
            {
                type: 'StarNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'LINE',
            {
                type: 'LineNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
        [
            'POLYGON',
            {
                type: 'PolygonNode',
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                cornerRadius: 0,
                strokeWeight: 0,
                itemSpacing: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
            },
        ],
    ]);
    const selectedType = selection.length > 0 ? selection[0].type : '';
    const mapping = typeMappings.get(selectedType);
    if (mapping) {
        const type = mapping.type;
        const properties = Object.keys(mapping).filter((key) => key !== 'type');
        const node = selection[0];
        figma.ui.postMessage({ component: type.replace('Node', '') });
        properties.forEach((property) => {
            const propertyValue = node[property];
            figma.ui.postMessage({ [property]: propertyValue });
        });
    }
    if (selection.length > 1) {
        const isSameType = selection.every((s) => s.type === selection[0].type);
        const component = isSameType ? selection[0].type : 'MIXED';
        figma.ui.postMessage({ component });
    }
    else {
        figma.ui.postMessage({ component: selection.length > 0 ? selection[0].type : 'EMPTY' });
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
