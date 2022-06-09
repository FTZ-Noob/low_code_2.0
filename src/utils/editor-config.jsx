// 列表区可以显示所有的物料
// key对应的组件映射关系

import {ElButton, ElInput} from 'element-plus'
import {
    SCard,
    SLoginReg,
    SCheckbox,
    SRadio,
    SButton,
    SDatetime,
    SPaper,
    SNumberInput,
    SChat,
    SInfoPanel
} from "scene-ui";
import {ref} from "vue";

function createEditorConfig() {
    // 组件列表
    const componentList = [];
    // 组件映射关系
    const componentMap = {};

    return {
        componentList,
        componentMap,
        register: (component) => {
            componentList.push(component);
            componentMap[component.key] = component;
        }
    }
}

export let registerConfig = createEditorConfig();
// console.log(registerConfig)

registerConfig.register({
    label: '文本',
    preview: () => <span>预览文本</span>,
    render: () => <span>渲染文本</span>,
    key: "text"
})

registerConfig.register({
    label: '按钮',
    preview: () => <SButton>预览按钮</SButton>,
    render: () => <ElButton>渲染按钮</ElButton>,
    key: "button"
})

const temp = ref("")
registerConfig.register({
    label: '输入框',
    preview: () => <ElInput placeholder="预览输入框"/>,
    render: () => <ElInput v-model={temp}/>,
    key: "input"
})

registerConfig.register({
    label: '卡片',
    preview: () => <SCard/>,
    render: () => <SCard/>,
    key: "card"
})

registerConfig.register({
    label: '纸片',
    preview: () => <SPaper label={"默认内容"}/>,
    render: () => <SPaper/>,
    key: "paper"
})

registerConfig.register({
    label: '单选框',
    preview: () => <SRadio label="默认"></SRadio>,
    render: () => <SRadio label="默认"></SRadio>,
    key: "radio"
})

registerConfig.register({
    label: '多选框',
    preview: () => <SCheckbox label="默认"></SCheckbox>,
    render: () => <SCheckbox label="默认"></SCheckbox>,
    key: "checkbox"
})

registerConfig.register({
    label: '加载',
    preview: () => <SButton>Loading</SButton>,
    render: () => <SButton>Loading</SButton>,
    key: "loading"
})

registerConfig.register({
    label: '消息提示',
    preview: () => <SButton theme={'info'}>Message</SButton>,
    render: () => <SButton>Message</SButton>,
    key: "message"
})

registerConfig.register({
    label: '对话框',
    preview: () => <SButton>Show Dialog</SButton>,
    render: () => <SButton>Show Dialog</SButton>,
    key: "dialog"
})

const num = ref(0)
registerConfig.register({
    label: '数字选择器',
    preview: () => <SNumberInput></SNumberInput>,
    render: () => <SNumberInput v-model={num.value}></SNumberInput>,
    key: "numberInput"
})

registerConfig.register({
    label: '日期时间选择器',
    preview: () => <SDatetime></SDatetime>,
    render: () => <SDatetime></SDatetime>,
    key: "datetime"
})

const githubObj = {}
registerConfig.register({
    label: '信息介绍',
    preview: () => <SInfoPanel width={150} info={githubObj} height={150}/>,
    render: () => <SInfoPanel/>,
    key: "information"
})

const DefOnLogin = (p) => new Promise(r => r({done: true}));
const DefOnReg = (p) => new Promise(r => r({done: true}));
registerConfig.register({
    label: '登录组件',
    preview: () => <img src={require('./login.png')} style={{width: "220px"}}/>,
    render: () => <SLoginReg onLogin={DefOnLogin} onReg={DefOnReg}></SLoginReg>,
    key: "login"
})


registerConfig.register({
    label: '聊天组件',
    preview: () => <img src={require('./chat.png')} style={{width: "220px"}}/>,
    render: () => <SChat chatID="temp" send={(p) => new Promise(r => r({done: true}))}/>,
    key: "chat"
})


// const temp = ref("")
// const options = ref([
//     'option1',
//     'option2',
//     'option3',
//     'option4',
//     'option5',
//     'option6'
// ])
// const str = ref('input')

// registerConfig.register(({
//     label: '选择器',
//     preview: () => <SSelect></SSelect>,
//     render:  () =>  <SSelect v-model={temp.value} name={str.value} options={options.value}
//                                     disabledOptions={[false, true, false, false, false, false]}>
//     </SSelect>,
//     key: "select"
//
// }))




