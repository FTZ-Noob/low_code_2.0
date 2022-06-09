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
                            <el-form-item label="内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.label}/>
                            </el-form-item>
                            <el-form-item label="多选框大小">
                                <el-select v-model={attrs_style.value.attribute.size}>
                                    <el-option
                                        label={"小"}
                                        value={"small"}
                                    />
                                    <el-option
                                        label={"中"}
                                        value={"default"}
                                    />
                                    <el-option
                                        label={"大"}
                                        value={"large"}
                                    />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="是否禁用">
                                <el-select v-model={attrs_style.value.attribute.disabled}>
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