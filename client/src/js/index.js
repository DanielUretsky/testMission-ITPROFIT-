import '../js/modal.js';

import {maskitoPhoneOptionsGenerator} from '@maskito/phone';
import {Maskito} from '@maskito/core';
import metadata from 'libphonenumber-js/min/metadata';

import HTTPRequest from '../utils/HTTPRequest.js';
import { 
    checkValidityState, 
    fieldsState, 
    showValidationMessage, 
    validationMessageDiv 
} from '../utils/filedsValidation.js';

import '../../public/assets/images/open.png';
import '../scss/index.scss';

const inputs = document.querySelectorAll("input, textarea");
const form = document.getElementById("contactForm");
const phoneInput = document.getElementById("phone");

new Maskito(phoneInput, maskitoPhoneOptionsGenerator({
    metadata,
    strict: false,
    countryIsoCode: 'RU'
}));

const sendFeedbackRequest = (e) => {
    e.preventDefault();
    new HTTPRequest()
        .POST(`${process.env.API_URL}/api/users/send-feedback`, fieldsState)
        .getData((err, res) => {
            if(err) {
                console.log(err);
                
                if(err.statusCode === 500) return alert(err.msg);
                
                const errorMessage = err.fields[Object.keys(err.fields)[0]];
                validationMessageDiv.classList.add('contact__validation-message--error');
                return showValidationMessage(errorMessage);
            }
            
            showValidationMessage(res.msg);
            validationMessageDiv.classList.add('contact__validation-message--success');
            form.reset();
        }); 
};

inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') checkValidityState(e.target)
    });
});

form.addEventListener("submit", sendFeedbackRequest);




