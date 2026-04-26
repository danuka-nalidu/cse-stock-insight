**# CSE Insights — Research Project Website**

A research showcase website for an AI-powered ****Stock Prediction, Risk Assessment & Portfolio Management System**** targeting the Colombo Stock Exchange (CSE). Built as a final-year research project at the Sri Lanka Institute of Information Technology (SLIIT).

- **--**

**## Project Overview**

CSE Insights presents a four-component intelligent financial system:

| Component | Description |

|---|---|

| ****Price Prediction**** | Deep learning models for CSE stock price forecasting |

| ****Dividend Forecasting**** | Statistical & ML hybrid approach for dividend estimation |

| ****Risk Assessment**** | Volatility analysis, Value-at-Risk (VaR), and drawdown metrics |

| ****Portfolio Optimization**** | Mean-variance optimization and reinforcement learning agents |

- ***Scope****: 300+ CSE-listed tickers · 5+ ML models · 2025 final-year project
- **--**

**## Tech Stack**

| Layer | Technology |

|---|---|

| Framework | React 18 + TypeScript |

| Build Tool | Vite 5 |

| Styling | Tailwind CSS 3 + CSS variables |

| Routing | React Router DOM 6 |

| UI Components | shadcn/ui (Radix UI primitives) |

| Animations | Framer Motion |

| Forms | React Hook Form + Zod |

| Data Fetching | TanStack React Query |

| Charts | Recharts |

- **--**

**## Pages**

| Route | Purpose |

|---|---|

| `/` | Landing page with hero section and system overview |

| `/domain` | Research landscape and gap analysis |

| `/milestones` | Project timeline and milestone progress |

| `/documents` | Research documents and papers |

| `/presentations` | Presentation slides |

| `/about` | Team members and contributors |

| `/contact` | Contact form |

- **--**

**## Getting Started**

- ***Prerequisites****: Node.js 18+ and npm

```bash

# Install dependencies

npm install

# Start development server (runs on port 8081)

npm run dev

# Build for production

npm run build

# Preview production build

npm run preview

```

- **--**

**## Project Structure**

```

src/

├── components/        # Reusable UI components

│   └── ui/            # shadcn/ui component library (48 components)

├── pages/             # Page-level components

├── hooks/             # Custom React hooks

├── lib/               # Utility functions

├── assets/            # Static images

└── App.tsx            # Root component with routing

```

- **--**

**## Design System**

The site uses a premium fintech aesthetic with:

- ***Color palette****: Deep navy backgrounds, emerald green primary, electric blue accents
- ***Typography****: Space Grotesk (display) + Inter (body)
- ***Effects****: Glassmorphism, gradient text, glow shadows
- ***Animations****: Framer Motion entrance animations and floating orbs
- **--**

**## Scripts**

| Command | Description |

|---|---|

| `npm run dev` | Start dev server on `:8081` |

| `npm run build` | Production build |

| `npm run build:dev` | Development mode build |

| `npm run preview` | Preview production build locally |

| `npm run lint` | Run ESLint |

| `npm run test` | Run test suite with Vitest |

| `npm run test:watch` | Run tests in watch mode |

- **--**

**## Institution**

- ***Sri Lanka Institute of Information Technology (SLIIT)****

Faculty of Computing — Final Year Research Project, 2025