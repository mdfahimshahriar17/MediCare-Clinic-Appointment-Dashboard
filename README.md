# MediCare Clinic — Appointment Dashboard

A frontend-only clinic appointment dashboard built with **React, Vite, and Tailwind CSS**.

---

## Project Overview

MediCare Clinic is a front-desk dashboard for managing doctors and patient appointments.

The application allows users to search and filter doctors, select available doctors, book appointments, update appointment statuses, delete appointments, and view dynamic appointment statistics.

---

## Features

### Dashboard
- Dynamic doctor and appointment statistics
- Responsive dashboard layout

### Doctor Management
- Doctor list
- Search by name
- Department filtering
- Available/unavailable states
- Doctor selection

### Appointment Management
- Book new appointments
- Form validation
- Appointment status management
- Status filtering
- Delete appointments
- Success feedback
- Empty states

### Error Handling
- Error Boundary
- Fallback UI
- Crash Test
- Global error logging

---

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript
- React Hooks
- Error Boundary

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── PageContainer.jsx
│   │   └── Footer.jsx
│   ├── ui/
│   │   ├── Card.jsx
│   │   ├── EmptyState.jsx
│   │   └── FilterableList.jsx
│   ├── stats/
│   │   ├── StatGrid.jsx
│   │   └── StatCard.jsx
│   ├── doctors/
│   │   ├── DoctorPanel.jsx
│   │   ├── DoctorFilter.jsx
│   │   ├── DoctorList.jsx
│   │   └── DoctorCard.jsx
│   ├── appointments/
│   │   ├── AppointmentForm.jsx
│   │   ├── AppointmentList.jsx
│   │   └── AppointmentRow.jsx
│   └── error/
│       ├── ErrorBoundary.jsx
│       ├── FallbackUI.jsx
│       └── CrashTest.jsx
├── data/
│   ├── doctors.js
│   └── appointments.js
├── utils/
│   ├── logger.js
│   └── validators.js
├── App.jsx
├── main.jsx
└── index.css
````

---

## Main Workflow

```text
Search / Filter Doctor
        ↓
Select Doctor
        ↓
Book Appointment
        ↓
Appointment Created
        ↓
Change Status
        ↓
Complete / Cancel / Delete
```

---

## Installation

```bash
git clone https://github.com/your-username/medicare-clinic.git
cd medicare-clinic
npm install
npm run dev
```

---

## Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Appointment Booking

![Appointment Booking](screenshots/booking.png)

### Error Boundary

![Error Boundary](screenshots/error-boundary.png)

---

## Important Notes

* Frontend-only React project
* Data is stored in local JavaScript files
* No backend or API is used
* Data resets after page refresh

---

## Author

**Fahim Shahriar**