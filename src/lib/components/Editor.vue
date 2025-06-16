<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import type { AnyExtension } from '@tiptap/core'
import { provideEditor } from '../composables'

interface Props {
    extensions?: AnyExtension[]
}

const value = defineModel<string>()
const props = withDefaults(defineProps<Props>(), {
    extensions: () => []
})

const editor = new Editor({
    extensions: props.extensions,
    content: value.value,
    onUpdate: () => {
        value.value = editor.getHTML()
    }
})

// Provide the editor to descendant components
provideEditor(editor)

// Just in case any outer components need to access the editor instance:
defineExpose({
    editor
})

watch(value, (v: string | undefined) => {
    if (v !== undefined && editor.getHTML() !== v) {
        editor.commands.setContent(v, false)
    }
})

onBeforeUnmount(() => {
    editor.destroy()
})
</script>
<template>
    <div class="tiptap-editor-container">
        <!-- Slot for toolbar and other controls -->
        <slot name="toolbar" />

        <!-- The actual editor content -->
        <editor-content :editor="editor" class="tiptap-editor-content" />

        <!-- Default slot for additional content -->
        <slot />
    </div>
</template>

<style scoped>
.tiptap-editor-container {
    border: 1px solid #e1e5e9;
    border-radius: 0.75rem;
    overflow: hidden;
}

.tiptap-editor-content {
    min-height: 200px;
    padding: 1rem;
}
</style>
