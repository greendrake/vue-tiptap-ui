# Vue Tiptap UI Components

A Vue 3 UI component library for [Tiptap](https://tiptap.dev/product/editor) editor.
This is a port from the [React original](https://github.com/ueberdosis/tiptap-ui-components).

## Installation
```bash
yarn add vue-tiptap-ui
```

## Usage

Include the styles in your app-level CSS:

```sass
@use 'vue-tiptap-ui/style.css';
```

Then import and use `Editor` in your Vue components as follows (put together your own toolbar as you see fit):

```vue
<template>
    <div class="my-editor">
        <div class="my-editor-toolbar" v-if="edRef">
            <MarkButton type="bold" :editor="edRef.editor" />
            <MarkButton type="italic" :editor="edRef.editor" />
            <MarkButton type="underline" :editor="edRef.editor" />
        </div>
        <Editor ref="edRef" v-model="content" :extensions="extensions" class="editor-content" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Editor, MarkButton } from 'vue-tiptap-ui'
const edRef = ref()
const extensions = [StarterKit, Underline]
const content = defineModel()
</script>
```

See `src/example` which is a full Vue3 demo app: checkout the entire repo, then run `yarn dev` to see it in action.