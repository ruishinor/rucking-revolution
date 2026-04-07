#!/bin/sh
# Instructions: use with caution. This rewrites git history to remove sensitive files.
# Requires `git filter-repo` (recommended) or BFG repo-cleaner.

echo "This script will show recommended commands for removing 'poc/private/cards.json' and 'poc/private/master.key' from history. It will NOT run them automatically."
echo "Recommended (git-filter-repo):"
echo "  git clone --mirror <repo-url> repo.git"
echo "  cd repo.git"
echo "  git filter-repo --path poc/private/cards.json --path poc/private/master.key --invert-paths"
echo "  git push --force --all"

echo "Alternative (BFG):"
echo "  java -jar bfg.jar --delete-files 'poc/private/cards.json' --delete-files 'poc/private/master.key' repo.git"
echo "  cd repo.git && git reflog expire --expire=now --all && git gc --prune=now --aggressive && git push --force"

echo "After rewriting history, rotate all secrets and inform collaborators."
