<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import type { AnyExtension } from '@tiptap/core'

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

defineExpose({
    editor
})

watch(value, (v: string | undefined) => {
    if (v !== undefined && editor.getHTML() !== v) {
        editor.commands.setContent(v, false)
    }
})

onBeforeUnmount(() => editor.destroy())
</script>
<template>
    <editor-content :editor="editor" />
</template>
