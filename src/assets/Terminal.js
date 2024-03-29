import { Terminal } from 'xterm'
import { Project } from './Project.js'
import { WebLinksAddon } from "xterm-addon-web-links";

const encodedName = `
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \r
:::::::::  :::            :::     :::    ::: ::::::::::      ::::::::::: :::    ::: :::::::::  ::::    ::: :::::::::: :::::::::  \r
:+:    :+: :+:          :+: :+:   :+:   :+:  :+:                 :+:     :+:    :+: :+:    :+: :+:+:   :+: :+:        :+:    :+: \r
+:+    +:+ +:+         +:+   +:+  +:+  +:+   +:+                 +:+     +:+    +:+ +:+    +:+ :+:+:+  +:+ +:+        +:+    +:+ \r
+#++:++#+  +#+        +#++:++#++: +#++:++    +#++:++#            +#+     +#+    +:+ +#++:++#:  +#+ +:+ +#+ +#++:++#   +#++:++#:  \r
+#+    +#+ +#+        +#+     +#+ +#+  +#+   +#+                 +#+     +#+    +#+ +#+    +#+ +#+  +#+#+# +#+        +#+    +#+ \r
#+#    #+# #+#        #+#     #+# #+#   #+#  #+#                 #+#     #+#    #+# #+#    #+# #+#   #+#+# #+#        #+#    #+# \r
#########  ########## ###     ### ###    ### ##########          ###      ########  ###    ### ###    #### ########## ###    ### \r
`

class CustomTerminal {
    constructor() {
        this.terminal = new Terminal();
    }

    loadTerminal(element) {
        this.terminal.loadAddon(new WebLinksAddon());
        this.terminal.open(element);
        this.fitToScreen();
        addEventListener("resize", () => {this.fitToScreen()});
        this.terminal.focus();
    }

    fitToScreen() {
        const pixelWidth = window.innerWidth;
        const pixelHeight = window.innerHeight;
        const CHARACTER_WIDTH = 9;
        const CHARACTER_HEIGHT = 17;
        const SCROLLER_BAR_WIDTH_IN_CHARACTERS = 3; // BAD NAME
        const numberOfColumns = Math.floor(pixelWidth/CHARACTER_WIDTH) - SCROLLER_BAR_WIDTH_IN_CHARACTERS;
        const numberOfRows = Math.floor(pixelHeight/CHARACTER_HEIGHT);
        this.terminal.resize(numberOfColumns, numberOfRows);
    }
    
    
}

// 128 characters wide
function textInMiddleOfLine(text, spanLength) {
    const LINE_CHARCTER = "\u2500"
    const HALF_SPAN_LENGTH = spanLength/2 // SHITTY NAME
    const LINE_LENGTH = HALF_SPAN_LENGTH-(Math.floor(text.length/2)) // SHITTY NAME

    var LINE_STRING = ""
    for(let i=0; i<LINE_LENGTH; i++) {
        LINE_STRING = LINE_STRING + LINE_CHARCTER;
    }

    return LINE_STRING + text + LINE_STRING + "\r"
}

function UnderlineWithSpaces(text) {
    const splitText = text.split(" ")

    var ANSIIFormatedText = ""
    splitText.forEach(part => {
        ANSIIFormatedText = ANSIIFormatedText + "\x1b[1;4m\x1b[1;92m\x1b[1;100m" + part + "\x1b[1;0m\x1b[1;100m" + " "
    })

    ANSIIFormatedText = ANSIIFormatedText.substring(0, ANSIIFormatedText.length - 1);
    return ANSIIFormatedText + "\x1b[1;0m"
}

function loadProjects(terminal) {
    var projects = []
    const VulnerableWebApp = new Project("Vulnerable Web App", "A web app that simulates a vulnerable web app application for red team vs blue team competitions", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*", "https://github.com/BlakeTnr/UB-Lockdown-Vulnerable-Web-App")
    projects.push(VulnerableWebApp)
    const Perception = new Project("Peception", "A Unity game using math to create math and physics to make mind bending puzzles", null, "https://github.com/BlakeTnr/Perception")
    projects.push(Perception)
    const InternetScoreChecker = new Project("Web Traffic Simulator (InternetScoreChecker)", "Used to simulate 'employee' internet traffic for red team vs blue team competitions.\n\r\tMakes it so blue teams can't turn off access to the internet and still win.", null, "https://github.com/BlakeTnr/Internet-Scoring-Client"); // BAD NAME
    projects.push(InternetScoreChecker)
    const Blender = new Project("3D Art Portfolio", "3D blender art portfolio", null, "https://github.com/BlakeTnr/Blender");
    projects.push(Blender)

    projects.forEach(project => {
        
        terminal.terminal.writeln("\x1b[1;92m" + "   " + UnderlineWithSpaces(project.name))
        terminal.terminal.writeln("\x1b[1;92m" + "\t" + project.description + "\n")
        terminal.terminal.writeln("\x1b[1;92m" + "\t" + project.link + "\x1b[1;0m\n\n")

    })
    
}

export { CustomTerminal, encodedName, textInMiddleOfLine, loadProjects }