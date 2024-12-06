let sections = document.querySelectorAll('sections');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href=' + home + ']').classList
                .add('active');

            });
        };

    });
};

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("msg");

function sendEmail() {
    const bodymessage = `name: ${name.value}<br> Email: ${email.value}<br> Message: ${msg.value}`;

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jedmartinarellano0309@gmail.com",   
    Password : "50F479A76A65A0497B1E1AB30F0D33640C2E",  
    To : 'jedmartinarellano0309@gmail.com',
    From : "jedmartinarellano0309@gmail.com",
    Subject : msg.value,
    Body : bodymessage
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", (e) => {
   e.preventDefault();

   sendEmail();
}); 