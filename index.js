// import the robotjs library

let robot = require('robotjs');

function main() {
    console.log("starting");

    sleep(4000);
    
    //predefined px
    // let firstTreeX = 1441;
    // let firstTreeY = 559;
    // let secondTreeX = 512;
    // let secondTreeY = 536;
    
    //basic infinite loop
    while (true) {
        //if we can't find a tree write a error message
        let tree = findTree();
        if (tree == false) {
            console.log('tree not found');
            break;
        }

        //chop down tree
        robot.moveMouse(tree.x, tree.y);
        robot.mouseClick();
        sleep(8000);

        dropLogs();

        //chop down second tree
        // robot.moveMouseSmooth(secondTreeX, secondTreeY);
        // robot.mouseClick();
        // sleep(8000);
    }
}

function dropLogs() {
    let inventoryX = 1831;
    let inventoryY= 842;
    //drop logs from inventory
    robot.moveMouse(inventoryX, inventoryY);
    robot.mouseClick('right');
    robot.moveMouse(inventoryX, inventoryY + 70);
    robot.mouseClick();
    sleep(1000);
}

function testScreenCapture() {
    // taking a screenshot
    let img = robot.screen.capture(0, 0, 1920, 1080);

    let pixelColor = img.colorAt(30, 18);
    console.log(pixelColor);
}

function findTree() {
    let x = 300, y = 300, width = 1300, height = 400;
    let img = robot.screen.capture(x, y, width, height);

    let treeColors = ["#3D2B16", "#2e200f", "#2e200f", "#5f4223", "#624522", "#332310", "#382915",];

    for (let i = 0; i <100; i++) {
        let sampleColor = img.colorAt(i, 0);
    }
}

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

main();
