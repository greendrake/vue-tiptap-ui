<template>
    <div id="app">
        <header>
            <h1>Vue Tiptap UI Components</h1>
            <p>A UI component library for Tiptap editor in Vue 3</p>
        </header>
        <main>
            <div class="demo-section">
                <h2>Advanced Editor</h2>
                <Editor />
            </div>
            <div class="demo-section">
                <h2>Simple Editor</h2>
                <SimpleEditor />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import Editor from './components/Editor.vue'
import SimpleEditor from './components/SimpleEditor.vue'
</script>

<style scoped>
#app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

header {
    text-align: center;
    margin-bottom: 3rem;
}

header h1 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

header p {
    color: #7f8c8d;
    font-size: 1.1rem;
}

.demo-section {
    margin-bottom: 3rem;
}

.demo-section h2 {
    color: #34495e;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 0.5rem;
}
</style>
