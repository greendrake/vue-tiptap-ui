import { inject, provide, shallowRef, type InjectionKey, type Ref } from 'vue'
import type { Editor } from '@tiptap/vue-3'

const EditorInjectionKey: InjectionKey<Ref<Editor | null>> =
    Symbol('tiptap-editor')

export function useEditor(): Ref<Editor | null> {
    const editorRef = inject(EditorInjectionKey, null)

    if (!editorRef) {
        throw new Error(
            'useEditor must be used within an Editor component or its descendants'
        )
    }

    return editorRef
}

export function provideEditor(editor: Editor): void {
    const editorRef = shallowRef(editor)
    provide(EditorInjectionKey, editorRef)
}
