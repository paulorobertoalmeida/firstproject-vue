<template>
<div>
    <h1>This is My new component</h1>
    <h2>{{ subtitle }}</h2>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    name: 'My new component',
    data() {
        return {
            subtitle: 'This is My new component baby',
        }
    },
})
</script>
