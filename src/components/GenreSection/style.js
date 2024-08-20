import styled from 'styled-components';

export const MusicSectionContainer = styled.div`
  padding: 20px;
  
  .music-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px; /* Espaçamento entre as imagens dos álbuns */
    justify-content: center;
  }

  .music-card {
    width: 120px; /* Ajuste a largura conforme necessário */
    height: 120px; /* Ajuste a altura conforme necessário */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz com que a imagem cubra completamente o contêiner */
    border-radius: 8px; /* Bordas arredondadas, opcional */
  }

  p {
    text-align: center;
    color: #666; /* Cor do texto para 'Nenhuma música encontrada' */
  }
`;

export default MusicSectionContainer;