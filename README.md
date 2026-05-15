Quiz

Run it:
 - npm install
 - npm run dev

What I used:
 - React 19
 - Vite 
 - Tailwind CSS v4
 - Zustand
 - Framer Motion

What I implemented:
- Dynamic API data fetching
- Multiple choice selection with 1+ options
- Validation & visual feedback
- Game flow & question transitions
- Responsive for mobile and tablet
- Timer & timeout overlay
- Confetti on perfect score


Architecture & Standards:
- Everything is built with reusability and flexibility in mind (clean, extensible UI and Layout components).
- Clean separation between business logic (Zustand/Hooks) and "dumb" UI components for better maintainability.
- Organized folder structure: components are logically grouped by page, layout, or shared UI primitives to keep the codebase easy to navigate.


Full Project Approach (All screens):
- Setup: Choosing a tech stack that balances speed with long-term maintainability.
- Design System: Defining global theme variables (colors, spacing, typography) from day one.
- Component Strategy: Early recognition of reusable patterns to avoid duplication.
- Business Logic: Keeping the core game engine independent from the UI for maximum scalability.
- Motion Design: Strategic placement of animations to enhance UX without causing "animation fatigue".
- Gamification: Incorporating sound effects, score systems, and feedback loops to keep players engaged.
- Interactive Map: Researching and selecting the best map library to handle the game's navigation and progression.
- Folder Organization: Scaling the current structure to group components by specific pages or shared features for better discoverability.
