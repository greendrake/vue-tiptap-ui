<template>
    <div class="tiptap-toolbar">
        <!-- Text formatting buttons -->
        <div class="toolbar-group">
            <MarkButton type="bold" />
            <MarkButton type="italic" />
            <MarkButton type="underline" />
            <MarkButton type="strike" />
            <MarkButton type="code" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Heading buttons -->
        <div class="toolbar-group">
            <HeadingButton :level="1" />
            <HeadingButton :level="2" />
            <HeadingButton :level="3" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- List buttons -->
        <div class="toolbar-group">
            <ListButton type="bulletList" />
            <ListButton type="orderedList" />
            <ListButton type="taskList" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Text alignment -->
        <div class="toolbar-group">
            <TextAlignButton alignment="left" />
            <TextAlignButton alignment="center" />
            <TextAlignButton alignment="right" />
            <TextAlignButton alignment="justify" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Advanced formatting -->
        <div class="toolbar-group">
            <HighlightButton />
            <MarkButton type="superscript" />
            <MarkButton type="subscript" />
        </div>

        <!-- Separator -->
        <div class="toolbar-separator" />

        <!-- Undo/Redo -->
        <div class="toolbar-group">
            <UndoRedoButton type="undo" />
            <UndoRedoButton type="redo" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    MarkButton,
    HeadingButton,
    ListButton,
    TextAlignButton,
    HighlightButton,
    UndoRedoButton
} from '../../lib'
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
