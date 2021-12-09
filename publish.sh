#!/usr/bin/env bash
##############################################################################
##
##  Publish JS,Android,iOS
##
##############################################################################

CURRENT_DIR=$(cd $(dirname $0); pwd)
CURRENT_VERSION=$(cat $CURRENT_DIR/version)

echo "Current version is "$CURRENT_VERSION

## JS
cd $CURRENT_DIR && npm version $CURRENT_VERSION --allow-same-version

git tag ${CURRENT_VERSION}

git push 

git push --tags

npm install doric-cli -g

npm install

cd $CURRENT_DIR/ && npm publish 