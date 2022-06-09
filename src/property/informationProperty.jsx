import {computed, defineComponent} from "vue";
import {ElSelect, ElOption, ElColorPicker, ElForm, ElFormItem, ElInput, ElInputNumber} from "element-plus";


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
        ElSelect,
        ElOption
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
                                    style={"width: 100%"}
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
                            <el-form-item label="主题">
                                <el-select v-model={attrs_style.value.attribute.theme}>
                                    <el-option
                                        label={"main"}
                                        value={'main'}
                                    />
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
                            <el-form-item label="类型">
                                <el-select v-model={attrs_style.value.attribute.type}>
                                    <el-option
                                        label={"默认"}
                                        value={'info'}
                                    />
                                    <el-option
                                        label={"github"}
                                        value={'github'}
                                    />
                                </el-select>
                            </el-form-item>
                            <el-form-item label="标题">
                                <el-input type="text" v-model={attrs_style.value.attribute.info.name}></el-input>
                            </el-form-item>

                            <el-form-item label="synopsis内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.info.synopsis}></el-input>
                            </el-form-item>
                            <el-form-item label="stars内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.info.stars}></el-input>
                            </el-form-item>
                            <el-form-item label="forks内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.info.forks}></el-input>
                            </el-form-item>
                            <el-form-item label="languageList内容">
                                <el-input type="textarea" v-model={attrs_style.value.attribute.info.languageList}></el-input>
                            </el-form-item>



                        </el-form>
                    </div>
                }
            </div>
        }
    }
})