


const data = {
    products: [
        {
            id: 1,
            nome: "Boneco do Batman",
            preco: 9.99,
            categoria: "brinquedos",
            imagem: "https://images.unsplash.com/photo-1774060526558-f6ed06b93cf7?q=80&w=811&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "Boneco de plástico do personagem Batman",
            emEstoque: true
        },
        {
            id: 2,
            nome: "Samsung Galaxy A54",
            preco: 1899.90,
            categoria: "celulares",
            imagem: "https://images.unsplash.com/photo-1609252924198-30b8cb324d2b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "Celular intermediário com ótima bateria e desempenho sólido.",
            emEstoque: true
        },
        {
            id: 3,
            nome: "Notebook Lenovo IdeaPad 3",
            preco: 2799.00,
            categoria: "notebooks",
            imagem: "https://images.unsplash.com/photo-1763162139130-240507e9fad5?q=80&w=1321&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "Notebook ideal para estudos e tarefas do dia a dia.",
            emEstoque: false
        },
        {
            id: 4,
            nome: "MacBook Air M2",
            preco: 8999.99,
            categoria: "notebooks",
            imagem: "https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFjYm9vayUyMEFpciUyME0yfGVufDB8fDB8fHww",
            descricao: "Ultrafino, potente e com excelente autonomia de bateria.",
            emEstoque: true
        },
        {
            id: 5,
            nome: "Teclado Mecânico Redragon",
            preco: 349.90,
            categoria: "acessorios",
            imagem: "https://images.unsplash.com/photo-1629429409400-79459d5cf9a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGVjbGFkbyUyMG1lY2FuaWNvJTIwcmVkZHJhZ29ufGVufDB8fDB8fHww",
            descricao: "Teclado gamer com iluminação RGB e switches mecânicos.",
            emEstoque: true
        },
        {
            id: 6,
            nome: "Mouse Gamer Razer DeathAdder",
            preco: 299.99,
            categoria: "acessorios",
            imagem: "https://images.unsplash.com/photo-1629121291243-7b5e885cce9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2UlMjByYXplciUyMERlYXRoQWRkZXJ8ZW58MHx8MHx8fDA%3D",
            descricao: "Mouse ergonômico com alta precisão para jogos.",
            emEstoque: false
        },
        {
            id: 7,
            nome: "PlayStation 5",
            preco: 4499.90,
            categoria: "games",
            imagem: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheXN0YXRpb24lMjA1fGVufDB8fDB8fHww",
            descricao: "Console de nova geração com gráficos incríveis.",
            emEstoque: true
        },
        {
            id: 8,
            nome: "Nintendo Switch OLED",
            preco: 2399.00,
            categoria: "games",
            imagem: "https://images.unsplash.com/photo-1634924052395-c8a61c1caedb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            descricao: "Console híbrido com tela OLED vibrante.",
            emEstoque: true
        }
    ]
}
/*EVENTOS*/
window.onload = function(){
    renderCategories()
}


const formModal = document.getElementById("modal-form")
formModal.addEventListener("submit", function(e){
    e.preventDefault()
    const formData = new FormData(formModal)
    const product = {
        id: data.products.length + 1,
        nome: formData.get("nome"),
        preco: formData.get("preco"),
        categoria: formData.get("categoria"),
        imagem: URL.createObjectURL(formData.get("imagem")),
        descricao: formData.get("descricao"),
        emEstoque: formData.get("emEstoque")
    }
    console.log(product)
    data.products.push(product)
    off()
    formModal.reset()
})

const renderBtn = document.getElementById("btnRender")
renderBtn.addEventListener("click", () => {
    renderProducts(data)
    const cards = document.querySelectorAll("[data-id]")
    cards.forEach(card => {
    console.log(card)
})
})

const filterBtn = document.getElementById("btnFilter")
filterBtn.addEventListener("click", () => {
    filterProducts()
})




/*FUNÇÕES EXIGIDAS NA ATIVIDADE*/
function formatPrice(preco){
    const valor = parseFloat(preco)
    return valor
}
function renderProducts(produtos){
    const productList = document.getElementById("product-list")
    productList.innerHTML = ""
    for(i = 0; i < produtos.products.length; i++){
        productList.appendChild(createProductCard(produtos.products[i]))
    }
    
}
function renderCategories(){
    const categorias = document.getElementById("category")
    categorias.innerHTML = ""
    const produtos = data.products
    const categoriasRegistradas = []
    for(i = 0; i < produtos.length; i++){
        const categoriaString = produtos[i].categoria
        if(categoriasRegistradas.includes(categoriaString)){
            continue
        }
        const option = document.createElement("option")
        option.setAttribute("value", categoriaString)
        option.textContent = categoriaString
        categoriasRegistradas.push(categoriaString)
        categorias.appendChild(option)
    }
}
function showProductDetails(produto){
    const productDetails = document.getElementById("product-details")
    productDetails.innerHTML = ""
    productDetails.classList.add("product-details")
    const productTitle = document.createElement("h1")
    const productNome = document.createElement("p")
    const productPreco = document.createElement("p")
    const productCategoria = document.createElement("p")
    const productEstoque = document.createElement("p")
    const productDescricao = document.createElement("p")

    productTitle.textContent = "Detalhes"
    productNome.textContent = `Nome: ${produto.nome}`
    productPreco.textContent = `Preço: ${produto.preco}`
    productCategoria.textContent = `Categoria: ${produto.categoria}`
    productEstoque.textContent = `Estoque: ${produto.emEstoque}`
    productDescricao.textContent = `Descrição: ${produto.descricao}`

    productDetails.appendChild(productTitle)
    productDetails.appendChild(productNome)
    productDetails.appendChild(productPreco)
    productDetails.appendChild(productCategoria)
    productDetails.appendChild(productEstoque)
    productDetails.appendChild(productDescricao)
}
function filterProducts(){
    const searchInput = document.getElementById("search")
    const categoryInput = document.getElementById("category")
    
    const produtos = data.products
    const produtosFiltrados = []

    for(i = 0; i < produtos.length; i++){
        if(produtos[i].nome == searchInput.value && produtos[i].categoria == categoryInput.value){
            produtosFiltrados.push({nome: produtos[i].nome, categoria: produtos[i].categoria})
        }
    }
    console.log(produtosFiltrados)
    return produtosFiltrados
}
function createProductCard(product){
    const productElement = document.createElement("article")
    productElement.dataset.id = product.id
    const productDivImage = document.createElement("div")
    const productImage = document.createElement("img")
    const productDivBtn = document.createElement("div")
    const productBtnVer = document.createElement("button")
    const productBtnDestacar = document.createElement("button")

    productElement.classList.add("card")
    productDivImage.classList.add("card-img")
    productDivBtn.classList.add("card-btn")
    productBtnVer.classList.add("btn")
    productBtnDestacar.classList.add("btn")

    productImage.src = product.imagem

    productBtnVer.textContent = "Ver detalhes"
    productBtnDestacar.textContent = "Destacar"

    productBtnVer.addEventListener("click", () => {
        showProductDetails(product)
    })
    productBtnDestacar.addEventListener("click", (e) => {
        e.target.closest("article").classList.add("card-highlight")
    })
    productDivImage.appendChild(productImage)
    productDivBtn.appendChild(productBtnVer)
    productDivBtn.appendChild(productBtnDestacar)

    productElement.appendChild(productDivImage)
    productElement.appendChild(productDivBtn)

    return productElement
}

/*FUNÇÕES PARA O FORM DO MODAL*/
function on() {
  document.getElementById("overlay").style.display = "flex";
  document.getElementById("modal").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}