import Sponsors from './constant.js'

$(document).ready(initialize);

function initialize(){
    addSponsors();
}


let addSponsors = () => {
    Sponsors.map(sponsor => {
        console.log(sponsor.src)
        return(
            $(".section_2_container").append(`<img src= ${sponsor.src} width=10%/>`)
        )
    })
}