<template>
    <div class="main">
        <Slider />
        <Tab />
    </div>
</template>

<script>
import Slider from './shared/Slider'
import Tab from './Tab'

export default {
    name:"Home",
    components: { Slider, Tab },
    data(){
        return {}
    }
}

</script>
