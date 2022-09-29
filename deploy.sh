#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build
cd dist

# place .nojekyll to bypass Jekyll processing
echo >.nojekyll

git init
git checkout main
git add -A
git commit -m 'deploy'

git push -f git@github-mickambar19.com:mickambar19/workspace-tool.git main:gh-pages

cd -
