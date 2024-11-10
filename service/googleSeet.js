import { google } from "googleapis";
import appConfig from "../config/appConfig";

const { GOOGLE_SHEET_CLIENT_EMAIL, GOOGLE_SHEET_PRIVETE_KEY } = appConfig

const scope = ['https://www.googleapis.com/auth/spreadsheets']

const sheetClient = new google.auth.JWT(GOOGLE_SHEET_CLIENT_EMAIL, null, GOOGLE_SHEET_PRIVETE_KEY, scope)

export const sheet = google.sheets({
    version: "v4",
    auth: sheetClient
})