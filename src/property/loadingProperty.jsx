import {computed, defineComponent} from "vue";
import {ElSelect, ElForm, ElFormItem, ElInputNumber, ElOption, ElInput, ElColorPicker} from "element-plus";


export default defineComponent({
    props: {
        modelValue: {type: Object}
    },
    components: {
        ElOption,
        ElForm,
        ElInput,
        ElFormItem,
        ElInputNumber,
        ElColorPicker,
        ElSelect
    },

    setup: function (props) {
        const attrs_style = computed({
            get() {
                return props.modelValue
            }
        })

        return () => {
            // console.log(attrs_style.value.attribute.label)
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
                            <el-form-item label="显示位置">
                                <el-select v-model={attrs_style.value.attribute.target}>
                                    <el-option
                                        label={"全屏"}
                                        value={'body'}
                                    />
                                    <el-option
                                        label={"局部"}
                                        value={'#canvas001'}
                                    />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="全部占据">
                                <el-select v-model={attrs_style.value.attribute.fullScreen}>
                                    <el-option
                                        label={"是"}
                                        value={true}
                                    />
                                    <el-option
                                        label={"否"}
                                        value={false}
                                    />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="loading文本内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.text}/>
                            </el-form-item>
                            <el-form-item label="loading组件关闭">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.onClose}/>
                            </el-form-item>
                        </el-form>
                    </div>
                }
            </div>
        }
    }
})