<template>
    <svg
        width="24"
        height="24"
        :class="className"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        v-bind="$attrs"
    >
        <path
            d="M14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6ZM9.4 16.6L8 18L2 12L8 6L9.4 7.4L4.8 12L9.4 16.6Z"
            fill="currentColor"
        />
    </svg>
</template>

<script setup lang="ts">
interface Props {
    className?: string
}

withDefaults(defineProps<Props>(), {
    className: ''
})
</script>
