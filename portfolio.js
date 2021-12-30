
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
sr.reveal('.home_social_icon',{ interval: 200}); 
sr.reveal('.skills_data, .work_img, .contact_input',{interval: 200}); 

/*===== Contact Validation =====*/
function validate(){
    var name=document.getElementById("name");
    var mail=document.getElementById("mail").value;
    var regx=/^([a-z 0-9 \.-]+)@([a-z 0-9 -]+).([a-z]{2,8})(.[a-z]{2,8})?/;
    if (name.value.trim()=="") {
        alert("Name cannot be blank");
        return false;
    }

    if (regx.test(mail)) {

    }
    else{
        alert("Please check your mail id again");
        return false;
    }
}