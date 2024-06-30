#!/bin/bash

set -euo pipefail

git checkout deploy
git merge main --ff-only
git push origin deploy

git checkout -
