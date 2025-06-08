<template>
    <div class="tiptap-toolbar">
        <!-- Text formatting buttons -->
        <div class="toolbar-group">
            <MarkButton type="bold" :editor="editor" />
            <MarkButton type="italic" :editor="editor" />
            <MarkButton type="underline" :editor="editor" />
            <MarkButton type="strike" :editor="editor" />
            <MarkButton type="code" :editor="editor" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Heading buttons -->
        <div class="toolbar-group">
            <HeadingButton :level="1" :editor="editor" />
            <HeadingButton :level="2" :editor="editor" />
            <HeadingButton :level="3" :editor="editor" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- List buttons -->
        <div class="toolbar-group">
            <ListButton type="bulletList" :editor="editor" />
            <ListButton type="orderedList" :editor="editor" />
            <ListButton type="taskList" :editor="editor" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Text alignment -->
        <div class="toolbar-group">
            <TextAlignButton alignment="left" :editor="editor" />
            <TextAlignButton alignment="center" :editor="editor" />
            <TextAlignButton alignment="right" :editor="editor" />
            <TextAlignButton alignment="justify" :editor="editor" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Advanced formatting -->
        <div class="toolbar-group">
            <HighlightButton :editor="editor" />
            <MarkButton type="superscript" :editor="editor" />
            <MarkButton type="subscript" :editor="editor" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Undo/Redo -->
        <div class="toolbar-group">
            <UndoRedoButton type="undo" :editor="editor" />
            <UndoRedoButton type="redo" :editor="editor" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import {
    MarkButton,
    HeadingButton,
    ListButton,
    TextAlignButton,
    HighlightButton,
    UndoRedoButton
} from '../../lib'

interface Props {
    editor: Editor | null
}

defineProps<Props>()
</script>

<style lang="scss">
.tiptap-toolbar {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    background-color: var(--tt-toolbar-bg-color);
    border-bottom: 1px solid var(--tt-toolbar-border-color);
    gap: 0.5rem;
    flex-wrap: wrap;
    min-height: 3.5rem;
}

.toolbar-group {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.toolbar-separator {
    width: 1px;
    height: 1.5rem;
    background-color: var(--tt-toolbar-border-color);
    margin: 0 0.25rem;
}
</style>
