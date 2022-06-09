export function cardUpdateDraw(blockRef, block, data, id){

    if (blockRef.value != null) {
        blockRef.value.children[0].style.width = `${data.value.style[id].width}px`;
        block.width = data.value.style[id].width;
        blockRef.value.style.width = `${block.width}px`;
        blockRef.value.children[0].style.height = `${data.value.style[id].height}px`;
        block.height = data.value.style[id].height;
        blockRef.value.style.height = `${block.height}px`;
        blockRef.value.children[0].style.background = data.value.style[id].background;
        blockRef.value.children[0].style.opacity = data.value.style[id].opacity;
    }
}