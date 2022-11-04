import {navbar,footer} from "../script/comp.js"

document.getElementById("nav").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let hamburger = document.querySelector("#menu");
let link = document.querySelector("#link");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    link.classList.toggle("active");
})

let button = document.querySelectorAll("button");

button.forEach((x) => {
    x.addEventListener("click", ()=>{
        let link = x.innerText;
        let url;
        if(link == "Resume"){
            let file = 'File/Priyanka_Dhar_Resume.pdf'

            let dwnld =  document.createElement('a');
            dwnld.href = file;
            dwnld.download = file.substring(file.lastIndexOf('/') + 1);
            dwnld.click();
            
            // url = "https://drive.google.com/file/d/1Q_tEP6AO6qxIWG850LAC4Fei4GPjjq5j/view?usp=sharing"

        }else if(link == "GitHub"){
            url = "https://github.com/Priyanka4251"

            window.open(url);
        }
        else if(link == "Github"){

            if(x.value == "blue"){
                url = "https://github.com/ujjwalpaul005/materialistic-knife-835";
            }else if(x.value == "jiomart"){
                url = "https://github.com/atalkrpandey/-thoughtful-advertisement-6741"
            }else if(x.value == "weather"){
                url = "https://github.com/atalkrpandey/-thoughtful-advertisement-6741"
            }else if(x.value == "food"){
                url = "https://github.com/atalkrpandey/-thoughtful-advertisement-6741"
            }else if(x.value == "recipe"){
                url = "https://github.com/atalkrpandey/-thoughtful-advertisement-6741"
            }else if(x.value == "payment"){
                url = "https://github.com/atalkrpandey/-thoughtful-advertisement-6741"
            }

            window.open(url);
        }else if(link == "Live"){

            if(x.value == "blue"){
                url = "https://tiny-lamington-704c8c.netlify.app/";
            }else if(x.value == "jiomart"){
                url = "https://jolly-beignet-298a1b.netlify.app/"
            }else if(x.value == "weather"){
                url = "https://jolly-beignet-298a1b.netlify.app/"
            }else if(x.value == "food"){
                url = "https://jolly-beignet-298a1b.netlify.app/"
            }else if(x.value == "recipe"){
                url = "https://jolly-beignet-298a1b.netlify.app/"
            }else if(x.value == "payment"){
                url = "https://jolly-beignet-298a1b.netlify.app/"
            }

            window.open(url);
        }
        else if(link == "LinkedIn"){
            url = "https://www.linkedin.com/in/ujjwal-paul-204027235/";
            window.open(url);
        }
        
    })})


   