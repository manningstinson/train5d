// js/footer.js
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
    <footer>
      <div class="footer-left">
        <div class="logo">
          <a href="index.html"><img src="path_to_footer_logo.png" alt="Train5D Logo"></a>
        </div>
        <div>
          &copy; 2024 Train5D. All Rights Reserved. |
          <a href="privacy_policy.html">Privacy Policy</a> |
          <a href="terms_of_service.html">Terms of Service</a>
        </div>
      </div>
      <div class="footer-right">
        <div class="payment-icons">
          <img src="path_to_visa_icon.png" alt="Visa">
          <img src="path_to_mastercard_icon.png" alt="Mastercard">
          <img src="path_to_amex_icon.png" alt="Amex">
          <img src="path_to_paypal_icon.png" alt="PayPal">
          <img src="path_to_gpay_icon.png" alt="Google Pay">
          <img src="path_to_applepay_icon.png" alt="Apple Pay">
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
});
