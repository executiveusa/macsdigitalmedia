# Coolify fallback deploy for macsdigitalmedia (Netlify credits exhausted).
# Next.js 16 production build + next start. Runtime env: SUPABASE_URL,
# NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, APPLICATION_HASH_SECRET,
# SITE_AGENT_TOKEN (same values as the Netlify site env).
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=80
COPY --from=build /app ./
EXPOSE 80
CMD ["npx", "next", "start", "-p", "80"]
