import {computed, defineComponent} from "vue";
import {ElColorPicker, ElForm, ElFormItem, ElInput, ElInputNumber} from "element-plus";


export default defineComponent({
    props: {
        modelValue: {type: Object}
    },
    components: {
        ElInput,
        ElForm,
        ElFormItem,
        ElInputNumber,
        ElColorPicker
    },

    setup: function (props) {
        const attrs_style = computed({
            get() {
                return props.modelValue
            }
        })


        return () => {
            return <div>
                {
                    <div>
                        <el-form label-position="top">
                            <el-form-item label="X 坐标">
                                <el-input-number
                                    style="width: 100%"
                                    // change={events.emit("start")}
                                    // controls-position="right"
                                    step={1}
                                    v-model={attrs_style.value.block.left}>
                                </el-input-number>
                            </el-form-item>
                            <el-form-item label="Y 坐标">
                                <el-input-number
                                    style="width: 100%"
                                    // controls-position="right"
                                    step={1}
                                    v-model={attrs_style.value.block.top}>
                                </el-input-number>
                            </el-form-item>
                            <el-form-item label="宽">
                                <el-input-number
                                    style="width: 100%"
                                    min={0}
                                    // controls-position="right"
                                    step={1}
                                    v-model={attrs_style.value.attribute.width}>
                                </el-input-number>
                            </el-form-item>
                            <el-form-item label="高">
                                <el-input-number
                                    style="width: 100%"
                                    min={0}
                                    // controls-position="right"
                                    step={1}
                                    v-model={attrs_style.value.attribute.height}>
                                </el-input-number>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="left">
                            <el-form-item label="背景色">
                                <el-color-picker v-model={attrs_style.value.attribute.background}/>
                            </el-form-item>
                        </el-form>
                        <el-form label-position="top">
                            <el-form-item label="透明度">
                                <el-input-number
                                    style="width: 100%"
                                    min={0}
                                    max={1}
                                    // controls-position="right"
                                    step={0.1}
                                    v-model={attrs_style.value.attribute.opacity}>
                                </el-input-number>
                            </el-form-item>
                        </el-form>
                    </div>
                }
            </div>
        }
    }
})