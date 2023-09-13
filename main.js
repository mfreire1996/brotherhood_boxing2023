document.getElementsByClassName('form').addEventListener("submit", function (event){
    event.preventDefault();

    const form = event.target;
    const formData = new formData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
    .then(response => {
        if(response.ok) {
            window.location.href = "index.html"
        } else {
            console.error("Form submission error", response.statusText)
        }
    })
    .catch(error => {
        console.error("Network error:", error)
    });
});