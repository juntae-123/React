import cowsay from "cowsay-browser";
import CounGecko from "coingecko-api";

const cowsayText = cowsay.say({
  text: "I' m a moooodule",
  e: "oO",
  T: "U",
});

document.querySelector("#cow").textContent = cowsayText;

const coinGeckoClient = new CounGecko();

const getApple = async () => {
  const response = await coinGeckoClient.simple.price({
    ids: "bitcoin",
    vs_currencies: "usd",
  });

  const price = await response.data.bitcoin.usd;

  document.querySelector("#apple").innerHTML = price;
};

getApple();
