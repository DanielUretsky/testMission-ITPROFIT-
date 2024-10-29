import { check } from "express-validator";

export const validationMiddleware = [
    check('fullname')
        .trim()
        .not().isEmpty()
        .withMessage('Full name is required!')
        .isLength({ min: 3 })
        .withMessage('Full name is to short!'),
    check('email')
        .not().isEmpty()
        .withMessage('Email is required!')
        .isEmail()
        .withMessage('Email is invalid!'),
    check('phone')
        .customSanitizer(value => value.replace(/\s|-/g, ''))
        .not().isEmpty()
        .withMessage('Phone is required!')
        .isMobilePhone(undefined, {strictMode: false})
        .withMessage('Phone is invalid!'),
    check('message')
        .trim()
        .not().isEmpty()
        .withMessage('Message is required!')
        .isLength({ min: 10 })
        .withMessage('Message is to short!'),
];  