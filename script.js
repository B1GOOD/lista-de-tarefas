const addTask = function (e) {
  e.preventDefault();
  const task = document.getElementById("criar--tarefa");
  const tarefaDiv = document.getElementById("tarefas");
  if (!task.value) {
    task.classList.add("atencao");
    setTimeout(() => {
      task.classList.remove("atencao");
    }, 1000);
    return;
  }
  const newTask = document.createElement("article");
  newTask.classList.add("tarefa--item");
  newTask.innerHTML = `<input type="checkbox" class="tarefa--check" name="concluido">
  <h2 class="tarefa--titulo">${task.value}</h2>`;

  tarefaDiv.prepend(newTask);
  adicionalEventos() 
  atualizarContador()
  // alert("Tarefa Adicionada!");
}
function alternarTarefa (event){
  const containerCheck = event.target.parentElement
  containerCheck.classList.toggle("concluida")
  // event.target.parentElement.style.backgroundColor = "red"
}

function adicionalEventos() {
  const todosChecks = document.querySelectorAll(".tarefa--check")
  for (const check of todosChecks) {
    check.addEventListener("change", alternarTarefa)
  }
}
function atualizarContador (){
  const numTarefas = document.querySelectorAll(".tarefa--item").length;
  const contador = document.querySelector(".counter")
  console.log(numTarefas)
  console.log(contador)
  console.log(contador.textContent)
  if (numTarefas <= 0) {
    contador.textContent = "tudo feito 👍"
  }else {
    contador.textContent = `${numTarefas} ${numTarefas > 1 ? "tarefas" : "tarefa"}`
  }
}
function filtrarTarefas(filtro) {
  const todasTarefas = document.querySelectorAll(".tarefa--item");
  console.log(todasTarefas);
  //nomeas dos filtros ?
  //pendentes, concluidas e todos
  if (filtro === "concluidas"){
    for (const tarefa of todasTarefas){
      tarefa.classList.contains("concluida") ? tarefa.style.display = "flex" : tarefa.style.display = "none"
    }
  } else {
    for(const tarefa of todasTarefas){
      tarefa.style.display = "flex"
    }
  }
} 
const add = document.querySelector("#add--tarefa")
add.addEventListener("click", addTask)
const botaoConcluida = document.querySelector("#done")
const botaoTodas = document.querySelector("#todas")
botaoConcluida.addEventListener("click", ()=> {
  filtrarTarefas("concluidas")
})
botaoTodas.addEventListener("click", filtrarTarefas)

atualizarContador()