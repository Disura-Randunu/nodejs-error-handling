import { AppError, AppErrorTypes, createAppError } from "./AppError";

const countries = [
    {name: "Sri Lanka", code: "LK"},
    {name: "United States of America", code: "US"},
    {name: "England", code: "UK"},
]

export async function getCountryByCode(code) {
    
    if(code === "ERROR") {
        throw new AppError("CUSTOM_ERROR", "Custom message", 400)
    }

    const data = countries.find(c => c.code === code)
    
    if(!data) {
        throw createAppError(AppErrorTypes.NOT_FOUND_ERROR)
    }
}
