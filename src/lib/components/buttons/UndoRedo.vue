<template>
    <Button
        v-if="editor && editor.isEditable"
        :aria-label="type"
        :tooltip="type"
        @click="handleClick"
    >
        {{ type === 'undo' ? '↶' : '↷' }}
    </Button>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import Button from '../Button.vue'

interface Props {
    type: 'undo' | 'redo'
    editor?: Editor | null
}

const props = defineProps<Props>()

const handleClick = () => {
    if (props.editor) {
        if (props.type === 'undo') {
            props.editor.chain().focus().undo().run()
        } else {
            props.editor.chain().focus().redo().run()
        }
    }
}
</script>
