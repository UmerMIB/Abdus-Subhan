import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import connectDB from './config/db.js';
import config from './config/config.js';
import Contact from './models/Contact.js';

const app = express();
const port = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

const resend = new Resend(config.RESEND_URI);

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Please provide all required fields' });
        }

        // 1. Save to MongoDB
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        // 2. Send email via Resend
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'your_email@gmail.com', // To be configured by user
            subject: subject || 'New Message from Contact Form',
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
