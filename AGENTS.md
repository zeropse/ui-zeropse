## Required References & Skills

Before implementing any feature, modification, refactor, or architectural decision, always consult and apply the following resources in order of priority:

### 1. Project-Specific Design System

- `DESIGN.md`
- This is the primary source of truth for:
  - Visual design
  - UX patterns
  - Component styling
  - Layout decisions
  - Brand consistency

### 2. Next.js Architecture & Development

Always use:

- `nextjs`
- `next-best-practices`
- `vercel-react-best-practices`
- `vercel-composition-patterns`
- `next-cache-components`

Apply these resources for:

- App Router patterns
- Server Components
- Client Component boundaries
- Data fetching
- Caching strategies
- Route organization
- Performance optimization
- SEO
- Accessibility
- Code structure

### 3. UI Components

Always use:

- `shadcn`

Requirements:

- Prefer existing shadcn/ui components over custom implementations.
- Extend existing components before creating new ones.
- Maintain consistency with the project's design system.
- Ensure accessibility standards are preserved.

### 4. Styling

Always use:

- `tailwind-4-docs`

Requirements:

- Follow Tailwind CSS v4 conventions.
- Avoid custom CSS when Tailwind utilities can achieve the same result.
- Use design tokens and semantic styling patterns defined in `DESIGN.md`.

### 5. Design & UX Standards

Always use:

- `web-design-guidelines`

Requirements:

- Prioritize usability, accessibility, responsiveness, and visual hierarchy.
- Ensure layouts work across mobile, tablet, and desktop breakpoints.
- Optimize for clarity and user outcomes.
