import { NotFoundContainer } from "./style.js";

export function NotFound() {
  return (
    <NotFoundContainer>
      <img src="https://cinepop.com.br/wp-content/uploads/2023/01/image-3-696x442.jpg.webp" alt="gremlin com oculos 3d no cinema"/>
      <h1>404 - Página não encontrada</h1>
      <p>Ops! Parece que alguém escondeu esta página. Talvez tenha sido um gremlin travesso.</p>
      <p>Mas não se preocupe, você pode voltar à <a href="/">página inicial</a> e tentar novamente.</p>
    </NotFoundContainer>
  );
}