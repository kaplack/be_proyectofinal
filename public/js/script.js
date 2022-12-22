const editUser = document.getElementById("edit-user");
const inputEditUser = document.querySelectorAll(".input-admin__tag");
console.log(editUser);

if (editUser) {
  editUser.addEventListener("click", () => {
    console.log(inputEditUser);
    inputEditUser.forEach((element) => {
      element.removeAttribute("disabled");
    });
  });
}

const seleccionArchivos = document.querySelector("#user-image");
const imagenPrevisualizacion = document.querySelector("#userAvatar-img");

if (seleccionArchivos) {
  seleccionArchivos.addEventListener("change", () => {
    const archivos = seleccionArchivos.files;
    if (!archivos || !archivos.length) {
      return;
    }
    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    console.log(objectURL);
    imagenPrevisualizacion.src = objectURL;
  });
}
