import {events} from "@/packages/events";


export function leftSizeChange(data) {

    let dragState = {
        startX: 0,
        startY: 0,
        dragging: false
    }

    const mousedownLeft = (e) => {
        e.stopPropagation()
        e.preventDefault()

        data.value.blocks.forEach((block, idx) => {
            if (block.focus) {

                dragState = {
                    startX: e.clientX,
                    startY: e.clientY,
                    dragging: false
                }
                // console.log(durY)
                document.addEventListener('mousemove', mousemove, {passive: false})
                document.addEventListener('mouseup', mouseup, {passive: false})
            }
        })
    }

    const mousemove = (e) => {
        let {clientX: moveX, clientY: moveY} = e;


        if (!dragState.dragging) {
            dragState.dragging = true;
            events.emit('start');
        }

        data.value.blocks.forEach((block, idx) => {
            if (block.focus) {
                let durX = dragState.startX - moveX;
                if (moveX - dragState.startX < data.value.style[idx].width) {
                    dragState.startX = moveX;

                    data.value.style[idx].width = data.value.style[idx].width + durX;
                    data.value.blocks[idx].left = data.value.blocks[idx].left - durX;
                } else {
                    data.value.style[idx].width = 0
                }

                // console.log(durY)
                // preDuringY = height;
                // console.log(typeof (data.value.style[idx].height))
            }
        })
    }

    const mouseup = (e) => {
        document.removeEventListener('mousemove', mousemove, {passive: false})
        document.removeEventListener('mouseup', mouseup, {passive: false})
        if (dragState.dragging) {
            dragState.dragging = false;
            events.emit('end');
        }
    }

    return {
        mousedownLeft
    }
}