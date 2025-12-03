# Pack-Man Documentation

Official documentation site for Pack-Man - the package dependency analyzer and updater.

## About

This documentation site is built with [Fumadocs](https://fumadocs.vercel.app/) and Next.js 16, providing comprehensive guides, API references, and resources for Pack-Man users and developers.

## Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- pnpm (recommended), npm, or yarn

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

### Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── content/docs/          # Documentation content (MDX files)
│   ├── getting-started/   # Getting started guides
│   ├── guides/            # User guides
│   ├── api/               # API documentation
│   ├── architecture/      # Architecture documentation
│   └── extensions/        # Extension documentation
├── src/app/               # Next.js app directory
├── src/lib/               # Utility functions
└── public/                # Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Documentation**: Fumadocs
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **React**: React 19

## Contributing

Contributions to improve the documentation are welcome! Please ensure:

- Content follows US English conventions
- MDX files are properly formatted
- Links are tested and working
- Code examples are accurate and tested

## License

See [LICENSE](LICENSE) file for details.

## Related Projects

- [Pack-Man Web App](https://github.com/yourusername/pack-man) - Main web application
- [Pack-Man Extension](https://github.com/yourusername/pack-man-extension) - Browser extension
- [Pack-Man API](https://github.com/yourusername/pack-man-api) - Backend API