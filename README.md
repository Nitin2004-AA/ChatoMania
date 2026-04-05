ChatoMania 💬
A full-stack real-time chat application built with the MERN stack and Socket.IO. 
ChatoMania lets users sign up, find contacts, and exchange messages instantly with 
live online/offline status indicators.

🌐 Live Demo
🔗 Frontend: chato-mania.vercel.app
🔗 Backend API: chatomania-0kex.onrender.com

✨ Features

🔐 JWT Authentication — Secure login/signup with HTTP-only cookies
💬 Real-time Messaging — Instant messaging powered by Socket.IO WebSockets
🟢 Online/Offline Status — See which contacts are currently active
🖼️ Image Sharing — Send images in chat via Cloudinary
📧 Welcome Email — Automated welcome email on signup via Resend
🛡️ Security — Bot protection, shield, and rate limiting via Arcjet
🎨 Animated UI — Gradient border animations and dark theme
🔊 Keyboard Sounds — Fun typing sound effects
📱 Responsive Design — Works on desktop and mobile

🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v18 or higher)
Git
A MongoDB Atlas account
A Cloudinary account
A Resend account
An Arcjet account

🚢 Deployment
Frontend — Vercel

Push your code to GitHub
Connect your repo to Vercel
Set Root Directory to frontend
Deploy

Backend — Render

Connect your repo to Render
Set Root Directory to backend
Set Start Command to npm start
Add all environment variables from your .env file
Set CLIENT_URL to your Vercel frontend URL
Set NODE_ENV to production
Deploy

🛡️ Security Features

HTTP-only cookies — JWT stored in HTTP-only cookies to prevent XSS attacks
bcryptjs — Passwords hashed with salt rounds before storing
Arcjet Shield — Protection against SQL injection and common attacks
Arcjet Bot Detection — Blocks malicious bots
Arcjet Rate Limiting — Sliding window rate limiting (100 requests/minute)
CORS — Configured to only allow requests from the frontend URL
Socket.IO Auth Middleware — All WebSocket connections require valid JWT


👨‍💻 Author
Nitin Gusain
GitHub: @Nitin2004-AA
