// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = '6d55646b007d4814b154dd246265b809';

// Function to handle currency conversion
function convertCurrency(amount) {
fetch(`https://api.currencyfreaks.com/latest?apikey=${apiKey}`)
.then(response => response.json())
.then(currency => {
    const currencies = document.querySelectorAll('.currency');

    currencies.forEach(currencyElement => {
    const currencyName = currencyElement.querySelector('.currency-name').textContent;
    const currencyPriceElement = currencyElement.querySelector('.currency-price');

    const convertedPrice = Math.round(amount * currency.rates[currencyName]);
    currencyPriceElement.textContent = convertedPrice;
    });
})
.catch(error => {
    console.error('Error:', error);
});
}

// Get the amount input field
const amountInput = document.getElementById('amount');

// Add event listener to handle currency conversion when the amount is changed
amountInput.addEventListener('input', function() {
const amount = parseFloat(amountInput.value);
if (!isNaN(amount)) {
convertCurrency(amount);
}
});
