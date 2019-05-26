import { check } from "../utils/auth";
//  权限指令 --- 弊端（后续不可以动态更改权限值
function install(Vue, options = {}) {
    Vue.directive(options.name || "auth", {
        inserted(el, binding) {
            if (!check(binding.value)) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        }
    });
}

export default { install };
