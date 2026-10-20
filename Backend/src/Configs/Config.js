import dotenv from 'dotenv';

dotenv.config();

if(!process.env.PORT || !process.env.MONGO_URI || !process.env.JWT_SECRET) {
    console.log("Missing required environment variables");
    process.exit(1);
}

export const PORT = process.env.PORT;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET = process.env.JWT_SECRET;

