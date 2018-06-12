<template>
    <div class="tabs">
        <ul>
            <li class="active"><a href="#"><i class="icon icon-list"></i><span>Participate</span></a></li>
            <li><a href="#"><i class="icon icon-gallery"></i><span>Gallery</span></a></li>
            <li><a href="#"><i class="icon icon-car"></i><span>Showcase</span></a></li>
        </ul>
        <TabContent />
    </div>
</template>
<script>
import TabContent from './TabContent'
export default {
    name: "Tab",
    components: { TabContent },
    data() {
        return {}
    }
}
</script>
