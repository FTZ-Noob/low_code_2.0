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
                        <h3 align={"center"}>暂无属性</h3>
                    </div>
                }
            </div>
        }
    }
})