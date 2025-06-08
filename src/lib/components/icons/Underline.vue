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
            d="M6 19V21H18V19H6ZM8.5 3V12C8.5 13.3261 9.02678 14.5979 9.96447 15.5355C10.9021 16.4732 12.1739 17 13.5 17C14.8261 17 16.0979 16.4732 17.0355 15.5355C17.9732 14.5979 18.5 13.3261 18.5 12V3H16.5V12C16.5 12.7956 16.1839 13.5587 15.6213 14.1213C15.0587 14.6839 14.2956 15 13.5 15C12.7044 15 11.9413 14.6839 11.3787 14.1213C10.8161 13.5587 10.5 12.7956 10.5 12V3H8.5Z"
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
