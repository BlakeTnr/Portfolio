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

    loadTerminal() {
        document.getElementById("terminal");
        this.terminal.open(document.getElementById('terminal'));
        this.fitToScreen();
        addEventListener("resize", (event) => {this.fitToScreen()});
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
    LINE_CHARCTER = "\u2500"
    HALF_SPAN_LENGTH = spanLength/2 // SHITTY NAME
    LINE_LENGTH = HALF_SPAN_LENGTH-(Math.floor(text.length/2)) // SHITTY NAME

    LINE_STRING = ""
    for(let i=0; i<LINE_LENGTH; i++) {
        LINE_STRING = LINE_STRING + LINE_CHARCTER;
    }

    return LINE_STRING + text + LINE_STRING + "\r"
}

const terminal = new CustomTerminal();
terminal.loadTerminal();
terminal.terminal.write(encodedName);
terminal.terminal.writeln(textInMiddleOfLine(" Software Developer, Cyber-Security Enthusiast & High School Senior ", 128))
terminal.terminal.writeln("Projects:\n\n\n\r");
loadProjects()

function loadProjects() {
    projects = []
    VulnerableWebApp = new Project("Vulnerable Web App", "A web app that simulates a vulnerable web app application for red team vs blue team competitions", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*")
    projects.push(VulnerableWebApp)
    Perception = new Project("A video game I made about perception", "Uses Unity and math to create mind bending puzzles", null)
    projects.push(Perception)
    InternetScoreChecker = new Project("Simulate Web Traffic (InternetScoreChecker)", "Used to simulate 'employee' internet traffic for red team vs blue team competitions. Makes it so blue teams can't turn off access to the internet and still win.", null); // BAD NAME
    projects.push(InternetScoreChecker)
    Blender = new Project("Some of my 3D art work", "3D blender art", null);
    projects.push(Blender)
    TimelineGame = new Project("Some of my 3D art work", "3D blender art", null);
    projects.push(Blender)

    projects.forEach(project => {
        terminal.terminal.writeln(project.name)
        terminal.terminal.writeln(project.description + "\n")

    })
    
}