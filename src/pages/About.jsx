import React from 'react';
import Grow from '@mui/material/Grow';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';

const PAPER_PROPS = {
  component: 'section',
  sx: { p: 2 },
};

class About extends React.Component {
  componentDidMount() {
    document.title = 'João Ferraz - Sobre';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Slide in direction="right" timeout={500}>
          <section>
            <Typography variant="h3" noWrap>
              Sobre
            </Typography>
            <Typography mb={5} color="text.secondary">
              Veja mais algumas curiosidades sobre João.
            </Typography>
          </section>
        </Slide>

        <Grow in timeout={1000}>
          <Paper {...PAPER_PROPS}>
            <Typography align="justify" sx={{ textIndent: '1.2cm' }}>
              João sempre foi um rapaz viciado em jogos digitais. Quando tinha seus 14 anos passava noites acordado jogando um jogo chamado <Link href="https://www.tibia.com/" target="blank">Tibia</Link>.
              Até que um belo dia ele descobriu que era possível fazer a criação de seu próprio servidor de Tibia, o que ele não sabia era que acabava de adentrar o mundo da promagração.
            </Typography>

            <Typography align="justify" sx={{ mt: 1, textIndent: '1.2cm' }}>
              Assim que João abriu o seu primeiro servidor de Tibia, ele começou a querer editar certas funcionalidades do jogo, porém ele ainda não possuia o conhecimento necessário para isso, então a saída
              que ele encontrou foi ir em busca de códigos que possuiam ao menos uma parte do que ele desejava, e então "montar" o que ele almejava. Indo em busca destes códigos em fóruns
              como <Link href="https://xtibia.com/" target="blank">xTibia</Link>, <Link href="https://tibiaking.com/" target="blank">Tibia King</Link> e <Link href="https://otland.net/" target="blank">OTLand</Link>, João
              descobriu que havia um limite para o que ele consiguiria fazer a partir de códigos de terceiros, com isso ele começou a abrir os seus próprios tópicos nesses fóruns pedindo exatamente o que ele queria. No entanto
              ele percebeu que isso também não era uma solução viável, visto que seus tópicos não eram sempre respondidos (na verdade eles eram respondidos na menor parte das vezes).
            </Typography>

            <Typography align="justify" sx={{ mt: 1, textIndent: '1.2cm' }}>
              Até que um belo dia João criou coragem para tentar entender, de fato, o que aquelas linhas de código faziam no jogo. Com isso, pouco a pouco ele foi tomando conhecimento da lógica por trás de tudo e conseguindo
              criar os seus próprios códigos. A sensação de poder construir o que ele queria era o que mais o motivava a continuar desenvolvendo, porém não era a sua única motivação, ele também retornou aos fóruns para começar
              ajudar outras pessoas que pediam ajuda, e até mesmo abrir tópicos publicando seus trabalhos. Foi aí que ele percebeu o quanto essas comunidades o ajudaram a se tornar quem ele é hoje.
            </Typography>

            <Typography align="justify" sx={{ mt: 1, textIndent: '1.2cm' }}>
              João prestou o Exame Nacional do Ensino Médio (ENEM) com o desejo de cursar Ciências da Computação em uma universidade pública que havia em sua cidade, porém com a nota que ele obteve acabou não conseguindo se matricular no curso.
              Física era a sua segunda opção de curso, outra área que ele possuia afinidade e que acabou cursando.
            </Typography>
          </Paper>
        </Grow>
      </>
    );
  }
}

export default About;
