import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("Please provide MONGO_URI in .env file");
}


const config = {
    MONGO_URI: process.env.MONGO_URI,
    RESEND_URI: process.env.RESEND_URI,
}
export default config;