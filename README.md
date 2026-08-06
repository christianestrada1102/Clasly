<div align="center">
  <h1>Clasly</h1>
  <p><strong>Student dashboard with real-time class detection, notes, and task management</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white" />
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat" />
  </p>

  <p>
    <a href="https://github.com/christianestrada1102/Clasly/issues">🐛 Report Bug</a>
  </p>
</div>

---

## About

A personal academic dashboard built from scratch to replace static PDF schedules. It knows what class you're in right now, shows a live progress bar for the current session, and keeps your notes and tasks in one place — all running client-side with no backend.

> Built and maintained by **[Christian Estrada](https://github.com/christianestrada1102)** (@CodeByNas)  
> Chihuahua, Mexico

---

## Key Features

| Feature | Description |
|---|---|
| ⏱️ Real-time class detection | `useCurrentClass` hook polls every 60 s and resolves state: `current`, `upcoming`, `break`, or `none` |
| 📊 Live progress bar | Shows % elapsed and minutes remaining for the active class |
| 🗓️ Weekly schedule grid | Desktop view with color-coded cards per subject across Mon–Fri |
| 📱 Mobile day view | Responsive single-day layout shown on `md:hidden` |
| 📝 Notes | Freeform class notes persisted in `localStorage`, auto-purged after 7 days |
| ✅ Task list | Checkbox task manager persisted in `localStorage`, auto-purged after 7 days |
| 🌙 Glassmorphism UI | Dark-first design with blurred campus background, glass-panel cards, and Framer Motion animations |

---

## Tech Stack

```
React 19            → UI and component model
TypeScript 5.9      → Type-safe schedule data and hooks
Vite 7              → Dev server and production build
TailwindCSS 3       → Utility-first styling
Framer Motion 12    → Page and card animations
Lucide React        → SVG icon set
localStorage        → Client-side persistence (notes, tasks)
```

---

## Project Structure

```
gravity/
├── src/
│   ├── animations/
│   │   └── variants.ts         # Framer Motion shared variants
│   ├── components/
│   │   ├── Header.tsx          # Navigation between schedule and notes views
│   │   ├── CurrentClassCard.tsx # Real-time status banner
│   │   ├── ScheduleGrid.tsx    # Desktop weekly grid
│   │   ├── MobileDayView.tsx   # Mobile single-day view
│   │   ├── ClassCard.tsx       # Individual class card
│   │   └── NotesView.tsx       # Notes + task manager (localStorage)
│   ├── hooks/
│   │   └── useCurrentClass.ts  # 60 s polling hook, resolves CurrentClassStatus
│   ├── types/
│   │   └── schedule.types.ts   # Class, TimeSlot, CurrentClassStatus, ScheduleData
│   ├── utils/
│   │   ├── schedule.ts         # Hardcoded SCHEDULE_DATA for group DS32M / 2026
│   │   └── timeHelpers.ts      # getCurrentDayOfWeek, getCurrentTimeInMinutes, isTimeBetween
│   ├── App.tsx                 # Root layout, view router (schedule | notes)
│   └── main.tsx                # React DOM mount
├── package.json
└── README.md
```

---

## Schedule

Group **DS32M** · Semester **2026** · Mon–Fri, 7:00–15:00

| Subject | Professor |
|---|---|
| Cálculo Integral | Trejo Carrillo David |
| Desarrollo del Pensamiento y Toma de Decisiones | González Rubio Ángel Esteban |
| Inglés III | Nieto Chavira Miriam |
| Bases de Datos | Ramírez Ochoa Dynhora Danheyda |
| Programación Orientada a Objetos | Batres Márquez Milton Joel |
| Tópicos de Calidad para el Diseño de Software | Bustamante Lozano Juan Carlos |
| Proyecto Integrador I | Pérez Ortega Eva Claudia |
| Tutoría | Ramírez Ochoa Dynhora Danheyda |

---

## Installation

### Prerequisites

- Node.js 18+

### Setup

```bash
git clone https://github.com/christianestrada1102/Clasly.git
cd Clasly

npm install

# Dev server — http://localhost:5173
npm run dev
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint check |

---

## Design

Dark-first glassmorphism UI with a blurred campus photo as background. Color palette:

```css
--primary:    #135BEC;   /* Blue — Teoría */
--secondary:  #10B981;   /* Green — Completado */
--lab-purple: #8B5CF6;   /* Purple — Laboratorio */
--background: #111318;   /* Deep dark */
--glass:      rgba(255, 255, 255, 0.03);
```

---

## License

MIT License © 2026 CodeByNas

---

## Author

**Christian Estrada**  
Chihuahua, Mexico

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000000?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christian-estrada-a59130386/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/christianestrada1102)
[![X](https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/CodeByNAS)

---

<div align="center">
  <p><sub>© 2026 CodeByNas · MIT License</sub></p>
</div>
