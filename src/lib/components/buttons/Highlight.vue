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
import { useEditor } from '../../composables'
import Button from '../Button.vue'

// Inject the editor instance
const editor = useEditor()

const handleClick = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleHighlight().run()
    }
}
</script>
