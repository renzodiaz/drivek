<template>
    <div class="slider">
        <slick ref="slick" :options="slickOptions">
            <div class="slider__item">
                <div class="container">
                    <div class="item__hero">
                        <h2>Contest</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum dolore eveniet
                        in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum suscipit, tenetur ullam
                        voluptates.
                        <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum
                        dolore eveniet in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum
                        suscipit, tenetur ullam voluptates.</p>
                        <a href="" class="button">Gallery Showcase</a>
                        <a href="" class="button is--yellow">Participate</a>
                    </div>
                </div>
            </div>
            <div class="slider__item">
                <div class="container">
                    <div class="item__hero">
                        <h2>Contest</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum dolore eveniet
                        in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum suscipit, tenetur ullam
                        voluptates.
                        <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum
                        dolore eveniet in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum
                        suscipit, tenetur ullam voluptates.</p>
                        <a href="" class="button">Gallery Showcase</a>
                        <a href="" class="button is--yellow">Participate</a>
                    </div>
                </div>
            </div>
            <div class="slider__item">
                <div class="container">
                    <div class="item__hero">
                        <h2>Contest</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum dolore eveniet
                        in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum suscipit, tenetur ullam
                        voluptates.
                        <br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid commodi cum
                        dolore eveniet in ipsa laudantium magnam mollitia natus nihil nulla optio quam quas rerum
                        suscipit, tenetur ullam voluptates.</p>
                        <a href="" class="button">Gallery Showcase</a>
                        <a href="" class="button is--yellow">Participate</a>
                    </div>
                </div>
            </div>
        </slick>
    </div>
</template>
<script>
import Slick from 'vue-slick'

export default {
    name: "Slider",
    components: { Slick },
    data(){
        return {
            slickOptions: {
                slidesToShow: 1,
                dots: false,
                arrows: false
            }
        }
    }
    
}
</script>
