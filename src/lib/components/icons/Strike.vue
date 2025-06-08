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
            d="M3 12H21V14H3V12ZM17.25 6.5C17.25 4.5 15.5 3 12.5 3C9.5 3 7.75 4.5 7.75 6.5H9.25C9.25 5.5 10.5 4.5 12.5 4.5C14.5 4.5 15.75 5.5 15.75 6.5C15.75 7.3 15.1 8 13.8 8.3L12.8 8.6L11.8 8.9C10.5 9.3 9 10.1 9 12H10.5C10.5 11.2 11.2 10.5 12.5 10.5C13.8 10.5 14.5 11.2 14.5 12H16C16 10.1 14.5 9.3 13.2 8.9L12.2 8.6L11.2 8.3C9.9 8 9.25 7.3 9.25 6.5ZM12.5 15.5C10.5 15.5 9.25 16.5 9.25 17.5C9.25 18.5 10.5 19.5 12.5 19.5C14.5 19.5 15.75 18.5 15.75 17.5H17.25C17.25 19.5 15.5 21 12.5 21C9.5 21 7.75 19.5 7.75 17.5C7.75 16.1 8.9 15.1 10.5 15H12.5V15.5Z"
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
