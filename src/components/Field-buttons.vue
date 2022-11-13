<template>
    <div>
        <div id="app">
            <div class="panel panel-default ">
                <div class="panel-body">
                    <label class="switch relative inline-block">
                        <input class="hidden" type="checkbox" @click="toggleCheckbox">
                        <div class="slider border-black-100 border-2 round absolute cursor-pointer bg-white top-0 left-0 right-0 bottom-0"></div>
                    </label>
                    <p>{{ checkbox }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.switch {
    width: 60px;
    height: 35px;
}

.slider {
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 32px;
    width: 32px;
    left: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}


input:focus+.slider {
    box-shadow: 0 0 1px #101010;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
<script>
export default {
    data() {
        return {
            checkbox: false
        }
    },
    methods: {
        toggleCheckbox() {
            this.checkbox = !this.checkbox
            this.$emit('setCheckboxVal', this.checkbox)
        }
    }
}
</script>