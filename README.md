# Wellness Tracker

This is a wellness and health tracking MVP built as part of a recruitment challenge for Xelerit.
The app focuses on health, well-being, and daily habits. It allows users to monitor and visualize their progress in different areas such as:

💧 Water intake

💤 Sleep hours

👟 Steps

🥗 Meals

🧘 Exercises

🙂 Moods

🎯 Daily goals
              ----------------------------------------

The project is designed to be lightweight, intuitive, and user-friendly with a clean UI using Tailwind CSS.

# Features

📊 Dashboard with daily/weekly progress

📈 Charts for water, sleep, and steps (weekly view)

🍽️ Meal planner with input form

🙂 Mood tracker with calendar

🎯 Goal management

🧘 Exercise cards for quick wellness breaks

Fully responsive UI with Tailwind CSS
            ---------------------------------------------

# Tech Stack

React 18 – component-based UI

Vite – fast development build tool

Tailwind CSS – utility-first styling

React Charting Library (e.g., Recharts/Chart.js) – for progress visualization
            -----------------------------------------------
# Folder Structure

📂 Folder Structure
├── 📁 assets/              # Static assets (icons, images, logos)
│   └── 🖼️ react.svg
├── 📁 components/          # Reusable UI components
│   ├── 📁 charts/          # Weekly tracking charts
│   │   ├── 📄 WeeklySleepChart.jsx
│   │   ├── 📄 WeeklyStepsChart.jsx
│   │   └── 📄 WeeklyWaterChart.jsx
│   ├── 📄 DailyGoalProgress.jsx
│   ├── 📄 ExercicesCard.jsx
│   ├── 📄 GoalsCard.jsx
│   ├── 📄 Layout.jsx
│   ├── 📄 MealsCard.jsx
│   ├── 📄 MealsForms.jsx
│   ├── 📄 MoodCalendar.jsx
│   ├── 📄 MoodsCard.jsx
│   ├── 📄 SleepCard.jsx
│   ├── 📄 StepsCard.jsx
│   ├── 📄 WaterCard.jsx
│   └── 📄 Welness.jsx
├── 📁 pages/               # Application pages
│   ├── 📄 Dashboard.jsx
│   ├── 📄 Exercices.jsx
│   ├── 📄 Goals.jsx
│   ├── 📄 Meals.jsx
│   ├── 📄 Moods.jsx
│   ├── 📄 Sleep.jsx
│   ├── 📄 Steps.jsx
│   └── 📄 Water.jsx
├── 🎨 App.css              # Component-specific styles
├── 📄 App.jsx              # Root component
├── 🎨 index.css            # Global Tailwind styles
└── 📄 main.jsx             # App entry point

              -------------------------------------------
# Getting Started

1. Clone the repository
git clone https://github.com/samirabidi01/Wellness-Tracker
cd wellness-tracker

2. Install dependencies
npm install

3. Run the app in development mode
npm run dev


              ---------------------------------------------

# Technical Highlights

LocalStorage Integration:
Meals, moods, and goals data are saved in localStorage, ensuring persistence even after refreshing the page.

Reusable Components:
UI elements such as Cards, Charts, and Forms were built as reusable components for modularity and maintainability.

Charts Implementation:
Weekly progress for sleep, water, and steps is visualized using chart components, allowing clear and engaging feedback on user habits.

Responsive Layout:
Tailwind CSS utility classes make the app responsive and mobile-friendly out of the box.

Clean Project Structure:
Pages and components are separated for scalability, following good React practices.

# Author

Samir Abidi

🌍 Tunisia
💼 [LinkedIn](https://www.linkedin.com/in/samir-abidi)  
💻 [GitHub](https://github.com/samirabidi01)  