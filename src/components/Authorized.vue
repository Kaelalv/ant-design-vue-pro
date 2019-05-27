<script>
import { check } from "../utils/auth";
// 权限组件 --- 弊端（书写麻烦；但是比权限指令灵活，可以动态更改权限值）
export default {
    functional: true,
    props: {
        authority: {
            type: Array,
            required: true
        }
    },
    render(h, context) {
        const { props, scopedSlots } = context;
        console.log(scopedSlots.default());
        return check(props.authority) ? scopedSlots.default() : null;
    }
}
</script>

<style></style>
