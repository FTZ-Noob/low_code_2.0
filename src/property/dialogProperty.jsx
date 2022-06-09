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
                            <el-form-item label="标题">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.title}/>
                            </el-form-item>
                            <el-form-item label="内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.context}/>
                            </el-form-item>
                            <el-form-item label="对话框宽度">
                                <el-input-number
                                    style="width: 100%"
                                    // change={events.emit("start")}
                                    // controls-position="right"
                                    step={1}
                                    v-model={attrs_style.value.attribute.width}>
                                </el-input-number>
                            </el-form-item>
                            <el-form-item label="遮罩层">
                                <el-select v-model={attrs_style.value.attribute.modal}>
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
                            <el-form-item label="滚动锁定">
                                <el-select v-model={attrs_style.value.attribute.lockScroll}>
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
                            <el-form-item label="点击 modal 关闭 Dialog">
                                <el-select v-model={attrs_style.value.attribute.closeOnClickModal}>
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
                        </el-form>
                    </div>
                }
            </div>
        }
    }
})