-----

# 🌐 Club Nexus: Campus Event and Club Management

## 🌟 Project Overview

**Club Nexus** is a modern, responsive single-page application (SPA) built to streamline the management of student clubs and campus events. The goal is to provide a central, easy-to-use platform for students to discover activities and for club organizers to manage their memberships and event listings.

### Features

  * **Intuitive UI:** Built with **React** and styled for a sleek, modern aesthetic (including a **Neon Glow** heading and interactive buttons).
  * **Event Discovery:** A central place for viewing all active campus events.
  * **Club Management:** Functionality for club leaders to manage their club details and members (future feature).
  * **Dynamic UX:** Includes background sound on page load (with a **Mute Toggle**) for an enhanced, immersive user experience.

## 🚀 Getting Started

This project was bootstrapped with **Vite** and uses **React** and **JavaScript/JSX**.

### Prerequisites

You must have [Node.js](https://nodejs.org/en) installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [Your Repository URL Here]
    cd Campus-Event-and-Club-Management/
    ```

2.  **Navigate to the frontend directory and install dependencies:**
    *(Assuming your frontend is in a subdirectory as per the setup)*

    ```bash
    cd frontend/Campus-Event-and-Club-Management/
    npm install
    ```

-----

## ⚙️ Project Structure

The key files and components that create the main page experience are:

| File/Directory | Description |
| :--- | :--- |
| `src/App.jsx` | The main application component, including the "Club Nexus" heading and button containers. |
| `src/App.css` | Styles for the main page layout, neon-glow heading, and button containers. |
| `src/NeonButton.jsx` | Reusable **React Component** for the glowing, interactive buttons. |
| `src/NeonButton.css` | CSS defining the **box-shadow** and **text-shadow** for the button neon effect. |
| `src/useCelebrationSound.js` | Custom **React Hook** for handling the auto-play and mute/unmute state of the background sound. |
| `public/` | Contains static assets like the `celebrate.mp3` file, favicon, and the `pexels-jossvee-12492086.jpg` background image. |

-----

## ▶️ Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode. Open [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) (or the port shown in your terminal) to view it in the browser. The page will auto-reload as you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the built production version locally for testing purposes.

-----

## 🤝 Next Steps & Contributions

Future development plans include:

1.  **Routing:** Implement client-side routing (e.g., using React Router) to navigate from the home page to `/events` and `/clubs`.
2.  **Data Models:** Integrate a database/backend to handle CRUD operations for Events and Clubs.
3.  **Authentication:** Implement user login/registration (students and organizers).

Feel free to fork the repository and submit pull requests\!
