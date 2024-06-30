const generateButton = document.getElementById("generate");
const passwordElement = document.getElementById("password");

const passwordLength = 20;

const symbols: string[] = [
  "@",
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "?",
  "/",
];
const stringNumbers: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
const letters: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Genera un índice aleatorio entre 0 y i
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambia elementos array[i] y array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

generateButton!.addEventListener("click", () => {
  let password: string = "";
  for (let i = 0; i <= passwordLength; i++) {
    const lettersAtPassword: string[] = password
      .split("")
      .filter((letter) => letters.includes(letter));

    const numbersAtPassword: string[] = password
      .split("")
      .filter((letter) => stringNumbers.includes(letter));

    const symbolsAtPassword: string[] = password
      .split("")
      .filter((letter) => symbols.includes(letter));

    if (lettersAtPassword.length === 8) {
    } else if (lettersAtPassword.length < 8) {
      password += letters[Math.floor(Math.random() * letters.length)];
    }
    if (numbersAtPassword.length === 6) {
    } else if (numbersAtPassword.length < 6) {
      password +=
        stringNumbers[Math.floor(Math.random() * stringNumbers.length)];
    }
    if (symbolsAtPassword.length === 6) {
    } else if (symbolsAtPassword.length < 6) {
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
  }
  const ultimatePassword = shuffleArray(password.split("")).join("");
  const passwordElement = document.getElementById("password");
  passwordElement!.textContent = "";
  passwordElement!.textContent = ultimatePassword;
});
