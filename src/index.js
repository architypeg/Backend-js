// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path: './env'})

connectDB()
.then(() => {
    const server = app.listen(process.env.PORT || 8000, () => {
        console.log("Server is running at PORT: ", process.env.PORT)
    });
    server.on('error', (err) => {
        console.error('Server error:', err);
        process.exit(1);
        });
})
.catch((err) => {
    console.log("MONGODB connection error", err)
})




/*
const app = express();

(async () => {
    try {
        await mongoose.connect(""+process.env.MONGODB_URI+"/"+DB_NAME)

        mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
        });

        const server = app.listen(process.env.PORT, ()=> {
            console.log("App is listening on port "+ process.env.PORT);
        });

        server.on('error', (err) => {
        console.error('Server error:', err);
        process.exit(1);
        });

    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()

*/