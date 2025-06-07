$(burgers).each((index, element) => {

    $("#hamburgueres > .accordion-body").append(`
        <div class="card d-flex p-2 gap-2 mt-3 border-0">
            <div class="card-bx-img">
                <img src="${element.imagem}" alt=""
             class="rounded bg-secondary img-fluid">
            </div>

             <div class="card-body w-100">
                 <h5 class="card-title">${element.nome}</h5>
                 <p class="mb-0"><b>Ingredientes:</b> ${element.ingredientes.join(", ")}</p>
                 <p><b>Descrição:</b> ${element.descricao}</p>
                 <p class="mb-0"><b>Preço:</b> ` + element.preco.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' }) + `</p>
             </div>
     </div>
    `)

})

$(drinks).each((index, element) => {

    $("#bebidas > .accordion-body").append(`
        <div class="card d-flex p-2 gap-2 mt-3 border-0">
            <div class="card-bx-img">
                <img src="${element.imagem}" alt=""
             class="rounded bg-secondary img-fluid">
            </div>

             <div class="card-body w-100">
                 <h5 class="card-title">${element.nome}</h5>
                 <p class="mb-0"><b>Descrição:</b> ${element.descricao}</p>
                 <p class="mb-0"><b>Preço:</b> ` + element.preco.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' }) + `</p>
             </div>
     </div>
    `)

})