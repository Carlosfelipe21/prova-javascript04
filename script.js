let lista = []
let sair = false


for(;!sair;){
    let opcao =prompt(
        "menu: \n"+
        "1 - Adicionar\n"+
        "2 - Remover\n"+
        "3 - Exibir\n"+
        "4 - Atualizar\n"+
        "5 - Sair"
    )
    if (opcao  < "1" || opcao > "5"){
        console.log("Numero invalido")
    }
    else if (opcao === "1"){
        lista.push(prompt("Digite o Item: "))
    }else if (opcao === "2"){
        let i = Number(prompt("Item a ser Removido: "))
        if (i >= 0 && i < lista.length) lista.splice(i, 1)
    }else if (opcao === "3"){
        let texto = lista.map((item, i)=> i + "-"+ item).join("\n")
        alert(texto || "Lista Vazia")
    }else if (opcao === "4"){
        let i = Number(prompt("Item a ser Atualizado: "))
        if (i >= 0 && i < lista.length) lista[i] = prompt("Novo Valor: ")
    }else if (opcao === "5"){
        sair = true
    }
}