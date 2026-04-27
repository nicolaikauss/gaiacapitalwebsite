# File Reference

This document explains what each tracked file does and which feature area it belongs to.

## Workspace and Meta

- `.cursor/commands/21st-extensiontoolbar.md`: Cursor command note used for editor automation context.
- `.gitignore`: Git exclusion rules for build output, local env files, and transient artifacts.
- `DESIGN_SYSTEM_IMPLEMENTATION.md`: Design system rollout notes and component-level style guidance.
- `MIGRATION_NOTES.md`: Technical migration notes describing architecture and UI transition decisions.
- `MIGRATION_REPORT.md`: Summary report of migration outcomes and implementation checkpoints.
- `RELEASE_NOTES.md`: Changelog-style release summary for shipped functionality.
- `ROUTE_INVENTORY.md`: Route map of application pages and expected navigation behavior.
- `bun.lockb`: Bun lockfile capturing deterministic dependency graph for Bun-based installs.
- `components.json`: shadcn/ui registry configuration used for component generation and paths.
- `docs/i18n.md`: Internationalization guide for translation keys, locales, and usage conventions.
- `env.example`: Public template of required environment variables.
- `eslint.config.js`: ESLint ruleset used to enforce TypeScript/React code quality standards.
- `index.html`: Root HTML entry template used by Vite for mounting React app.
- `jest.config.js`: Jest test runner configuration for unit/component tests.
- `lighthouse.config.js`: Lighthouse CI assertions for performance/accessibility checks.
- `package-lock.json`: NPM lockfile pinning exact package versions.
- `package.json`: Project manifest including scripts, dependencies, and dev dependencies.
- `playwright-report/index.html`: Generated Playwright HTML report artifact from E2E runs.
- `playwright.config.ts`: Playwright browser test configuration and execution profiles.
- `postcss.config.js`: PostCSS pipeline configuration for Tailwind and CSS transforms.
- `tailwind.config.ts`: Tailwind theme tokens, plugins, and utility extension config.
- `tsconfig.app.json`: TypeScript compiler options specific to browser app source.
- `tsconfig.json`: Base TypeScript project configuration.
- `tsconfig.node.json`: TypeScript compiler options for Node tooling scripts.
- `vite.config.ts`: Vite bundler/dev-server configuration.

## Public Assets

- `public/favicon.ico`: Browser tab icon.
- `public/gaia-hero.png`: Hero/marketing image asset used on landing experiences.
- `public/gaia-logo-black.png`: Main Gaia logo variant for light backgrounds.
- `public/gaia-logo-main.png`: Alternate Gaia logo variant for brand usage.
- `public/placeholder.svg`: Placeholder vector asset for missing/unloaded images.
- `public/robots.txt`: Search crawler directives for index behavior.

## Utility Scripts

- `scripts/audit-colors.sh`: Shell helper to inspect color usage consistency.
- `scripts/build-local.ps1`: PowerShell helper for local production build flow.
- `scripts/check-links.js`: Node script to validate internal/external link integrity.
- `scripts/fix-colors.md`: Manual guidance for color normalization workflow.
- `scripts/start-local.ps1`: PowerShell command wrapper to run app locally.
- `scripts/verify.sh`: Verification script for quick quality checks before shipping.

## Core App Bootstrap

- `src/App.css`: App-level CSS definitions and additional visual overrides.
- `src/App.tsx`: Main route composition and high-level application shell wiring.
- `src/main.tsx`: React bootstrap entry mounting app and root providers.
- `src/vite-env.d.ts`: Vite TypeScript ambient declarations.

## Static Source Assets

- `src/assets/arto-logo.png`: Legacy logo asset retained for compatibility in specific UI paths.

## Layout and Shared Structure

- `src/components/layout/PageHeader.tsx`: Reusable header block with title and actions.
- `src/components/DashboardCard.tsx`: Reusable card primitive for dashboard-style presentation blocks.

## Import/Export Feature Components

- `src/components/import/ColumnMapper.tsx`: UI for mapping uploaded columns to internal schema.
- `src/components/import/DataPreview.tsx`: Data preview table before import confirmation.
- `src/components/import/ExportButton.tsx`: Reusable export trigger for CSV/XLSX outputs.
- `src/components/import/FileUpload.tsx`: Drag/drop file upload entry with validation hooks.

## UI Library Components

- `src/components/ui/ai-logo.tsx`: Decorative AI-themed iconography component.
- `src/components/ui/alert-dialog.tsx`: Alert dialog wrapper based on Radix primitives.
- `src/components/ui/alert.tsx`: Inline alert/status message component.
- `src/components/ui/ambient-dotted-globe.tsx`: Animated hero background globe canvas effect.
- `src/components/ui/animated-shiny-text.tsx`: Animated highlight text component with sheen effect.
- `src/components/ui/animated-text-cycle.tsx`: Rotating word/phrase animation for marketing copy.
- `src/components/ui/aurora-background.tsx`: Aurora gradient animated background wrapper.
- `src/components/ui/badge.tsx`: Badge/chip component for tags and statuses.
- `src/components/ui/bento-grid.tsx`: Card grid layout for editorial/bento sections.
- `src/components/ui/button.tsx`: Base button component with variant system.
- `src/components/ui/calendar.tsx`: Calendar/date selection UI.
- `src/components/ui/card.tsx`: Card container primitives.
- `src/components/ui/checkbox.tsx`: Checkbox control primitive.
- `src/components/ui/command.tsx`: Command palette style search/selection UI.
- `src/components/ui/demo.tsx`: Demo helper component for showcasing UI effects.
- `src/components/ui/dialog.tsx`: Modal dialog component abstraction.
- `src/components/ui/dotted-surface.tsx`: Visual dotted texture background component.
- `src/components/ui/dropdown-menu.tsx`: Dropdown menu primitive wrapper.
- `src/components/ui/etheral-shadow.tsx`: Stylized shadow effect helper component.
- `src/components/ui/field.tsx`: Form field composition helper for labels/errors/control.
- `src/components/ui/form.tsx`: React Hook Form integration helpers.
- `src/components/ui/glsl-hills.tsx`: Shader-driven hill background visual.
- `src/components/ui/hero-scrub.tsx`: Hero animation/scroll behavior enhancement component.
- `src/components/ui/how-it-works-modal.tsx`: Modal explaining workflow and platform usage.
- `src/components/ui/input.tsx`: Base text input component.
- `src/components/ui/label.tsx`: Form label primitive.
- `src/components/ui/language-toggle.tsx`: EN/FR language toggle control.
- `src/components/ui/light-background.tsx`: Light-theme backdrop wrapper component.
- `src/components/ui/liquid-metal-button.tsx`: Shader-inspired premium CTA button component.
- `src/components/ui/liquid-metal-demo.tsx`: Demonstration component for liquid button effect.
- `src/components/ui/mobile-form-layout.tsx`: Mobile-optimized form layout scaffolding.
- `src/components/ui/mobile-image.tsx`: Mobile-friendly responsive image component.
- `src/components/ui/mobile-nav.tsx`: Mobile navigation component for smaller breakpoints.
- `src/components/ui/optimized-image.tsx`: Performance-oriented image component with optimizations.
- `src/components/ui/pricing-section.tsx`: Pricing plan section renderer and CTA surface.
- `src/components/ui/progress.tsx`: Progress bar primitive.
- `src/components/ui/radio-group.tsx`: Radio group control primitive.
- `src/components/ui/section-header.tsx`: Reusable section heading block.
- `src/components/ui/select.tsx`: Select/dropdown input primitive.
- `src/components/ui/separator.tsx`: Horizontal/vertical separator primitive.
- `src/components/ui/sheet.tsx`: Slide-over sheet panel component.
- `src/components/ui/shimmer-text.tsx`: Shimmering animated text component.
- `src/components/ui/shine-border.tsx`: Animated border glow visual effect.
- `src/components/ui/sidebar.tsx`: Sidebar layout and navigation primitives.
- `src/components/ui/skeleton.tsx`: Loading skeleton placeholder component.
- `src/components/ui/sonner.tsx`: Toast notification wiring for Sonner.
- `src/components/ui/sparkles.tsx`: Sparkle effect visual component.
- `src/components/ui/splash-cursor.tsx`: Custom cursor/splash interaction visual.
- `src/components/ui/switch.tsx`: Toggle switch primitive.
- `src/components/ui/table.tsx`: Table primitive and style wrappers.
- `src/components/ui/tabs.tsx`: Tab navigation primitive.
- `src/components/ui/textarea.tsx`: Multi-line text input component.
- `src/components/ui/toast.tsx`: Toast component primitives.
- `src/components/ui/toaster.tsx`: Toast host/renderer container.
- `src/components/ui/toggle-group.tsx`: Multi-toggle group primitive.
- `src/components/ui/toggle.tsx`: Single toggle primitive.
- `src/components/ui/tooltip.tsx`: Tooltip primitive wrapper.
- `src/components/ui/use-toast.ts`: Hook utilities for toast interactions.

## Hooks

- `src/hooks/use-mobile.tsx`: Media-query hook for responsive mobile/tablet decisions.
- `src/hooks/use-toast.ts`: Hook for enqueuing and controlling toast notifications.

## Internationalization

- `src/i18n/index.ts`: i18n initialization and language detector configuration.
- `src/i18n/locales/en.json`: English translation key/value catalog.
- `src/i18n/locales/fr.json`: French translation key/value catalog.

## Global Styling

- `src/index.css`: Global styles, Tailwind layers, CSS variables, and utility classes.
- `src/ui/theme/tokens.ts`: Typed theme token definitions used across UI.

## Integrations

- `src/integrations/backend/client.ts`: Local backend adapter placeholder used to keep frontend data calls no-op and vendor-agnostic.

## Shared Libraries

- `src/lib/routes.ts`: Route constants and helper mappings for path consistency.
- `src/lib/utils.ts`: Generic utility helpers (`cn`, formatting helpers, etc.).
- `src/lib/validations.ts`: Shared schema validation logic (forms/domain constraints).

## Application Pages

- `src/pages/Cancel.tsx`: Cancellation outcome page for interrupted flows.
- `src/pages/Index.tsx`: Index/entry page redirect and initial route behavior.
- `src/pages/Landing.tsx`: Public landing page with hero, expertise, contact, and brand messaging.
- `src/pages/NotFound.tsx`: 404 fallback page for unmatched routes.
- `src/pages/Success.tsx`: Success outcome page after completed user workflow.

## Domain Types

- `src/types/index.ts`: Shared domain and DTO TypeScript types used across app.

## Tests and Generated Test Artifacts

- `test-results/.last-run.json`: Playwright metadata file for last test execution run.
- `tests/setup.ts`: Shared test setup/bootstrap file for test environment.
- `tests/unit/language-toggle.test.tsx`: Unit tests for language toggle behavior and document updates.
- `tests/e2e/language-toggle.spec.ts`: E2E tests validating language toggle UX.
- `tests/e2e/mobile-navigation.spec.ts`: E2E tests for mobile navigation flows.
- `tests/e2e/mobile-performance.spec.ts`: E2E checks for mobile performance expectations.
- `tests/e2e/mobile-viewport.spec.ts`: E2E viewport rendering/regression tests for mobile breakpoints.
