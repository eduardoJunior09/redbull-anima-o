const itens = document.querySelectorAll(".item");
const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");

btnNext.addEventListener("click", () => {
  //busca pela div que está ativa
  let index = Array.from(itens).findIndex((div) =>
    div.classList.contains("active")
  );

  //remove class da div
  itens[index].classList.remove("active");

  //verifica a posição do array
  index = index === 2 ? 0 : index + 1;
  transition(index);
});

btnBack.addEventListener("click", () => {
  let index = Array.from(itens).findIndex((div) =>
    div.classList.contains("active")
  );
  itens[index].classList.remove("active");

  index = index === 0 ? 2 : index - 1;
  transition(index);
});

function transition(index) {

  
  itens[index].classList.add("active");
}
