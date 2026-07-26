function showSection(sectionID){


    let sections = document.querySelectorAll(".section");


    sections.forEach(function(section){

        section.classList.remove("show-section");

        section.classList.add("hidden-section");

    });



    let selected = document.getElementById(sectionID);



    if(selected){

        selected.classList.remove("hidden-section");

        selected.classList.add("show-section");


        selected.scrollIntoView({

            behavior:"smooth"

        });

    }


}