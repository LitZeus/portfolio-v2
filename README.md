# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Dark mode
- Contact form with EmailJS integration
- Modern UI with smooth animations
- Technology showcase section
- Project highlights

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your EmailJS credentials:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment on Vercel

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com) and import your repository

3. Configure environment variables:
   - Add all variables from `.env.local` in Vercel's project settings
   - Ensure all variables are properly set before deploying

4. Deploy:
   - Vercel will automatically build and deploy your site
   - Each push to main will trigger a new deployment

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)

## License

This project is licensed under the MIT License.
