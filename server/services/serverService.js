export const pingServerService = async () => {
    try {
        return {
            statusNumber: 200,
            responseMessage: {
                status: "success",
                message: "Server is ready"
            }
        }
    } catch (err) {        
        return {
            statusNumber: 500,
            responseMessage: {
                status: "error",
                message: "Unknow server error"
            }
        }
    }
}