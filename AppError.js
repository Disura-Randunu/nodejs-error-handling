export class AppError extends Error {
    name
    httpCode
    isOperational

    constructor(
        message = 'Internal Server Error',
        httpCode = 500,
        isOperational = true
    ) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
        this.name = this.constructor.name
        this.httpCode = httpCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}