function nextScreen(number) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("screen" + number)
        .classList.add("active");
}


function tease() {

    const text = document.getElementById("teaseText");

    text.innerText =
        "Nice try 😂 The surprise isn't going anywhere. Try YES ❤️";

}


function startSurprise() {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("countdownScreen")
        .classList.add("active");

    let number = 3;

    const countdown =
        document.getElementById("countdown");

    countdown.innerText = number;

    const timer = setInterval(() => {

        number--;

        if (number > 0) {

            countdown.innerText = number;

            countdown.style.animation = "none";

            void countdown.offsetWidth;

            countdown.style.animation =
                "countPulse 1s ease";

        } else {

            clearInterval(timer);

            countdown.innerText = "❤️";

            setTimeout(() => {

                document.querySelectorAll(".screen")
                    .forEach(screen => {
                        screen.classList.remove("active");
                    });

                document.getElementById("birthdayScreen")
                    .classList.add("active");

            }, 1000);

        }

    }, 1000);
}
function showFinalMessage() {

    const message = document.getElementById("finalMessage");

    message.classList.add("show");

    message.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();
}
