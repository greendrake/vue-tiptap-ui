<template>
    <Button
        v-if="editor && editor.isEditable"
        :aria-label="`Align ${alignment}`"
        :tooltip="`Align ${alignment}`"
        @click="handleClick"
    >
        {{ alignmentSymbol }}
    </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import Button from '../Button.vue'

interface Props {
    alignment: 'left' | 'center' | 'right' | 'justify'
    editor?: Editor | null
}

const props = defineProps<Props>()

const alignmentSymbol = computed(() => {
    switch (props.alignment) {
        case 'left':
            return '⫷'
        case 'center':
            return '⫸'
        case 'right':
            return '⫷'
        case 'justify':
            return '⫹'
        default:
            return '⫷'
    }
})

const handleClick = () => {
    if (props.editor) {
        props.editor.chain().focus().setTextAlign(props.alignment).run()
    }
}
</script>
