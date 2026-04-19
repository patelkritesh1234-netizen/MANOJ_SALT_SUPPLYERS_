const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const orderForm = document.getElementById("orderForm");
const formStatus = document.getElementById("formStatus");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(orderForm);
  const name = (data.get("name") || "").toString().trim();
  const product = (data.get("product") || "").toString();
  const quantity = (data.get("quantity") || "").toString().trim();

  formStatus.textContent = `Thank you, ${name}. Your enquiry for ${quantity} of ${product} has been received. We will contact you soon.`;
  formStatus.classList.add("success");

  orderForm.reset();
});
