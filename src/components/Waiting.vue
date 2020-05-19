<template>
    <div class='popContainer' v-show="visible">
		<div>Waiting</div>
    </div>
</template>

<script>
    export default{
        name: "Waiting",
        data(){
            return {
                visible: false
            }
        },
        methods: {
            open(){
                this.visible = true;
                this.$emit("show");
            },
            close(){
                this.visible = false;
                this.$emit("hide");
            }
        }
    }
</script>

<style scoped>
	div.popContainer{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.3);
	}
</style>
