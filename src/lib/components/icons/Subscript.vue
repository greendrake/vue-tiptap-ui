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
            d="M16 16H22V18H16V16ZM5 7L8.5 13L5 19H7L9.5 15L12 19H14L10.5 13L14 7H12L9.5 11L7 7H5ZM16 14H20V15H17V16H20V17H16V14Z"
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
