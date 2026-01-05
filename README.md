# React Practice - BridgeLabz Training

This project contains focused examples for React concepts ranging from Basics to Advanced patterns.

## Topics Covered

### 1. Basics
- **Files**: `src/topics/BasicConcepts.jsx`
- **Concepts**: Components, JSX, State, Props, Conditional Rendering, Virtual DOM explanation.

### 2. Forms & Events
- **Files**: `src/topics/FormsAndEvents.jsx`
- **Concepts**: 
    - Controlled Components (Reactive-style).
    - Uncontrolled Components (Template-style) using Refs.
    - Event Handling.

### 3. Auth, Media & Animations
- **Files**: `src/topics/AuthAndMedia.jsx`
- **Concepts**:
    - Session Management (simulated with `sessionStorage`).
    - Responsive Design (Media Queries).
    - CSS Animations.

### 4. Advanced Hooks & Rendering
- **Files**: `src/topics/AdvancedHooks.jsx`
- **Concepts**: `useEffect` (Lifecycle), `useContext` (Global State), `useMemo` (Profiler/Optimization), React Portals, Lists & Keys.

### 4. Design Patterns (Advanced)
- **Files**: `src/topics/HPatterns.jsx`
- **Concepts**: Higher Order Components (HOC/Decorators), Render Props, Environment Variables.

### 5. Services & HTTP
- **Files**: `src/services/userService.js`, `src/topics/ServicesDemo.jsx`
- **Concepts**: Axios setup, Interceptors (Request/Response), Async/Await, Error Handling.

## How to Run

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Environment
- **Build Tool**: Webpack 5 (configured in `webpack.config.js`)
- **Styling**: Bootstrap 5 + SCSS (`src/styles/main.scss`)
