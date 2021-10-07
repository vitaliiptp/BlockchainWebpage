const email = document.querySelector(".fa-envelopeonclick");

email.onclick = () => {
  Swal.fire("Oops...", "Looks like the backend is not connected yet!", "error");
  // alert("Ooops, looks like the backend is not connected yet.");
};