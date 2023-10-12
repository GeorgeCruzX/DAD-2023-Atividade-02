api.js

{
    "message"; "https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg",
    "status"; "success"
}

index.html

<!DOCTYPE html>
<html lang="pt">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gerador de Piadas</title>
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
  }
  .container {
    margin-top: 50px;
  }
  .joke {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .reaction {
    margin-top: 20px;
  }
  img {
    max-width: 50%;
    height: 50%;
  }
</style>
</head>
<body>
  <div class="container">
    <h1>Gerador de Piadas</h1>
    <button id="getJokeBtn">Obter Piada</button>
    <p class="joke" id="jokeText">Clique no botão para obter uma piada engraçada!</p>
    <div class="reaction">
      <p>Reação à piada:</p>
      <img id="reactionImage" src="https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg" alt="Reação à piada">
    </div>
  </div>
  <script>
    const jokeText = document.getElementById('jokeText');
    const reactionImage = document.getElementById('reactionImage');
    const getJokeBtn = document.getElementById('getJokeBtn');
   
    const jokes = [
      "Por que o esqueleto não brigou com ninguém? Porque ele não tinha estômago para isso.",
      "O que o tomate foi fazer no banco? Foi tirar extrato.",
      "Você conhece a piada do pônei? Pô-nei que eu conto!"
    ];

    const reactions = [
      "https://via.placeholder.com/300?text=Reação+1",
      "https://via.placeholder.com/300?text=Reação+2",
      "https://via.placeholder.com/300?text=Reação+3"
    ];

    getJokeBtn.addEventListener('click', () => {
      const randomJokeIndex = Math.floor(Math.random() * jokes.length);
      const randomReactionIndex = Math.floor(Math.random() * reactions.length);

      jokeText.textContent = jokes[randomJokeIndex];
      reactionImage.src = reactions[randomReactionIndex];
    });
  </script>
</body>
</html>