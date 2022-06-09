export function cardPreviewDraw(blockRef, data, index) {

    blockRef.value.children[0].style.width = `${data.value.style[index].width}px`;
    blockRef.value.children[0].style.height = `${data.value.style[index].height}px`;
    blockRef.value.children[0].style.background = data.value.style[index].background;
    blockRef.value.children[0].style.opacity = data.value.style[index].opacity;
}