<template>
    <div class="simple-editor">
        <Editor
            v-model="content"
            :extensions="extensions"
            class="editor-content"
        >
            <template #toolbar>
                <div class="simple-toolbar">
                    <MarkButton type="bold" />
                    <MarkButton type="italic" />
                    <MarkButton type="underline" />
                    <HeadingButton :level="1" />
                    <HeadingButton :level="2" />
                    <ListButton type="bulletList" />
                    <UndoRedoButton type="undo" />
                    <UndoRedoButton type="redo" />
                </div>
            </template>
        </Editor>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Editor from '@/lib/components/Editor.vue'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { MarkButton, HeadingButton, ListButton, UndoRedoButton } from '@/lib'
const extensions = [StarterKit, Underline]
const content = ref('<p>Start typing your content here...</p>')
</script>

<style scoped>
.simple-toolbar {
    display: flex;
    gap: 4px;
    padding: 8px;
    background: #f8f9fa;
    border-bottom: 1px solid #ddd;
}

:deep(.ProseMirror) {
    outline: none;
}
</style>
