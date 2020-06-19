#!/usr/bin/env bash
#commit development changes and push to remote 
git add .
git commit -m "$*"
git push
echo "*****************************************pushed"
yarn run build
echo "*****************************************build done"
git checkout gh-pages
echo "*****************************************now in gh-pages branch"
sleep 1
rm *.txt
rm *.json
rm *.js
rm *.html
rm -r static
cp -a build/. .
git add .
git commit -m "$*"
git push
git push origin gh-pages
echo "*****************************************master is pushed"
git checkout master
echo "*****FINISH******************************return to master branch"