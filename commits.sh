commits=$(git log --pretty=format:"%s  --  %an (%ad)<br/>" -10)

echo 'let commits = `'$commits'`' > recent-commits.js


