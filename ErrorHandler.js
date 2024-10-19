import { AppError } from "./AppError.js"

export class ErrorHandler {
    async handleError(error, response) {
        console.error(error)
        await this.sendErrorResponse(error, response)
    }

    async sendErrorResponse(error, response) {
        if (error instanceof AppError) {
            response.status(error.httpCode).json({
                status: false,
                message: error.message,
                data: null
            })
        } else {
            response.status(500).json({
                status: false,
                message: 'Something went wrong. Please contact administrator.',
                data: null
            })
        }
    }

    // define more error methods such as sendLogs, alertAdmin and use them as required in handleError function.
}

export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
