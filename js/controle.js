let contador = 0; 
let main = document.getElementById('areaLista');
let input = document.getElementById('inputTarefas');
let btnAdd = document.getElementById('btn-add');

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>

        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>

        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete">Deletar</i></button>
        </div>
    </div>`;

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR OS CAMPOS (IMPUT)
    input.value = "";
    input.focus();
    }
}

//FUNÇÃO PARA DELETAR
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//PARA A LISTA FICAR MARCADA E DESMARCADA
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if(classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        //PARA O ITEM QUE ESTA C/ CHECK IR PARA O FINAL
       item.parentNode.appendChild(item); 
    }
    else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

//PARA O USUÁRIO ACIONAR O BOTÃO "ADICIONAR" C/ O TECLADO ENTER
input.addEventListener("keyup", function (event){
    //SE TECLOU ENTER (13)
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})
