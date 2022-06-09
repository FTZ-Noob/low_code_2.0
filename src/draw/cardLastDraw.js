export function cardLastDraw(blockRef, block, data, id) {

    // console.log(blockRef.value.children[0].className)
    if (blockRef.value !== null && blockRef.value.children[0].className === "scene-card") {
        blockRef.value.children[0].style.width = `${data.value.style[id].width}px`;
        block.width = data.value.style[id].width;
        blockRef.value.children[0].style.height = `${data.value.style[id].height}px`;
        block.height = data.value.style[id].height;
        blockRef.value.children[0].style.background = data.value.style[id].background;
        blockRef.value.children[0].style.opacity = data.value.style[id].opacity;
        // console.log(blockRef.value.children[0])
        // console.log(blockRef.value.children[0].style.opacity)
    }
}