/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.textContent =

        navbar.classList.contains("active")

        ? "✕"

        : "☰";

});

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

/* ================= FAQ ================= */

const faqItems =

    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button =

        item.querySelector("button");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ================= MODAL ================= */

const modal =

    document.getElementById("modal");

const modalText =

    document.getElementById("modalText");

const closeModal =

    document.getElementById("closeModal");

function showModal(message) {

    modalText.textContent = message;

    modal.classList.add("show");

}

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});

modal.addEventListener("click", event => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});

/* ================= ADMISSION FORM ================= */

const admissionForm =

    document.getElementById("admissionForm");

admissionForm.addEventListener("submit", event => {

    event.preventDefault();

    const enquiry = {

        name:

            document.getElementById("name").value,

        email:

            document.getElementById("email").value,

        city:

            document.getElementById("city").value,

        program:

            document.getElementById("program").value,

        message:

            document.getElementById("message").value,

        date:

            new Date().toLocaleString()

    };

    const oldData =

        JSON.parse(

            localStorage.getItem("admissionEnquiries")

        ) || [];

    oldData.push(enquiry);

    localStorage.setItem(

        "admissionEnquiries",

        JSON.stringify(oldData)

    );

    admissionForm.reset();

    showModal(

        `Thank you ${enquiry.name}! Your admission enquiry has been recorded in this demo website.`

    );

});

/* ================= CONTACT FORM ================= */

const contactForm =

    document.getElementById("contactForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const messageData = {

        name:

            document.getElementById("contactName").value,

        email:

            document.getElementById("contactEmail").value,

        subject:

            document.getElementById("subject").value,

        message:

            document.getElementById("contactMessage").value,

        date:

            new Date().toLocaleString()

    };

    const oldMessages =

        JSON.parse(

            localStorage.getItem("contactMessages")

        ) || [];

    oldMessages.push(messageData);

    localStorage.setItem(

        "contactMessages",

        JSON.stringify(oldMessages)

    );

    contactForm.reset();

    showModal(

        "Thank you! Your message has been recorded in this demo website."

    );

});

/* ================= YEAR ================= */

document.getElementById("year").textContent =

    new Date().getFullYear();

/* ================= IMAGE LOADING ================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.background =

            "linear-gradient(135deg,#071d3a,#164d8c)";

        img.style.objectFit = "cover";

    });

});