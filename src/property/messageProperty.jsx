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
                            <el-form-item label="消息类型">
                                <el-select v-model={attrs_style.value.attribute.type}>
                                    <el-option
                                        label={"info"}
                                        value={'info'}
                                    />
                                    <el-option
                                        label={"success"}
                                        value={'success'}
                                    />
                                    <el-option
                                        label={"warning" }
                                        value={'warning'}
                                    />
                                    <el-option
                                        label={"error"}
                                        value={'error'}
                                    />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="显示时间">
                                <el-input-number
                                    style="width: 100%"
                                    // change={events.emit("start")}
                                    // controls-position="right"
                                    step={500}
                                    v-model={attrs_style.value.attribute.duration}>
                                </el-input-number>
                            </el-form-item>
                            <el-form-item label="message文本内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.text}/>
                            </el-form-item>
                            <el-form-item label="显示关闭按钮">
                                <el-select v-model={attrs_style.value.attribute.showCloseButton}>
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