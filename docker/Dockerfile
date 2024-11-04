# Use Node.js v20 as base image (matching .nvmrc)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile --network-timeout 600000

# Copy project files
COPY . .

# Build the app
RUN yarn build
#RUN yarn serve -- --build --port 80 --host 0.0.0.0

CMD ["npm", "run", "serve", "--", "--build", "--port", "80", "--host", "0.0.0.0", "--no-open"]

# Use nginx to serve static files
#FROM nginx:alpine

# Copy built files to nginx
#COPY --from=0 /app/build /usr/share/nginx/html
# Copy nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80
#EXPOSE 80
# Start nginx
#CMD ["nginx", "-g", "daemon off;"]
