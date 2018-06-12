class Validation {

    constructor(settings) {
        this.fields = Object.assign(...settings);
        this.validate();
    }

    isValid = false;

    validate() {
        for (let el in this.fields.rules) {
            const _field = document.querySelector(`#${el}`);
            if ( _field != null ) {
                if ( this.fields.rules[el].required && (_field.value.length === 0 || !this.fields.rules[el].pattern.test(_field.value))) {
                    _field.classList.add('error');
                    this.isValid = false;
                } else {
                    _field.classList.remove('error');
                    this.isValid = true;
                }
            }
        }
        return this.isValid;
    }
    
}
export default Validation;