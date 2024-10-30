<template>
    <div class="post-card">
        <h1>Título</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus doloribus omnis asperiores exercitationem soluta corrupti odio explicabo quisquam numquam quo fuga minus temporibus modi voluptate ipsam, voluptas id est.</p>
        <PostButton />
    </div>

</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue';


</script>

<style scoped>
    .post-card {
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 1px solid #ccc;
    }
</style>