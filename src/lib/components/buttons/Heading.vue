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
import { useEditor } from '../../composables'
import Button from '../Button.vue'

interface Props {
    level: 1 | 2 | 3 | 4 | 5 | 6
}

const props = defineProps<Props>()

// Inject the editor instance
const editor = useEditor()

const handleClick = () => {
    if (editor.value) {
        editor.value.chain().focus().toggleHeading({ level: props.level }).run()
    }
}
</script>
