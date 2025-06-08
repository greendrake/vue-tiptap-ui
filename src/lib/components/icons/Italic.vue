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
            d="M10 4V7H12.21L8.79 17H6V20H14V17H11.79L15.21 7H18V4H10Z"
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
