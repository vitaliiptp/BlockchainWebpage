const contsctSubmit = document.querySelector(".submit-button");
contsctSubmit.addEventListener('click', (event) => {
    Swal.fire("Oops...", "Looks like the backend is not connected yet!", "error");
    // alert("Ooops, looks like the backend is not connected yet.");
});