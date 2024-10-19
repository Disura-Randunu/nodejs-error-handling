export class AppError extends Error {
    name
    httpCode
    isOperational

    constructor(
        name = AppErrorTypes.INTERNAL_SERVER_ERROR.name,
        message = AppErrorTypes.INTERNAL_SERVER_ERROR.message,
        httpCode = AppErrorTypes.INTERNAL_SERVER_ERROR.httpCode,
        isOperational = true
    ) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.httpCode = httpCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}

export function createAppError(errorType) {
    const { name, message, httpCode } = AppErrorTypes[errorType]
    return new AppError(name, message, httpCode, true)
}

export const AppErrorTypes = {
    NOT_FOUND_ERROR: {
        name: 'NOT_FOUND_ERROR',
        message: 'Resource not found',
        httpCode: 404
    },
    AUTHENTICATION_ERROR: {
        name: 'AUTHENTICATION_ERROR',
        message: 'Authentication failed',
        httpCode: 401
    },
    INTERNAL_SERVER_ERROR: {
        name: 'INTERNAL_SERVER_ERROR',
        message: 'An internal server error occurred',
        httpCode: 500
    },
}