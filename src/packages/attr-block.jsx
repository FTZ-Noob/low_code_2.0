import {computed, defineComponent, inject, onBeforeMount} from "vue";
import ButtonProperty from "../property/buttonProperty"
import TextProperty from "../property/textProperty"
import InputProperty from "../property/inputProperty"
import CardProperty from "../property/cardProperty"
import {ElForm, ElFormItem, ElInput, ElInputNumber, ElColorPicker} from 'element-plus'
import RadioProperty from "../property/radionProperty"
import CheckboxProperty from "@/property/CheckboxProperty";
import DialogProperty from "../property/dialogProperty"
import LoadingProperty from "../property/loadingProperty"
import messageProperty from "@/property/messageProperty";
import DatetimeProperty from "@/property/datetimeProperty"
import NumberInput from "@/property/numberInputProperty"
import Paper from "@/property/paperProperty"
import Login from "@/property/loginProperty"
import Chat from "@/property/chatProperty"
import Information from "@/property/informationProperty"

export default defineComponent({
    props: {
        modelValue: {type: Object}
    },
    components: {
        ElInput,
        ElForm,
        ElFormItem,
        ElInputNumber,
        ElColorPicker,
        ButtonProperty,
        TextProperty,
        InputProperty,
        CardProperty,
        RadioProperty
    },

    // emits: ['update:modelValue'],
    setup: function (props) {

        // 设置计算属性，以便于实现数据的双向绑定
        const data = computed({
            get() {
                return props.modelValue
            }
        })
        return () => {
            let Message;

            // 设置计算属性，用来实现组件和属性栏之间的数据绑定
            const attrs_style = computed(() => {
                let attribute = null;
                let block = null;
                return {attribute, block}
            })
            data.value.blocks.forEach((block, id) => {
                if (block.focus === true) {
                    attrs_style.value.block = data.value.blocks[id];
                    // console.log(typeof(attrs_style.value.block.left))
                    attrs_style.value.attribute = data.value.style[id];
                    // console.log(attrs_style.value.attribute.color)
                }
            })


            // console.log(JSON.stringify(attrs_style.value.attribute))
            let visual = false;

            if (attrs_style.value.block != null) {
                visual = true;

                if (attrs_style.value.block.key === "button") {
                    Message = (<ButtonProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "text") {
                    Message = (<TextProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "input") {
                    Message = (<InputProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "card") {
                    Message = (<CardProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "checkbox") {
                    Message = (<CheckboxProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "radio") {
                    Message = (<RadioProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "dialog") {
                    Message = (<DialogProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "loading") {
                    Message = (<LoadingProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "message") {
                    Message = (<messageProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "datetime") {
                    Message = (<DatetimeProperty v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "numberInput") {
                    Message = (<NumberInput v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "paper") {
                    Message = (<Paper v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "login") {
                    Message = (<Login v-model={attrs_style.value}/>)
                } else if (attrs_style.value.block.key === "chat") {
                    Message = (<Chat v-model={attrs_style.value}/>)
                }else if (attrs_style.value.block.key === "information") {
                    Message = (<Information v-model={attrs_style.value}/>)
                }
            }

            return <div>
                {
                    visual ? (
                        Message
                    ) : (<div>
                        <h3 align="center">请选择组件</h3>
                        <br/><br/>
                        <el-form label-position="top">
                            <el-form-item label="画布宽度">
                                <el-input v-model={data.value.container.width}></el-input>
                            </el-form-item>
                            <el-form-item label="画布高度">
                                <el-input v-model={data.value.container.height}></el-input>
                            </el-form-item>
                        </el-form>
                    </div>)
                }
            </div>
        }
    }
})