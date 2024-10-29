export const validationMessageDiv = document.querySelector('.contact__validation-message');

export const fieldsState = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
};

const errorMessages = {
    valueMissing: "is required!",
    patternMismatch: "is invalid!",
    tooShort: "is to short!",
};

const addErrorClass = (input) => {
    input.classList.add("contact__input--error");
};

const removeErrorClass = (input) => {
    input.classList.remove("contact__input--error");
};

export const showValidationMessage = (errorMessage) => {
    if(validationMessageDiv.classList.contains('contact__validation-message--success')) validationMessageDiv.classList.remove('contact__validation-message--success');
    validationMessageDiv.textContent = errorMessage;
    validationMessageDiv.classList.add('contact__validation-message--error');
};

const hideValidationMessage = () => {
    validationMessageDiv.textContent = "";
    validationMessageDiv.classList.remove('contact__validation-message--error');
};

export const checkValidityState = (input) => {
    fieldsState[input.name] = input.value;
    
    if (!input.validity.valid) {
        addErrorClass(input);

        for (const key in input.validity) {
            if (input.validity[key] && key !== 'valid') showValidationMessage(`${input.ariaLabel} ${errorMessages[key]}`);
        }
    }
    else {
        removeErrorClass(input);
        hideValidationMessage();
    }

};