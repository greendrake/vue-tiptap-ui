<template>
    <Button
        v-if="show && editor && editor.isEditable"
        type="button"
        :class="className"
        :disabled="isDisabled"
        data-style="ghost"
        :data-active-state="isActive ? 'on' : 'off'"
        :data-disabled="isDisabled"
        role="button"
        :tabindex="-1"
        :aria-label="type"
        :aria-pressed="isActive"
        :tooltip="formattedName"
        :shortcut-keys="shortcutKey"
        @click="handleClick"
    >
        <component :is="Icon" class="tiptap-button-icon" />
        <span v-if="text" class="tiptap-button-text">{{ text }}</span>
    </Button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Editor } from '@tiptap/vue-3'
import { isMarkInSchema } from '../../utils'
import { useEditor } from '../../composables'
import Button from '../Button.vue'

// Icons
import BoldIcon from '../icons/Bold.vue'
import ItalicIcon from '../icons/Italic.vue'
import UnderlineIcon from '../icons/Underline.vue'
import StrikeIcon from '../icons/Strike.vue'
import Code2Icon from '../icons/Code2.vue'
import SuperscriptIcon from '../icons/Superscript.vue'
import SubscriptIcon from '../icons/Subscript.vue'

export type Mark =
    | 'bold'
    | 'italic'
    | 'strike'
    | 'code'
    | 'underline'
    | 'superscript'
    | 'subscript'

interface Props {
    type: Mark
    text?: string
    hideWhenUnavailable?: boolean
    className?: string
    disabled?: boolean
}

interface Emits {
    (_e: 'click', _event: MouseEvent): void
}

const props = withDefaults(defineProps<Props>(), {
    text: '',
    hideWhenUnavailable: false,
    className: '',
    disabled: false
})

// Inject the editor instance
const editor = useEditor()

const emit = defineEmits<Emits>()

const markIcons = {
    bold: BoldIcon,
    italic: ItalicIcon,
    underline: UnderlineIcon,
    strike: StrikeIcon,
    code: Code2Icon,
    superscript: SuperscriptIcon,
    subscript: SubscriptIcon
}

const markShortcutKeys: Partial<Record<Mark, string>> = {
    bold: 'Ctrl-b',
    italic: 'Ctrl-i',
    underline: 'Ctrl-u',
    strike: 'Ctrl-Shift-s',
    code: 'Ctrl-e',
    superscript: 'Ctrl-.',
    subscript: 'Ctrl-,'
}

const canToggleMark = (editorInstance: Editor | null, type: Mark): boolean => {
    if (!editorInstance) return false

    try {
        return editorInstance.can().toggleMark(type)
    } catch {
        return false
    }
}

const isMarkActive = (editorInstance: Editor | null, type: Mark): boolean => {
    if (!editorInstance) return false
    return editorInstance.isActive(type)
}

const toggleMark = (editorInstance: Editor | null, type: Mark): void => {
    if (!editorInstance) return
    editorInstance.chain().focus().toggleMark(type).run()
}

const isMarkButtonDisabled = (
    editorInstance: Editor | null,
    type: Mark,
    userDisabled: boolean = false
): boolean => {
    if (!editorInstance) return true
    if (userDisabled) return true
    if (editorInstance.isActive('codeBlock')) return true
    if (!canToggleMark(editorInstance, type)) return true
    return false
}

const shouldShowMarkButton = (params: {
    editor: Editor | null
    type: Mark
    hideWhenUnavailable: boolean
    markInSchema: boolean
}): boolean => {
    const {
        editor: editorInstance,
        type,
        hideWhenUnavailable,
        markInSchema
    } = params

    if (!markInSchema || !editorInstance) {
        return false
    }

    if (hideWhenUnavailable) {
        if (!canToggleMark(editorInstance, type)) {
            return false
        }
    }

    return true
}

const getFormattedMarkName = (type: Mark): string => {
    return type.charAt(0).toUpperCase() + type.slice(1)
}

// Computed properties
const markInSchema = computed(() => isMarkInSchema(props.type, editor.value))
const isDisabled = computed(() =>
    isMarkButtonDisabled(editor.value, props.type, props.disabled)
)
const isActive = computed(() => isMarkActive(editor.value, props.type))
const Icon = computed(() => markIcons[props.type])
const shortcutKey = computed(() => markShortcutKeys[props.type])
const formattedName = computed(() => getFormattedMarkName(props.type))

const show = computed(() => {
    return shouldShowMarkButton({
        editor: editor.value,
        type: props.type,
        hideWhenUnavailable: props.hideWhenUnavailable,
        markInSchema: markInSchema.value
    })
})

const handleClick = (event: MouseEvent) => {
    emit('click', event)

    if (!event.defaultPrevented && !isDisabled.value && editor) {
        toggleMark(editor.value, props.type)
    }
}
</script>
