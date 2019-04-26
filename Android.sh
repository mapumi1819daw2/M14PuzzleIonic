#!/bin/bash
echo "Exportant variables d'entorn";
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
echo "Executant ionic per android";
ionic cordova run android -l

