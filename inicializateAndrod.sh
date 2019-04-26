#!/bin/bash

echo 'Iniciant Android per Ionic';
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
echo "S'han exportat les variables d'entorn";
ionic cordova run android -l
exec;
