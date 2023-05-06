const testimonials = [
    {
        name: "Earle G",
        photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "You won't regret it. I made back the purchase price in just 48 hours! We can't understand how we have been living without Apple. The very best.",
    },
    {
        name: "Kaye Z",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "I would also like to say thank you to all your staff. I don't always clop, but when I do, it's because of Apple."
    },
    {
        name: "Donnie P.",
        photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "I like Apple more and more each day because it makes my life a lot easier."
    },
    {
        name: "Alysa X",
        photoUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "It really saves me time and effort. Apple is exactly what our business has been lacking. Really good. I'd be lost without Apple."
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");


let idx = 0;
updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } =
        testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000);

}
