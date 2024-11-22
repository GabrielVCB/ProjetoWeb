// script1.js
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

const cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    alert(`${item} foi adicionado ao carrinho.`);
}

// carrinho.js
function goBack() {
    window.location.href = "index.html"; // Voltar para a página inicial
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    let total = 0;

    cartItems.innerHTML = ""; // Limpa o conteúdo atual

    cart.forEach((product, index) => {
        const productHTML = 
            `<div class="cart-item">
                <img src="${product.item.toLowerCase()}.jpg" alt="${product.item}">
                <p>${product.item} - R$ ${product.price},00</p>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(${index}, -1)">-</button>
                    <span>${product.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </div>`;
        cartItems.innerHTML += productHTML;
        total += product.price * product.quantity;
    });

    totalPrice.textContent = `TOTAL: R$ ${total},00`;
}

function changeQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1); // Remove o item se a quantidade for 0
    }
    updateCartDisplay();
}

function finalizeOrder() {
    const paymentMethod = document.getElementById("payment-method").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    if (!paymentMethod || !address || !phone) {
        alert("Por favor, preencha todos os campos antes de finalizar o pedido!");
        return;
    }

    alert("Pedido finalizado com sucesso!");
    window.location.href = "pedidos.html"; // Redireciona para a página de pedidos
}

// Atualiza o carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", updateCartDisplay);

// pedidos.js
document.querySelector(".load-more").addEventListener("click", () => {
    alert("Nenhum pedido adicional encontrado no histórico.");
});
