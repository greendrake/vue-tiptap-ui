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
import { useEditor } from '../../composables'
import Button from '../Button.vue'

interface Props {
    type: 'undo' | 'redo'
}

const props = defineProps<Props>()

// Inject the editor instance
const editor = useEditor()

const handleClick = () => {
    if (editor.value) {
        if (props.type === 'undo') {
            editor.value.chain().focus().undo().run()
        } else {
            editor.value.chain().focus().redo().run()
        }
    }
}
</script>
