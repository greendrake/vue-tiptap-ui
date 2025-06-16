<template>
    <Button
        v-if="editor && editor.isEditable"
        :aria-label="`Align ${alignment}`"
        :tooltip="`Align ${alignment}`"
        @click="handleClick"
    >
        {{ alignmentSymbol }}
    </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useEditor } from '../../composables'
import Button from '../Button.vue'

interface Props {
    alignment: 'left' | 'center' | 'right' | 'justify'
}

const props = defineProps<Props>()

// Inject the editor instance
const editor = useEditor()

const alignmentSymbol = computed(() => {
    switch (props.alignment) {
        case 'left':
            return '⫷'
        case 'center':
            return '⫸'
        case 'right':
            return '⫷'
        case 'justify':
            return '⫹'
        default:
            return '⫷'
    }
})

const handleClick = () => {
    if (editor.value) {
        editor.value.chain().focus().setTextAlign(props.alignment).run()
    }
}
</script>
