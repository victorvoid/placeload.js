#!/bin/bash

# show
function show(){
    sjs --module es6-macros/macros/destructure \
        --module lambda-chop/macros \
        --module ./macros/condition \
        --module ./macros/functions.operator \
        --module ./macros/log \
        ./src/app.js
}

function build(){
    sjs --module es6-macros/macros/destructure \
        --module lambda-chop/macros \
        --module ./macros/condition \
        --module ./macros/functions.operator \
        --module ./macros/log \
        ./src/app.js \
        -o ./lib/placeload.js
}

if [[ $# -eq 0 ]] ; then
    echo ''
    echo -e '\033[31m/o/ put some argument > build or show \033[0m';
    exit 1
fi

if [ "$1" == "show" ]; then
    echo -e '\033[34m...\033[0m';
    show
    exit 1
fi

if [ "$1" == "build" ]; then
    echo -e '\033[33mBuilding... \033[0m';
    build
    echo -e '\033[32mSuccess!\033[0m';

    exit 1
fi
