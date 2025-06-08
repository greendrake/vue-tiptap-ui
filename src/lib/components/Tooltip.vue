<template>
    <div class="tooltip-container">
        <div
            ref="triggerRef"
            @mouseenter="showTooltip"
            @mouseleave="hideTooltip"
            @focus="showTooltip"
            @blur="hideTooltip"
        >
            <slot name="trigger" />
        </div>

        <Teleport to="body">
            <div
                v-if="isVisible"
                ref="floatingRef"
                class="tiptap-tooltip"
                :style="floatingStyles"
            >
                <slot name="content" />
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue'

interface Props {
    delay?: number
}

const props = withDefaults(defineProps<Props>(), {
    delay: 0
})

const isVisible = ref(false)
const triggerRef = ref<HTMLElement>()
const floatingRef = ref<HTMLElement>()

let timeoutId: ReturnType<typeof setTimeout> | null = null

const { floatingStyles } = useFloating(triggerRef, floatingRef, {
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [offset(5), flip(), shift({ padding: 5 })]
})

const showTooltip = () => {
    if (timeoutId) {
        clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
        isVisible.value = true
    }, props.delay)
}

const hideTooltip = () => {
    if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
    }
    isVisible.value = false
}
</script>

<style scoped>
.tooltip-container {
    display: inline-block;
}

.tiptap-tooltip {
    background-color: var(--tt-tooltip-bg-color);
    color: var(--tt-tooltip-text-color);
    padding: 0.5rem 0.75rem;
    border-radius: var(--tt-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: var(--tt-tooltip-shadow);
    z-index: 1000;
    max-width: 200px;
    word-wrap: break-word;
}
</style>
