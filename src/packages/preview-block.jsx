import {computed, defineComponent, inject, onMounted, ref} from "vue";
import {buttonPreviewDraw} from "@/draw/buttonPreviewDraw";
import {textPreviewDraw} from "@/draw/textPreviewDraw"
import {inputPreviewDraw} from "@/draw/inputPreviewDraw";
import './preview.scss'
import {ElMessage, useZIndex} from "element-plus";
import {buttonEvent} from "@/eventlist/buttonEvent";
import {inputEvent} from "@/eventlist/inputEvent";
import {textEvent} from "@/eventlist/textEvent";
import {cardPreviewDraw} from "@/draw/cardPreviewDraw";
import {cardEvent} from "@/eventlist/cardEvent";
import {SceneLoading, SceneMessage, SDialog} from "scene-ui";

export default defineComponent({
    props: {
        data: {type: Object},
        block: {type: Object},
        index: {type: Number}
    },

    setup(props) {

        const blockStyles = computed(() => ({
            top: `${props.block.top}px`,
            left: `${props.block.left}px`,
            zIndex: `${props.block.zIndex}`,
        }));

        // console.log(props.block)


        const config = inject('config')

        const blockRef = ref(null);

        // 从菜单栏到内容画布实现的第一次渲染
        onMounted(() => {
            if (props.block.key === "button") {
                buttonPreviewDraw(blockRef, props.data, props.index)
                buttonEvent(blockRef, props.block)
                // console.log()
            } else if (props.block.key === "text") {
                textPreviewDraw(blockRef, props.data, props.index)
                textEvent(blockRef, props.block)
            } else if (props.block.key === "input") {
                inputPreviewDraw(blockRef, props.data, props.index)
                inputEvent(blockRef, props.block)
                // console.log(blockRef.value)
            } else if (props.block.key === "card") {
                cardPreviewDraw(blockRef, props.data, props.index)
                cardEvent(blockRef, props.block)
            } else if (props.block.key === "dialog") {
                blockRef.value.children[0].onclick = () => props.data.value.style[props.index].modelValue = true
            } else if (props.block.key === "loading") {
                // const canvas001 = ref<HTMLElement>()
                // console.log(canvas001)
                const onLoading = () => {
                    let loadingInstance1 = SceneLoading.service({
                        target: props.data.value.style[props.index].target,
                        fullScreen: props.data.value.style[props.index].fullScreen,
                        text: props.data.value.style[props.index].text,
                        onClose: () => {
                            ElMessage.success(props.data.value.style[props.index].onClose)
                        }
                    })
                    loadingInstance1.open()
                    setTimeout(loadingInstance1.close, 5000)
                }
                blockRef.value.children[0].onclick = () => onLoading()
            } else if (props.block.key === "message") {
                const onMessage = () => {
                    SceneMessage({
                        type: props.data.value.style[props.index].type,
                        text: props.data.value.style[props.index].text,
                        showCloseButton: props.data.value.style[props.index].showCloseButton,
                        "duration": props.data.value.style[props.index].duration
                    });
                }
                blockRef.value.children[0].onclick = () => onMessage()
            }
        })


        return () => {
            const component = config.componentMap[props.block.key];

            const RenderComponent = component.render();

            if (props.block.key === "information") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent {...{
                        width: props.data.value.style[props.index].width,
                        height: props.data.value.style[props.index].height,
                        theme: props.data.value.style[props.index].theme,
                        type: props.data.value.style[props.index].type,
                        title: props.data.value.style[props.index].title,
                        info: props.data.value.style[props.index].info
                    }}
                    />
                </div>
            } else if (props.block.key === "paper") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent label={props.data.value.style[props.index].label}
                    />
                </div>
            } else if (props.block.key === "numberInput") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent step={props.data.value.style[props.index].step}
                                     max={props.data.value.style[props.index].max}
                                     min={props.data.value.style[props.index].min}
                                     disabled={props.data.value.style[props.index].disabled}
                    />
                </div>
            } else if (props.block.key === "datetime") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent v-model={props.data.value.style[props.index].modelValue}/>
                </div>
            } else if (props.block.key === "message") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent {...{
                        theme: props.data.value.style[props.index].type
                    }}/>
                </div>
            } else if (props.block.key === "loading") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent/>
                </div>

            } else if (props.block.key === "dialog") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent/>
                    <SDialog v-model={props.data.value.style[props.index].modelValue}
                             title={props.data.value.style[props.index].title}
                             width={props.data.value.style[props.index].width}
                             modal={props.data.value.style[props.index].modal}
                             lockScroll={props.data.value.style[props.index].lockScroll}
                             closeOnClickModal={props.data.value.style[props.index].closeOnClickModal}
                    >
                        {props.data.value.style[props.index].context}
                    </SDialog>
                </div>
            } else if (props.block.key === "checkbox") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent {...{
                        label: props.data.value.style[props.index].label,
                        // label: checkboxLabel.value,
                        size: props.data.value.style[props.index].size,
                        disabled: props.data.value.style[props.index].disabled
                    }}/>
                </div>
            } else if (props.block.key === "radio") {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent {...{
                        name: props.data.value.style[props.index].name,
                        label: props.data.value.style[props.index].label,
                        // label: checkboxLabel.value,
                        size: props.data.value.style[props.index].size,
                        disabled: props.data.value.style[props.index].disabled
                    }}/>
                </div>
            } else {
                return <div class="preview-block" style={blockStyles.value} ref={blockRef}>
                    <RenderComponent/>
                </div>
            }

            // }
        }
    }
})