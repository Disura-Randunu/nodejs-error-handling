import { Router } from "express";
import { getCountryByCode } from "./CountryService.js";
import { asyncHandler } from "./ErrorHandler.js";

const router = Router();

router.get("/:code", asyncHandler(async (req, res) => {
    const { code } = req.params
    const country = await getCountryByCode(code)
    res.json(country)
}))


export const countryRouter = router
