const inputText = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultBar = document.getElementById("result");

function clear() {
  inputText.value = "";
}

function isPalindrome(e) {
  e.preventDefault();

  if (inputText.value == "") {
    alert("Please input a value");
    return;
  }

  const str = inputText.value.toLowerCase().replace(/[^A-Za-z0-9]/g, ""); 
  const reverseString = str.split("").reverse().join("");

  str === reverseString
    ? (resultBar.innerHTML = `<p>${inputText.value} is a palindrome</p>`)
    : (resultBar.innerHTML = `<p>${inputText.value} is not a palindrome</p>`);

  clear();
}

checkButton.addEventListener("click", isPalindrome);
