let navbar = () =>{
    return`
        <div id="menu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        </div>

        <div id="icon">
            <a href="#"><img src="./Image/Icon.png"></a>
        </div>

        <div id="link">
            <div id="aboutNav" onclick="aboutFun()"><span> </span>About</div>
            <div id="projectNav" onclick="projectFun()"><span> </span>Projects</div>
            <div id="techstackNav" onclick="techStackFun()"><span> </span>Skill</div>
            <div id="contactNav" onclick="contactFun()"><span> </span>Contact</div>
        </div>
        <button>Resume</button>
    `
}

let footer = () =>{
    return`
    <p>Made with <img src="./Image/heart.png"></p>
    <p>Priyanka Dhar</p>
    <p></p>
    `
}

export {navbar, footer};

