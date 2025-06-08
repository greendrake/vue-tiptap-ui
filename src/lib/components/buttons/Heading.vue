<template>
    <Button
        v-if="editor && editor.isEditable"
        :aria-label="`Heading ${level}`"
        :tooltip="`Heading ${level}`"
        @click="handleClick"
    >
        H{{ level }}
    </Button>
</template>

<script setup lang="ts">
import type { Editor } from '@tiptap/vue-3'
import Button from '../Button.vue'

interface Props {
    level: 1 | 2 | 3 | 4 | 5 | 6
    editor?: Editor | null
}

const props = defineProps<Props>()

const handleClick = () => {
    if (props.editor) {
        props.editor.chain().focus().toggleHeading({ level: props.level }).run()
    }
}
</script>
