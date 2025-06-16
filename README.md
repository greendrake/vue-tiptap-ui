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
    <Editor
        v-model="content"
        :extensions="extensions"
    >
        <template #toolbar>
            <div>
                <MarkButton type="bold" />
                <MarkButton type="italic" />
                <MarkButton type="underline" />
            </div>
        </template>
    </Editor>
</template>

<script setup>
import StarterKit from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Editor, MarkButton } from 'vue-tiptap-ui'
const extensions = [StarterKit, Underline]
const content = defineModel()
</script>
```

See `src/example` which is a full Vue3 demo app: checkout the entire repo, then run `yarn dev` to see it in action.