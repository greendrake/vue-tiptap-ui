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
import { useEditor } from '../../composables'
import Button from '../Button.vue'

interface Props {
    type: 'bulletList' | 'orderedList' | 'taskList'
}

const props = defineProps<Props>()

// Inject the editor instance
const editor = useEditor()

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
    if (editor.value) {
        if (props.type === 'taskList') {
            editor.value.chain().focus().toggleTaskList().run()
        } else {
            editor.value
                .chain()
                .focus()
                .toggleList(props.type, 'listItem')
                .run()
        }
    }
}
</script>
