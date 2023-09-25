import React from 'react';
import Image from 'next/image'

const ChessLandingPage = () => {
  return (
    <div>
      <header>
        <h1>Bem-vindo ao Chess Online</h1>
        <p>Jogue xadrez online com outros jogadores.</p>
      </header>
      <main>
        <section>
          <h2>Como Jogar</h2>
          <p>Registre-se ou faça login para começar a jogar xadrez online.</p>
        </section>
        <section>
        <Image 
          src="/standardboard.1d6f9426.png"
          width={300}
          height={300}
          alt="Picture of the author"
         />
          <h2>Recursos</h2>
          <ul>
            <li>Partidas em tempo real</li>
            <li>Torneios</li>
            <li>Chat com outros jogadores</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Chess Online. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ChessLandingPage;
