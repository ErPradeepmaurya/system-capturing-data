import dotenv from "dotenv";
dotenv.config()

export default Object.freeze({
    PORT: process.env.PORT,
    //  this is a google sheet 

    GOOGLE_SHEET_CLIENT_EMAIL: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    GOOGLE_SHEET_PRIVETE_KEY: process.env.GOOGLE_SHEET_PRIVETE_KEY
})
