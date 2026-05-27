/*import dotenv from "dotenv";*/
import path from "path";

/*dotenv.config({
    path: path.resolve(process.cwd(), ".env")
});

import nodemailer from "nodemailer";
import cors from "cors";
import fs from "fs";*/
import express from "express";
import { fileURLToPath } from "url";


const app = express();
/*app.use(cors());*/
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;



//Load or create request log
/*const FILE = "requests.json";
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, "[]");*/



//Rate limiting function
/*function isRateLimited(ip) {
    const now = Date.now();
    let data = JSON.parse(fs.readFileSync(FILE));

    //keep only last 10 minutes
    data = data.filter(entry => now - entry.time < 600000);

    const requestFromIP = data.filter(entry => entry.ip === ip).length;

    if (requestFromIP >= 5) return true;

    data.push({ ip, time: now });
    fs.writeFileSync(FILE, JSON.stringify(data));

    return false;
}*/

//Email transporter using env

/*const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});*/

//Route
/*app.post("/contact", async (req, res) => {
    try {
        console.log("Sending email...");

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: req.body.email,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form",
            text: JSON.stringify(req.body, null, 2)
        });
        console.log("Email sent");
        res.send("Message sent!");
    } catch (err) {
        console.error("Email Error:", err);
        res.status(500).send("Email failed");
    }
    const ip = req.ip;

    if (isRateLimited(ip)) {
        return res.status(429).send("Too many requests");
    }
    if (req.body.time < 1500) {
        return res.status(400).send("Too fast");
    }
    if (req.body.website) {
        return res.status(400).send("Spam detected");
    }
    const { name, email, phone, city, state } = req.body;

    if (!name || !email || !phone || !city || !state) {
        return res.status(400).send("Missing fields");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(req.body.email)) {
        return res.status(400).send("Invalid email");
    }
});*/

app.listen(PORT, () => {
    console.log("ENV:", process.env.PORT);

});


