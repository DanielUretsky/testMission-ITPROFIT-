import { pingServerService } from "../services/serverService.js"

export const pingServerController = async (req, res) => {
    try {
        const response = await pingServerService();
        res.status(response.statusNumber).send(response.responseMessage);
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Unknown server error" 
        })
    }
}