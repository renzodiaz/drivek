<template>
    <div>
    <div class="tabs">
        <ul>
            <li class="active"><a href="#content1" @click="currentTab"><i class="icon icon-list"></i><span>Participate</span></a></li>
            <li><a href="#content2" @click="currentTab"><i class="icon icon-gallery"></i><span>Gallery</span></a></li>
            <li><a href="#content3" @click="currentTab"><i class="icon icon-car"></i><span>Showcase</span></a></li>
        </ul>
        <section class="tabs__content open" id="content1">
            <div class="container">
                <div class="content__wrap">
                <div class="sidebar">
                    <img src="~@/assets/img/ph01.png" alt="">
                </div>
                <div class="content has--sidebar">
                    <h2>How to participate</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolor enim expedita explicabo illum impedit iste labore, minima mollitia nemo officia rem rerum suscipit tempora. Blanditiis natus quas voluptatem!</p>
                    <a href="" class="button">Download Template</a>
                    <h2 class="text-yellow">Participate now!</h2>
                    <form action="">
                        <div class="field">
                            <div class="form__field">
                                <input type="text" placeholder="Name">
                            </div>
                        </div>
                        <div class="field">
                            <div class="form__field">
                                <input type="text" placeholder="Surname">
                            </div>
                        </div>
                        <div class="field">
                            <div class="form__field">
                                <input type="email" placeholder="Email">
                            </div>
                        </div>
                        <div class="field">
                            <div class="form__field">
                                <input type="tel" placeholder="Phone">
                            </div>
                        </div>
                        <div class="field">
                            <div class="form__field">
                                <select name="" id="">
                                    <option value="">Select your state</option>
                                    <option value="">Arizona</option>
                                </select>
                            </div>
                        </div>
                        <div class="field three">
                            <div class="field">
                                <div class="form__field">
                                    <select name="" id="">
                                        <option value="">day</option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <div class="form__field">
                                    <select name="" id="">
                                        <option value="">month</option>
                                    </select>
                                </div>
                            </div>
                            <div class="field">
                                <div class="form__field">
                                    <select name="" id="">
                                        <option value="">year</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="field group">
                            <div class="form__field">
                                <input type="text" placeholder="Project name">
                            </div>
                            <div class="form__field mt">
                                <select name="" id="">
                                    <option value="">Select category</option>
                                </select>
                            </div>
                            <div class="form__field upload">
                                <label class="field__upload" for="project-upload">
                                    Upload your file (.jpg/.jpeg/.png)
                                    <input type="file" name="project-upload" id="project-upload" accept=".jpg,.jpeg,.png">
                                </label>
                            </div>
                        </div>
                        <div class="field group">
                            <div class="form__field">
                                <textarea placeholder="Project description" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="field group">
                            <div class="form__field">
                                <input type="checkbox" id="terms1">
                                <label for="terms1" class="checkbox">
                                    <span class="checkbox__text">
                                        <a href="" class="link__deco">I read the lorem ipsum</a>
                                    </span>
                                </label>
                                <input type="checkbox" id="terms2">
                                <label for="terms2" class="checkbox">
                                    <span class="checkbox__text">
                                        <a href="" class="link__deco">I read the lorem ipsum</a>
                                    </span>
                                </label>
                            </div>
                            <button class="button is--yellow">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
    <section class="tabs__content" id="content2">
        <div class="container">
            <div class="content__wrap">
                <div class="content">
                    <div class="content__head">
                        <h2>How to participate</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at dolor enim expedita explicabo illum impedit iste labore, minima mollitia nemo officia rem rerum suscipit tempora. Blanditiis natus quas voluptatem!</p>    
                    </div> 
                    <div class="content__action">
                        <a href="" class="button is--yellow">Participate</a>
                    </div>
                    <ul class="box">
                        <paginate
                        name="carlist"
                        :list="cars"
                        :per="9"
                        >
                        <li class="box__item" v-for="(item, index) in paginated('carlist')" :key="index">
                            <figure>
                                <img :src="item.attrs.img" alt="">
                                <figcaption>
                                    <span>{{ item.attrs.make }}</span>
                                    <h2>{{ item.attrs.model }}</h2>
                                    <small>Car ID: {{ item.attrs.carId }}</small>
                                </figcaption>
                            </figure>
                        </li>
                        </paginate>
                        <paginate-links
                        for="carlist"
                        :show-step-links="true"
                        ></paginate-links>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs__content" id="content3">
        <div class="container">
            <h1>Showcase</h1>
        </div>
    </section>
    </div>
</template>
<script>
import Vue from 'vue'
import json from '../data/cars.json'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

export default {
    name: "Tab",
    data() {
        return {
            cars: json,
            paginate: ['carlist']
        }
    },
    methods: {
        currentTab: function(e) {
            e.preventDefault();
            const _current = e.currentTarget;
            const _curContent = document.querySelector(_current.getAttribute('href'));
            
            NodeList.prototype.forEach = Array.prototype.forEach;

            document.querySelectorAll('.tabs li').forEach(function(el) {
                el.classList.remove('active');
            })

            document.querySelectorAll('.tabs__content').forEach(function(el) {
                el.classList.remove('open');
            })

            _current.parentElement.classList.add('active');
            _curContent.classList.add('open');
        }
    }
}
</script>
