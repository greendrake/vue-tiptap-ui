import type { Editor } from '@tiptap/vue-3'

/**
 * Safely executes an editor operation with error handling
 * @param editor - The Tiptap editor instance
 * @param operation - The operation to execute on the editor
 * @returns The result of the operation or false if editor is null or operation fails
 */
function safeEditorOperation<T>(
    editor: Editor | null,
    operation: (_ed: Editor) => T
): T | false {
    if (!editor) return false

    try {
        return operation(editor)
    } catch {
        return false
    }
}

export function isMarkInSchema(
    markName: string,
    editor: Editor | null
): boolean {
    return safeEditorOperation(
        editor,
        _ed => _ed.schema.marks[markName] !== undefined
    ) as boolean
}

export function isNodeInSchema(
    nodeName: string,
    editor: Editor | null
): boolean {
    return safeEditorOperation(
        editor,
        _ed => _ed.schema.nodes[nodeName] !== undefined
    ) as boolean
}

export function canSetTextAlign(
    editor: Editor | null,
    alignment: string
): boolean {
    return safeEditorOperation(editor, _ed =>
        _ed.can().setTextAlign(alignment)
    ) as boolean
}

export function isTextAlignActive(
    editor: Editor | null,
    alignment: string
): boolean {
    return safeEditorOperation(editor, _ed =>
        _ed.isActive({ textAlign: alignment })
    ) as boolean
}

export function canToggleList(
    editor: Editor | null,
    listType: string
): boolean {
    return safeEditorOperation(editor, _ed =>
        _ed.can().toggleList(listType, 'listItem')
    ) as boolean
}

export function isListActive(editor: Editor | null, listType: string): boolean {
    return safeEditorOperation(editor, _ed => _ed.isActive(listType)) as boolean
}
