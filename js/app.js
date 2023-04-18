let btnAñadir =document.getElementById("btnAñadir"),
inputTarea =document.getElementById("inputTarea"),
listaTareas = document.getElementById("listado");

let nombreTarea;
let numeroTarea = 0;

function añadirAdvertencia() {
    if (listaTareas.children.length === 0) {
        const advertencia = document.createElement("p");
        advertencia.classList.add("lead", "text-danger", "text-center", "fs-2");
        advertencia.textContent = "No hay ninguna tarea...";
        listaTareas.appendChild(advertencia);
    } else if (listaTareas.querySelector(".lead")) {
        listaTareas.querySelector(".lead").remove();
    }
}
function agregarTarea(nombreTarea){
    nombreTarea = inputTarea.value;
    if (nombreTarea === undefined || nombreTarea === null ||nombreTarea === "") {
        alert("Debe ingresar una tarea en el cuadro de texto")
        return;
    }
    numeroTarea ++;
    const tarea = document.createElement("div")
    tarea.classList.add("card","text-bg-dark","rounded-5","py-2","my-3")
    tarea.innerHTML = `
    <div class="card-body d-flex flex-row justify-content-between">
      <h5 class="card-title text-warning fs-4">${nombreTarea}</h5>
      <button class="btn btn-outline-danger" type="button" id="btnEliminar-${numeroTarea}"><i class="bi bi-trash3 fs-1"></i></button>
    </div>`;
    listaTareas.appendChild(tarea);
    inputTarea.value = "";
    let btnEliminar = document.getElementById(`btnEliminar-${numeroTarea}`);
    btnEliminar.addEventListener("click",()=>{
        tarea.remove();
        añadirAdvertencia();
    })
    añadirAdvertencia();
}
btnAñadir.addEventListener("click",() => agregarTarea(nombreTarea))
añadirAdvertencia();