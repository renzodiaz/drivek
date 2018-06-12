<template>
    <section class="tabs__content">
        <div class="container">
            <div class="content__wrap">
                <div class="sidebar">

                </div>
                <div class="content">
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
</template>
<script>
export default {
    name: "TabContent",
    data() {
        return {

        }
    }
}
</script>
