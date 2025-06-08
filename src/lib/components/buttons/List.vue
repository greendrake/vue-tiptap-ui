<template>
    <Button
        v-if="editor && editor.isEditable"
        :aria-label="type"
        :tooltip="type"
        @click="handleClick"
    >
        {{ buttonText }}
    </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import Button from '../Button.vue'

interface Props {
    type: 'bulletList' | 'orderedList' | 'taskList'
    editor?: Editor | null
}

const props = defineProps<Props>()

const buttonText = computed(() => {
    switch (props.type) {
        case 'bulletList':
            return '•'
        case 'orderedList':
            return '1.'
        case 'taskList':
            return '☑'
        default:
            return 'List'
    }
})

const handleClick = () => {
    if (props.editor) {
        if (props.type === 'taskList') {
            props.editor.chain().focus().toggleTaskList().run()
        } else {
            props.editor
                .chain()
                .focus()
                .toggleList(props.type, 'listItem')
                .run()
        }
    }
}
</script>
