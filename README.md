# Cracked Org - Turborepo Monorepo

A modern TypeScript monorepo built with Turborepo, featuring multiple Next.js applications and shared packages.

## 🏗️ Project Structure

This is a **Turborepo monorepo** with the following structure:

```
cracked-org/
├── apps/                    # Application packages
│   ├── web-one/            # Next.js app (port 3001)
│   ├── web-two/            # Next.js app (port 3002)
│   ├── web-three/          # Next.js app (port 3003)
│   ├── web-four/           # Next.js app (port 3004)
│   ├── web-five/           # Next.js app (port 3005)
│   ├── web-six/            # Next.js app (port 3006)
│   ├── web-seven/          # Next.js app (port 3007)
│   ├── web-eight/          # Next.js app (port 3008)
│   ├── web-nine/           # Next.js app (port 3009)
│   └── web-ten/            # Next.js app (port 3010)
├── packages/               # Shared packages
│   ├── ui/                 # React component library
│   ├── eslint-config/      # ESLint configuration
│   ├── typescript-config/  # TypeScript configuration
│   ├── tailwind-config/    # Tailwind CSS configuration
│   └── jest-config/        # Jest testing configuration
└── [config files]          # Root configuration files
```

## 📦 Applications (`apps/`)

**All applications are Next.js 15 apps with the following features:**

- **Framework**: Next.js 15.3.3 with React 19.1.0
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.10
- **Testing**: Jest 30.0.0
- **Linting**: ESLint with custom config
- **Ports**: Each app runs on a different port (3001-3010)

### Available Apps:

- `web-one` (port 3001)
- `web-two` (port 3002)
- `web-three` (port 3003)
- `web-four` (port 3004)
- `web-five` (port 3005)
- `web-six` (port 3006)
- `web-seven` (port 3007)
- `web-eight` (port 3008)
- `web-nine` (port 3009)
- `web-ten` (port 3010)

## 📚 Shared Packages (`packages/`)

### `@repo/ui` - React Component Library

- **Purpose**: Shared React components used across all apps
- **Location**: `packages/ui/src/`
- **Components**:
  - `Button` - Interactive button component
  - `Card` - Card layout component
  - `Code` - Code display component
- **Usage**: Import with `@repo/ui/component-name`

### `@repo/eslint-config` - ESLint Configuration

- **Purpose**: Shared ESLint rules across all packages
- **Features**: Includes Next.js and Prettier configurations

### `@repo/typescript-config` - TypeScript Configuration

- **Purpose**: Shared TypeScript compiler options
- **Usage**: Extended by all packages for consistent type checking

### `@repo/tailwind-config` - Tailwind CSS Configuration

- **Purpose**: Shared Tailwind CSS configuration
- **Features**: Custom design tokens and utilities

### `@repo/jest-config` - Jest Testing Configuration

- **Purpose**: Shared Jest testing setup
- **Features**: Coverage reporting and test utilities

## 🛠️ Development Tools & Scripts

### Package Manager

- **pnpm**: Used for workspace management and dependency installation
- **Workspace**: Configured in `pnpm-workspace.yaml`

### Root Scripts (from `package.json`)

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm build            # Build all apps and packages
pnpm test             # Run tests across all packages
pnpm test-watch       # Run tests in watch mode

# Code Quality
pnpm lint             # Lint all packages
pnpm check-types      # Type check all packages
pnpm check-format     # Check code formatting
pnpm format           # Format all code
pnpm check-unused     # Check for unused dependencies (knip)

# Maintenance
pnpm clean            # Clean all build artifacts and node_modules
```

### Turborepo Configuration (`turbo.json`)

- **Build**: Depends on `^build` (builds dependencies first)
- **Dev**: Persistent mode, no caching
- **Test**: Generates coverage reports
- **Lint/Check-types**: Depends on `^lint` and `^check-types`

## 🔧 Development Workflow

### Getting Started

1. **Install dependencies**: `pnpm install`
2. **Start development**: `pnpm dev` (starts all apps)
3. **Access apps**: Visit `http://localhost:3001-3010`

### Adding New Apps

1. Create new directory in `apps/`
2. Copy structure from existing app
3. Update port in `package.json`
4. Add to workspace configuration

### Adding New Packages

1. Create new directory in `packages/`
2. Set up `package.json` with workspace dependencies
3. Add to workspace configuration

## 🎯 Key Technologies

- **Monorepo**: Turborepo 2.5.4
- **Package Manager**: pnpm 10.12.1
- **Runtime**: Node.js >=22
- **Frontend**: Next.js 15, React 19, TypeScript 5.8
- **Styling**: Tailwind CSS 4.1
- **Testing**: Jest 30.0
- **Linting**: ESLint 9.29
- **Formatting**: Prettier 3.5
- **Git Hooks**: Husky 9.1, lint-staged 16.1

## 📋 Available Commands for AI Agents

When working with this codebase, AI agents can use these commands:

```bash
# Navigate to specific app
cd apps/web-one

# Run app-specific commands
pnpm dev              # Start development server
pnpm build            # Build the app
pnpm test             # Run tests
pnpm lint             # Lint the app

# Work with shared packages
cd packages/ui
pnpm check-types      # Type check UI package
pnpm lint             # Lint UI package

# Root-level operations
pnpm build            # Build everything
pnpm test             # Test everything
pnpm lint             # Lint everything
```

## 🔍 Important Files for AI Agents

- `turbo.json` - Turborepo task definitions and caching
- `pnpm-workspace.yaml` - Workspace package definitions
- `package.json` - Root scripts and dependencies
- `apps/*/package.json` - Individual app configurations
- `packages/*/package.json` - Shared package configurations
- `.prettierrc` - Code formatting rules
- `knip.config.ts` - Unused dependency detection

## 🚀 Deployment

Each Next.js app can be deployed independently:

- **Vercel**: Automatic deployment from Git

## 📝 Notes for AI Agents

1. **Workspace Dependencies**: Use `workspace:*` for internal package references
2. **Port Management**: Each app uses a different port (3001-3010)
3. **Shared Components**: Import from `@repo/ui/component-name`
4. **Type Safety**: All packages use TypeScript with shared config
5. **Caching**: Turborepo caches build outputs for faster rebuilds
6. **Testing**: Jest configuration is shared across all packages
