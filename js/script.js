function handleproductchange(product, isIncrease) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  let newproductCount = productCount;

  if (isIncrease == true) {
    newproductCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 1) {
    newproductCount = productCount - 1;
  }
  productInput.value = newproductCount;

  let productTotal;
  if ((product = "laptop")) {
    productTotal = newproductCount * 149000;
  } else {
    productTotal = newproductCount * 2460;
  }

  document.getElementById(product + "-count").innerText = productCount;
  Handlecheckout();
}
function Handlecheckout() {
  const laptopCount = parseInt(document.getElementById("laptop-count").value);
  const earphoneCount = parseInt(
    document.getElementById("earphone-count").value
  );

  const Totalprice = laptopCount * 149000 + earphoneCount * 2460;
  document.getElementById("sub-total").innerText = Totalprice;

  const tex = Math.round(Totalprice * 0.35);
  document.getElementById("tex-amount").innerText = tex;

  const grandtotal = Totalprice + tex;
  document.getElementById("grand-total").innerText = grandtotal;
}

function checkout() {
  alert("Thanks for purchasing interactive card");
  location.reload();
}
