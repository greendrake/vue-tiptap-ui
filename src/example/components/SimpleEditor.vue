<template>
    <div class="simple-editor">
        <div v-if="edRef" class="simple-toolbar">
            <MarkButton type="bold" :editor="edRef.editor" />
            <MarkButton type="italic" :editor="edRef.editor" />
            <MarkButton type="underline" :editor="edRef.editor" />
            <HeadingButton :level="1" :editor="edRef.editor" />
            <HeadingButton :level="2" :editor="edRef.editor" />
            <ListButton type="bulletList" :editor="edRef.editor" />
            <UndoRedoButton type="undo" :editor="edRef.editor" />
            <UndoRedoButton type="redo" :editor="edRef.editor" />
        </div>
        <Editor
            ref="edRef"
            v-model="content"
            :extensions="extensions"
            class="editor-content"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Editor from '@/lib/components/Editor.vue'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { MarkButton, HeadingButton, ListButton, UndoRedoButton } from '@/lib'
const edRef = ref()
const extensions = [StarterKit, Underline]
const content = ref('<p>Start typing your content here...</p>')
</script>

<style scoped>
.simple-editor {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
}

.simple-toolbar {
    display: flex;
    gap: 4px;
    padding: 8px;
    background: #f8f9fa;
    border-bottom: 1px solid #ddd;
}

.editor-content {
    padding: 16px;
    min-height: 200px;
}

:deep(.ProseMirror) {
    outline: none;
}
</style>
