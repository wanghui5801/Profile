<h1 align="center">My Profile Website</h1>

This is my personal website built with Next.js 14, TypeScript, and Tailwind CSS. It showcases my academic background, publications, and projects.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** PM2
- **UI Components:** Custom components with Framer Motion animations
- **Theme:** Dark/Light mode support with next-themes

## Project Structure

```bash
.
├── app/                  # Next.js 14 app directory
├── components/          # React components
├── public/             # Static assets
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/wanghui5801/Profile.git
   cd Profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

## Deployment

### Local Deployment Steps

1. **Clean Up Old Deployment Files**
   ```bash
   rm -rf deploy
   ```

2. **Create Deployment Directory**
   ```bash
   mkdir -p deploy
   cp -r app deploy/
   cp -r components deploy/
   cp -r public deploy/
   cp -r styles deploy/
   cp -r types deploy/
   cp package.json deploy/
   cp next.config.js deploy/
   cp ecosystem.config.js deploy/
   cp postcss.config.mjs deploy/
   cp tailwind.config.ts deploy/
   cp tsconfig.json deploy/
   cp .eslintrc.json deploy/
   ```

3. **Create Archive**
   ```bash
   tar -czvf deploy.tar.gz deploy/
   ```

### Server Deployment Steps

1. **Navigate to Server Directory**
   ```bash
   cd /www/wwwroot/your-domain
   ```

2. **Backup Current Deployment (Optional)**
   ```bash
   tar -czf backup-$(date +%Y%m%d).tar.gz .next node_modules
   ```

3. **Clean Up Old Files**
   ```bash
   rm -rf deploy
   rm -rf node_modules
   rm -rf .next
   ```

4. **Extract New Files**
   ```bash
   tar -xzvf deploy.tar.gz
   mv deploy/* ./
   rm -rf deploy
   ```

5. **Install Dependencies**
   ```bash
   npm config set registry https://registry.npmmirror.com/
   npm install
   ```

6. **Build Project**
   ```bash
   NODE_ENV=production npm run build
   ```

7. **Start Service**
   ```bash
   pm2 delete my-profile || true
   pm2 start ecosystem.config.js
   ```

## Environment Requirements

- Node.js >= 18.17.0
- NPM >= 9.0.0
- PM2 (for production)

## Features

- Responsive design
- Dark/Light mode
- Smooth page transitions
- Dynamic content loading
- SEO optimized
- Image optimization
- TypeScript support
- ESLint configuration
- Tailwind CSS with custom configuration

## License

MIT License - see [LICENSE](LICENSE) for details.


