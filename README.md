# Activity Listing Page

A React Native / Expo app that displays a list of “activities” (classes, quizzes, assignments, discussions) and lets users view details and take actions (join, submit, etc.).  

The app uses a file-based routing structure with dynamic activity detail pages, and a type-safe model for activities.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
- [Project Structure](#project-structure)  
- [Activity Types & Models](#activity-types--models)  
- [Detail Page Design](#detail-page-design)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- Display a list of activities (OnlineClasses, Assignments, Quizzes, Discussions)  
- Dynamic routing to detail pages for each activity (via `app/[activityId].tsx`)  
- Conditional rendering of metadata based on activity type (e.g. submission deadline, time, duration, marks)  
- Action button on detail page (e.g. “Start Class”, “Submit Assignment”, “Take Quiz”, “Join Discussion”)  
- Type safety with TypeScript union types  

---

## Tech Stack

- **React Native** / **Expo**  
- **TypeScript**  
- **Expo Router** (file-based routing)  
- **Functional Components**, React hooks  
- Basic styling via `StyleSheet`  
- (Optional: you can integrate UI libraries in the future, e.g. React Native Paper, Tailwind, etc.)

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)  
- Yarn or npm  
- Expo CLI (if using local development)  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/TheRAWagent/activity-listing-page.git
   cd activity-listing-page
