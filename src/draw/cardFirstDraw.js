export function cardFirstDraw(blockRef, data, offsetWidth, offsetHeight, id){

    // blockRef.value.children[0].children[0].innerHTML = `<button>123456</button>`
    blockRef.value.children[0].background = "#FFFFFF"
    blockRef.value.children[0].style.opacity = 1;
    // console.log(blockRef.value.children[0])
    // console.log(blockRef.value.children[0].children[0])

    let style = data.value.style; // 内部已经渲染的组件
    if (data.value.blocks.length - data.value.style.length === 1) {
        data.value = {
            ...data.value, style: [
                ...style,
                {
                    width: offsetWidth,
                    height: offsetHeight,
                    background: "#FFFFFF",
                    opacity: 1
                }
            ]
        }
    }

    if (data.value.blocks.length === data.value.style.length) {
        blockRef.value.children[0].style.width = `${data.value.style[id].width}px`;
        // block.width = data.value.style[id].width;
        blockRef.value.children[0].style.height = `${data.value.style[id].height}px`;
        // block.height = data.value.style[id].height;
        blockRef.value.children[0].style.background = data.value.style[id].background;
        blockRef.value.children[0].style.opacity = data.value.style[id].opacity;
    }
}