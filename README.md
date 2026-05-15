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

Key Focus Areas:
- Algemeen plan-van-aanpak: A clear strategy for scaling from a component to a full game.
- Robuuste en uitbreidbare projectstructuur: Clean, maintainable architecture.
- Herbruikbaarheid van componenten: Flexible, "dumb" UI components.
- Een goeie UX voor de eindgebruiker: Smooth animations, responsive design, and intuitive feedback loops.

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

Project Roadmap & Timeframe:
Estimated lead time for the full 25+ screen game: ~10-12 weeks.
- Phase 1 (2 weeks): Foundation & Interactive Map
  Defining global theme variables (colors, spacing, typography), setting up the core navigation/map logic, and analyzing/defining the overall gamification logic (scores, feedback loops, etc.).
- Phase 2 (4 weeks): Game Engine Development
  Building reusable logic "engines" for the various mini-games.
- Phase 3 (4 weeks): Content & Scaling
  Rapidly building out all 25+ screens.
- Phase 4 (2 weeks): Polish & Final QA with final animation tweaks. Comprehensive testing across mobile, tablet, and desktop platforms to ensure perfect responsiveness and performance.

Dependencies & Risks:
- Backend Data Structure: To make the game more robust, I'd recommend the following improvements to the JSON schema:
    - Unique IDs: Add IDs for questions and answers to avoid relying on string matching in the state.
    - Explicit Correct Answers: Providing a `correctAnswerIds` array at the question level would simplify validation logic.
