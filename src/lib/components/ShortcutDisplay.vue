<template>
    <div v-if="shortcuts.length > 0">
        <template v-for="(key, index) in shortcuts" :key="index">
            <kbd v-if="index > 0">+</kbd>
            <kbd>{{ key }}</kbd>
        </template>
    </div>
</template>

<script setup lang="ts">
interface Props {
    shortcuts: string[]
}

defineProps<Props>()
</script>

<style scoped>
kbd {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.25rem;
    padding: 0.125rem 0.25rem;
    font-size: 0.75rem;
    font-family: monospace;
}
</style>
