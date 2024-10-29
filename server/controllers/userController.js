import { validationResult } from "express-validator";

export const sendFeedbackContorller = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            //extract first error and send as response
            const firstError = errors.array()[0];

            return res.status(400).send({
                status: "error",
                fields: {
                    [firstError.path]: firstError.msg
                }
            })
        }

        res.status(200).send({
            status: "success",
            msg: "Your application has been successfully sent"

        })
    } catch (err) {
        res.status(500).send({
            status: "error",
            msg: err.message
        })
    }
}  