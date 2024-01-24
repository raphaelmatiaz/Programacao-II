window.onload = () => {                                         

    const large = document.querySelector(".large");
    const small = document.querySelector(".small");

    large.onclick = () => {
        small.dispatchEvent(new CustomEvent('small_event'));

    }

    small.addEventListener("small_event", () => {
        console.log("large clicked");
    });
}










