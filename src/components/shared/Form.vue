<template>
    <form action="#" id="form" v-on:submit.prevent="onSubmit">
        <div class="field">
            <div class="form__field">
                <input type="text" placeholder="Name" id="name">
            </div>
        </div>
        <div class="field">
            <div class="form__field">
                <input type="text" placeholder="Surname" id="surname">
            </div>
        </div>
        <div class="field">
            <div class="form__field">
                <input type="email" placeholder="Email" id="email">
            </div>
        </div>
        <div class="field">
            <div class="form__field">
                <input type="tel" placeholder="Phone" id="phone">
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
                <input type="text" placeholder="Project name" id="projectName">
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
            <button type="submit" class="button is--yellow">Submit</button>
        </div>
    </form>
</template>

<script>
import Validation from '../../helpers/Validation'

export default {
    name: "Form",
    date() {
        return {};
    }, 
    methods: {
        onSubmit: function(e) {
            e.preventDefault();
            const form = new Validation([{
                rules: {
                    name: {
                        required: true,
                        pattern: /^[a-zA-Z]+$/,
                        message: { 
                            invalid: "This field accepts only letters" 
                        }
                    },
                    surname: {
                        required: true,
                        pattern: /^[a-zA-Z]+$/,
                        message: { 
                            invalid: "This field accepts only letters" 
                        }
                    },
                    email: {
                        required: true,
                        pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: { 
                            invalid: "Please insert a valid email" 
                        }
                    },
                    phone: {
                        required: true,
                        pattern: /^\d+$/,
                        message: { 
                            invalid: "This fields accepts only numeric" 
                        }
                    }, 
                    projectName: {
                        required: true,
                        pattern: /^[a-zA-Z]+$/,
                        message: { 
                            invalid: "This field accepts only letters" 
                        }
                    }
                }
            }]);
            if( form.isValid ) {
                document.querySelector('#form').reset();
                alert('success');
            }
        }
    }
}
</script>
