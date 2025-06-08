<template>
    <div class="tiptap-editor-wrapper">
        <Toolbar v-if="edRef" :editor="edRef.editor" />
        <Editor
            ref="edRef"
            v-model="content"
            :extensions="extensions"
            class="tiptap-editor"
        />
        Raw HTML view/edit:
        <textarea v-model="content"></textarea>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Editor from '@/lib/components/Editor.vue'
import StarterKit from '@tiptap/starter-kit'
import { Highlight } from '@tiptap/extension-highlight'
import { Link } from '@tiptap/extension-link'
import { Underline } from '@tiptap/extension-underline'
import { Subscript } from '@tiptap/extension-subscript'
import { Superscript } from '@tiptap/extension-superscript'
import { TextAlign } from '@tiptap/extension-text-align'
import { TaskList } from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import { Typography } from '@tiptap/extension-typography'
import { Image } from '@tiptap/extension-image'

import Toolbar from './Toolbar.vue'

const extensions = [
    StarterKit,
    Highlight,
    Link.configure({
        openOnClick: false
    }),
    Underline,
    Subscript,
    Superscript,
    TextAlign.configure({
        types: ['heading', 'paragraph']
    }),
    TaskList,
    TaskItem.configure({
        nested: true
    }),
    Typography,
    Image.configure({
        inline: true
    })
]

const edRef = ref()

const content = ref(`
    <h1>Welcome to Vue Tiptap UI Components!</h1>
    <p>This is a demo of the ported Tiptap UI components for Vue 3. You can:</p>
    <ul>
      <li><strong>Bold</strong> and <em>italic</em> text</li>
      <li><u>Underline</u> and <s>strikethrough</s> text</li>
      <li>Create <mark>highlighted</mark> text</li>
      <li>Add <code>inline code</code></li>
    </ul>
    <p>Try using the toolbar above to format this text!</p>
  `)
</script>

<style scoped>
.tiptap-editor-wrapper {
    border: 1px solid #e1e5e9;
    border-radius: 0.75rem;
    overflow: hidden;
    textarea {
        width: 100%;
        height: 100px;
    }
}

.tiptap-editor {
    min-height: 200px;
    padding: 1rem;
}

:deep(.ProseMirror) {
    outline: none;
    min-height: 200px;
    line-height: 1.6;
}

:deep(.ProseMirror h1) {
    font-size: 1.875rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem 0;
}

:deep(.ProseMirror h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.25rem 0 0.75rem 0;
}

:deep(.ProseMirror h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
}

:deep(.ProseMirror p) {
    margin: 0.75rem 0;
}

:deep(.ProseMirror ul, .ProseMirror ol) {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
}

:deep(.ProseMirror li) {
    margin: 0.25rem 0;
}

:deep(.ProseMirror mark) {
    background-color: #fef08a;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
}

:deep(.ProseMirror code) {
    background-color: #f1f5f9;
    color: #e11d48;
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
}
</style>
