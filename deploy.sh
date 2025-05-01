#!/bin/bash

# Deployment Script for GitHub Pages
# Ensures clean deployment excluding system files and build artifacts

# Navigate to project root (safe method)
cd "$(dirname "$0")" || { echo "Failed to navigate to script directory"; exit 1; }

# ======================
# 1. PRE-DEPLOYMENT CLEANUP
# ======================
echo "🧹 Cleaning build cache and system files..."

# Remove master cache
rm -rf node_modules/.cache/master

# Delete system-specific hidden files
find dist -type \( -name '.DS_Store' -o -name 'Thumbs.db' -o -name 'desktop.ini' \) -delete

# ======================
# 2. PROJECT BUILD
# ======================
echo "🔨 Building project..."
npm run build || { echo "Build failed"; exit 1; }

# ======================
# 3. DEPLOYMENT PREP
# ======================
echo "🚀 Preparing deployment..."
cd dist || { echo "Dist directory missing"; exit 1; }

# Create comprehensive .gitignore
cat > .gitignore << 'EOL'
# System files
.DS_Store
Thumbs.db
desktop.ini

# Build artifacts
*.log
*.tmp
*.map

# Environment files
.env
*.env.local

# Debug files
debug.log
npm-debug.log*

# Local deployment git data
dist/.git
dist/.gitignore
EOL

# ======================
# 4. GIT DEPLOYMENT
# ======================
git init
git checkout -B master

# Add files with explicit exclusion check
find . -type f ! -path './.git/*' ! -name '.gitignore' -exec git add {} +

# Commit with timestamp
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')" || { echo "Nothing to commit"; exit 0; }

# Force push to remote
git remote add origin git@github.com:SusieYonng/SusieYonng.github.io.git || echo "Remote already exists"
git push -f origin master

# ======================
# 5. POST-DEPLOYMENT CLEANUP
# ======================
cd ..
rm -rf dist/.git
echo "✅ Deployment successful! https://susieyonng.github.io/"