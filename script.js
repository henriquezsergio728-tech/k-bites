const BUSINESS_WHATSAPP_NUMBER = '503XXXXXXXX'; // Replace with your real number, country code included. Example: 50370000000
const UNIT_PRICE = 11.90;

const form = document.querySelector('#orderForm');
const quantityInput = document.querySelector('#quantity');
const totalOutput = document.querySelector('#total');

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function updateTotal() {
  const quantity = Math.max(1, Number(quantityInput.value || 1));
  totalOutput.textContent = formatCurrency(quantity * UNIT_PRICE);
}

quantityInput.addEventListener('input', updateTotal);
updateTotal();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const quantity = Math.max(1, Number(quantityInput.value || 1));
  const details = document.querySelector('#details').value.trim();
  const total = quantity * UNIT_PRICE;

  const order = {
    product: 'K-Bites Premium Traditional Kimchi - 24 oz jar',
    name,
    quantity,
    details,
    total: formatCurrency(total),
    createdAt: new Date().toISOString(),
    status: 'whatsapp-draft'
  };

  // Temporary local persistence. Later this can be replaced with a backend/database call.
  const existingOrders = JSON.parse(localStorage.getItem('kBitesOrders') || '[]');
  existingOrders.push(order);
  localStorage.setItem('kBitesOrders', JSON.stringify(existingOrders));

  const message = [
    'Hello K-Bites! I want to place an order:',
    '',
    `Name: ${order.name}`,
    `Product: ${order.product}`,
    `Quantity: ${order.quantity}`,
    `Estimated total: ${order.total}`,
    `Delivery/pickup details: ${order.details}`
  ].join('\n');

  const whatsappUrl = `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});
