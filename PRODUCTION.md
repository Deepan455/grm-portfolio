# Production Deployment commands

# 1. Create a .env file with your secrets (if using .env for docker-compose)
# Or export them in your shell:
# export EMAIL_USER=...
# export EMAIL_PASS=...

# 2. Build and Run in detached mode
docker-compose -f docker-compose.yml up -d --build

# 3. View logs
docker-compose -f docker-compose.yml logs -f

# 4. Stop
docker-compose -f docker-compose.yml down
