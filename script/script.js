//destaque menu
const menu = document.querySelector(".menu");
const inicio = document.querySelector(".inicio");
const form = document.querySelector(".form");
const proje = document.querySelector(".proje");
const cont = document.querySelector(".cont");
//intersection observer
const sections = document.querySelectorAll("section");
const options = {
  root: null,
  threshold: [0.4],
};

//projetos mudança
const imgProjetos = document.querySelectorAll(".proj-img img");
const projTitulo = document.querySelector(".proj-titulo");
const projInfo = document.querySelector(".proj-info");
const projAcess = document.querySelector(".proj-acess");

for (var i = 0; i < 4; i++) {
  imgProjetos[0].onclick = function () {
    projTitulo.innerText = "Gestora Santos";
    projInfo.innerText =
      "Site desenvolvido apenas para fins de estudo, consiste em uma Gestora de imóveis voltada para a locação de apartamentos na àrea de turismo. Composto por uma única pagina contendo todas as informações que normalmente se encontraria em um cartão de visita.";

    projAcess.href = "https://ovisu.github.io/protGest/";
    projAcess.innerText = "Acessar Site";

    //mudança de estilo botao
    projAcess.classList.add("intro-link");
    projAcess.classList.remove("intro-link2");

    //img destaque
    imgProjetos[0].classList.add("proj-img-destaque");
    imgProjetos[1].classList.remove("proj-img-destaque");
    imgProjetos[2].classList.remove("proj-img-destaque");
    imgProjetos[3].classList.remove("proj-img-destaque");
  };
  imgProjetos[1].onclick = function () {
    projTitulo.innerText = "Sol das Caldas";
    projInfo.innerText =
      "Projeto feito com o intuito de treinar e aprimorar habilidades com JavaScript, o projeto não possui nenhuma ligação com o estabelecimento citado e foi desenvolvido puramente para fins de estudo. ";

    projAcess.href = "https://ovisu.github.io/solProt/index.html";
    projAcess.innerText = "Acessar Site";

    //mudança de estilo botao
    projAcess.classList.add("intro-link");
    projAcess.classList.remove("intro-link2");

    //img destaque
    imgProjetos[0].classList.remove("proj-img-destaque");
    imgProjetos[1].classList.add("proj-img-destaque");
    imgProjetos[2].classList.remove("proj-img-destaque");
    imgProjetos[3].classList.remove("proj-img-destaque");
  };
  imgProjetos[2].onclick = function () {
    projTitulo.innerText = "Portfólio V2";
    projInfo.innerText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc tincidunt, facilisis lorem vitae, imperdiet neque. In in orci et nunc condimentum congue non sit amet tellus. Phasellus vitae sem odio. Etiam imperdiet, dolor ut laoreet eleifend.";

    projAcess.href = "javascript:void(0);";

    projAcess.innerText = "Em breve";

    //mudança de estilo botao
    projAcess.classList.add("intro-link2");
    projAcess.classList.remove("intro-link");

    //img destaque
    imgProjetos[0].classList.remove("proj-img-destaque");
    imgProjetos[1].classList.remove("proj-img-destaque");
    imgProjetos[2].classList.add("proj-img-destaque");
    imgProjetos[3].classList.remove("proj-img-destaque");
  };

  imgProjetos[3].onclick = function () {
    projTitulo.innerText = "O Pioneiro";
    projInfo.innerText =
      "Site desenvolvido apenas para fins de estudo, consiste em uma coleção de arquivos sobre relatos sobrenaturais, teorias da conspiração e afins. O foco do site esta na experiência do leitor, tendo seu design feito de maneira que se assemelhe com os arquivos escritos por uma maquina de escrever.";

    projAcess.href = "javascript:void(0);";

    projAcess.innerText = "Em breve";

    //mudança de estilo botao
    projAcess.classList.add("intro-link2");
    projAcess.classList.remove("intro-link");

    //img destaque
    imgProjetos[0].classList.remove("proj-img-destaque");
    imgProjetos[1].classList.remove("proj-img-destaque");
    imgProjetos[2].classList.remove("proj-img-destaque");
    imgProjetos[3].classList.add("proj-img-destaque");
  };
}

//destaque menu
const observer = new IntersectionObserver((menui) => {
  menui.forEach((e) => {
    if (e.isIntersecting) {
      if (e.target.id == "inicio") {
        inicio.classList.add("menu-dest");
        form.classList.remove("menu-dest");
        proje.classList.remove("menu-dest");
        cont.classList.remove("menu-dest");
      } else if (e.target.id == "form") {
        inicio.classList.remove("menu-dest");
        form.classList.add("menu-dest");
        proje.classList.remove("menu-dest");
        cont.classList.remove("menu-dest");
      } else if (e.target.id == "proje") {
        inicio.classList.remove("menu-dest");
        form.classList.remove("menu-dest");
        proje.classList.add("menu-dest");
        cont.classList.remove("menu-dest");
      } else if (e.target.id == "cont") {
        inicio.classList.remove("menu-dest");
        form.classList.remove("menu-dest");
        proje.classList.remove("menu-dest");
        cont.classList.add("menu-dest");
      }
    }
  });
}, options);

//intersection observer
sections.forEach((section) => {
  observer.observe(section);
});

//menumobile
function mostraMenu() {
  menu.classList.toggle("mostra");
}
