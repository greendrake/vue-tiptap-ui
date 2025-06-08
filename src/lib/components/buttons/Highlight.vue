<template>
    <Button
        v-if="editor && editor.isEditable"
        aria-label="Highlight"
        tooltip="Highlight"
        @click="handleClick"
    >
        🖍
    </Button>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import Button from '../Button.vue'

interface Props {
    editor?: Editor | null
}

const props = defineProps<Props>()

const handleClick = () => {
    if (props.editor) {
        props.editor.chain().focus().toggleHighlight().run()
    }
}
</script>
