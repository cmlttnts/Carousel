#!/usr/bin/env bash
#add the new remote repo
git remote add origin "$*"
git push origin master
yarn run build
#start the deployment branch
git checkout -b gh-pages
sleep 1
rm *.txt
rm *.json
rm *.js
rm *.html
rm *.lock
rm -r public
rm -r src
cp -a build/. .
git add .
git commit -m "first deploy after template"
git push origin gh-pages
git checkout master
echo "*********FINISH******************* Returned to master"