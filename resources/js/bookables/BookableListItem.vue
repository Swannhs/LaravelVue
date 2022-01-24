<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <span>{{price}}</span>
    </div>
</template>

<script>
export default {
    name: "BookableListItem",
    props: {'title': String, 'content': String, 'price': Number}
}
</script>

<style scoped>

</style>
