# Tech Innovation Conference - Registration System

##  Project Overview
This application is a professional, multi-step registration platform built for the **Tech Innovation Conference 2026** in Rwanda. It handles the complete user journey from event discovery to digital ticket generation, ensuring all participant data is saved securely in the browser.



##  Key Features
* **One-Way Registration Flow:** A structured 4-step process (Information → Registration → Review → Confirmation).
* **Smart User Recognition:** Uses `LocalStorage` to detect returning users. If already registered, the system automatically redirects you to your digital ticket.
* **Data Verification:** Includes a dedicated "Review" stage to prevent submission errors.
* **Responsive UI:** A modern, dark-themed interface built with **Tailwind CSS**, optimized for mobile and desktop.
* **Session Management:** Allows users to cancel their registration and start over, clearing all stored data.



## 🛠️ Technical Stack
* **Framework:** React (Vite)
* **Routing:** React Router DOM v6 (Client-side routing)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Persistence:** Web Storage API (`localStorage`)
* **Styling:** Tailwind CSS



##  Project Logic
The application utilizes a **Single-File Architecture** for simplicity while maintaining modularity through sub-components.

1.  **App State:** Centralized in `App.jsx` to maintain a "Single Source of Truth."
2.  **Navigation:** Controlled via `BrowserRouter` to ensure URL paths match the user's progress.
3.  **Persistence:** On every app load, a `useEffect` hook checks for existing registration keys to provide a seamless returning-user experience.



## How to Run
1.  **Install dependencies:**
    
    npm install
    
2.  **Launch development server:**
    
    npm run dev
    
3.  **Build for production:**
    
    npm run build
    

##  Author
**Mukagasirabo Beatrice** 
 Frontend Developer
