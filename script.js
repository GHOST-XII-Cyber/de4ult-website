// =========================
// DE4ULT WEBSITE SCRIPT
// =========================



// SHOW WEBSITE SECTIONS

function showSection(sectionID){


    // Get all sections

    let sections = document.querySelectorAll(".section");



    // Hide every section

    sections.forEach(function(section){

        section.classList.remove("show-section");

        section.classList.add("hidden-section");

    });



    // Show selected section

    let selectedSection = document.getElementById(sectionID);



    if(selectedSection){


        selectedSection.classList.remove("hidden-section");


        selectedSection.classList.add("show-section");



        selectedSection.scrollIntoView({

            behavior:"smooth"

        });


    }


}







// COPY DE4ULT CONTRACT ADDRESS


function copyContract(){


    const contractAddress = 
    "0x27c0E497D6a997380649d8d0beB74a357C70b89A";



    navigator.clipboard.writeText(contractAddress)



    .then(function(){


        alert("DE4ULT Contract Address Copied!");



    })



    .catch(function(){


        alert("Unable to copy contract address");


    });



}







// BUTTON LOADING EFFECT


document.addEventListener("DOMContentLoaded", function(){



    const button = document.querySelector(".hero-content button");



    if(button){


        button.addEventListener("click", function(){


            button.innerHTML = "ENTERING...";


            setTimeout(function(){


                showSection("tokenomics");


                button.innerHTML = "ENTER ECOSYSTEM";



            },800);



        });



    }



});