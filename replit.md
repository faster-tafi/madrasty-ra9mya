# Overview

This project is a comprehensive Arabic educational platform called "مدرستي الرقمية" (My Digital School) designed for Moroccan secondary education. The platform provides interactive lessons, exercises, and tests for three academic levels: Tronc Commun (Common Core), First Baccalaureate, and Second Baccalaureate. The application features a modern, RTL-designed interface with smooth animations and responsive navigation across multiple subject areas including Arabic, French, Mathematics, Physics, Biology, Philosophy, and Social Studies.

## Recent Updates (September 2025)

### Enhanced Management System
- **Automatic Ordering System**: Implemented automatic sorting and reordering for lessons and exercises with visual order display
- **MediaFire Integration Guide**: Added comprehensive user guide for uploading and managing educational files through MediaFire
- **QCM Management Interface**: Professional modal interfaces for adding and editing QCM questions with GitHub API integration
- **National/Regional Exams Interface**: Complete management system for official examinations with file upload capabilities
- **Animated UI Elements**: Restored and enhanced animated icons in the main slider with CSS motion graphics

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application follows a multi-page architecture with shared styling and JavaScript functionality:

- **Main Layout**: Uses CSS Grid and Flexbox for responsive design with RTL (right-to-left) support for Arabic content
- **Navigation System**: Fixed header with backdrop blur effects and smooth scrolling navigation
- **Component Structure**: Modular CSS files for different page types (courses.css, level.css, tests.css)
- **Animation Framework**: Custom CSS animations with Intersection Observer API for scroll-triggered effects
- **Color System**: CSS custom properties for consistent theming with gradient backgrounds

## Page Structure
1. **Home Page (index.html)**: Landing page with hero section and call-to-action
2. **Courses Overview (index5.html)**: Level selection interface with animated cards
3. **Subject Listing (index2.html)**: Dynamic subject display based on selected academic level
4. **Test Interface (index4.html)**: Comprehensive testing system with categorized subjects
5. **Test Engine (index3.html)**: Interactive quiz interface with timer and progress tracking

## Data Management
- **Client-Side Storage**: JavaScript objects containing educational content, questions, and curriculum data
- **Dynamic Content Loading**: URL parameters for level and subject selection
- **Question Database**: Structured JSON-like objects with multiple choice questions and correct answers
- **Progress Tracking**: Session-based user answer storage and scoring system

## Test Engine System
- **Timer Management**: Per-question countdown timers with automatic progression
- **Answer Validation**: Real-time scoring with immediate feedback
- **Question Navigation**: Sequential question display with progress indicators
- **Result Calculation**: Percentage-based scoring with detailed performance metrics

## Styling Architecture
- **CSS Custom Properties**: Centralized color and spacing variables
- **Modular Stylesheets**: Page-specific CSS files inheriting from base styles
- **Responsive Design**: Mobile-first approach with flexible grid systems
- **Arabic Typography**: Google Fonts integration with RTL-optimized layouts

# External Dependencies

## Third-Party Services
- **Google Fonts**: Poppins font family for modern typography
- **No Backend Services**: Fully client-side application with static file serving

## Browser APIs
- **Intersection Observer**: For scroll-triggered animations and content loading
- **History API**: For navigation management and back button functionality
- **Local Storage**: Potential for storing user progress and preferences
- **Timer APIs**: JavaScript intervals for test timing functionality

## Development Dependencies
- **Static File Server**: Requires basic HTTP server for local development
- **Modern Browser Support**: ES6+ JavaScript features and CSS Grid/Flexbox
- **RTL Language Support**: Arabic text rendering and right-to-left layout capabilities