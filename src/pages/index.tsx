import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    const handleHamburgerClick = () => {
      const menuUl = document.querySelector('.menubar ul');
      menuUl?.classList.toggle('show');
    };

    const handleScroll = () => {
      const menubar = document.querySelector('.menubar') as HTMLElement; // Indica ao TypeScript que é um HTMLElement
      if (menubar) {
        const isScrolled = window.scrollY > menubar.offsetTop;
        if (isScrolled) {
          menubar.classList.add('fixed');
        } else {
          menubar.classList.remove('fixed');
        }
      }
    };

    const hamburguerIcon = document.querySelector('.hamburguer-icon');
    hamburguerIcon?.addEventListener('click', handleHamburgerClick);

    window.addEventListener('scroll', handleScroll);

    return () => {
      hamburguerIcon?.removeEventListener('click', handleHamburgerClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Lipex Dev</title>
        <meta name="description" content="Portifolio Criativo </Lipex Dev>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
          <div className="section01">
            <h2>Hello.</h2>
            <h1>I am Felipe Ramos</h1>
            <p>
              Olá! Sou um desenvolvedor e designer em início de carreira,
              procurando experiências incríveis. Com um olhar apaixonado pelo
              frontend e design, estou pronto para aprender, criar e contribuir
              para projetos inspiradores. Vamos construir algo incrível juntos!
            </p>
            <button className="buttonContato">Entre em contato</button>
          </div>
          <div>
            <nav className="menubar">
              <img src="../../img/logo.png" alt="" />
              <div className="hamburguer-icon">&#9776;</div>
              <ul>
                <li><a href="#sec-sobremim">Sobre mim</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#portifolio">Portfólio</a></li>
                <li><a href="#curriculo">Currículo</a></li>
                <li><a href="#contato">Contato</a></li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="sec-sobremim">
          <div className="container">
            <div className="sobremi">
              <div className="sobremimtxt">
                <h2>Sobre mim</h2>
                <p>
                  Oi, sou Felipe Ramos, tenho 21 anos e estou no campo do design
                  há mais de 4 anos. Decidi entrar na área web, onde desenvolvo
                  sites para pequenas empresas na minha região. Sou apaixonado
                  por criar soluções visuais atraentes e funcionais. Vamos
                  transformar ideias em designs incríveis!
                </p>
              </div>
              <div className="imgsobremim">
                <img
                  className="imgprofile-sobremim"
                  src="../../img/logo/profile.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="servicos">
          <div className="container">
            <h2>Serviços</h2>
            <div className="servicos-container">
              <div className="servicos-item">
                <img src="../../img/terminal-icon.png" alt="" />
                <h3>Desenvolvimento de sites</h3>
                <p>
                  Desenvolvimento de sites empresariais. Faça sua empresa ser
                  facilmente encontrada online.
                </p>
              </div>
              <div className="servicos-item">
                <img src="../../img/code-icon.png" alt="" />
                <h3>Desenvolvimento de aplicações web</h3>
                <p>
                  Desenvolvimento de aplicações web como sistemas de
                  gerenciamento, feito sob medida.
                </p>
              </div>
              <div className="servicos-item">
                <img src="../../img/diamond-icon.png" alt="" />
                <h3>Criação de layouts</h3>
                <p>
                  Criação de protótipos de interfaces web e mobile para validar
                  sua ideia antes de por em prática.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="portifolio">
          <div className="container">
            <h2>Portfólio</h2>
            <div className="portifolio-container">
              <div className="portifolio-item">
                <img
                  className="img-portifolio"
                  src="https://cdn.discordapp.com/attachments/1187005892219109439/1204847434937667636/image.png?ex=65d6389d&is=65c3c39d&hm=0ccdc97b4aa0ed1238a968ce4744a6ed64735a4d48dee7d2c0b36c8db0a96b28&"
                  alt=""
                />
                <div className="portifolio-item-info">
                  <h3>Gerador Qr Code</h3>
                  <p>
                    VISUALIZAR PROJETO{' '}
                    <a
                      href="https://github.com/lipex5k/gerador-qrcode"
                      target="_blank"
                    >
                      github
                    </a>
                  </p>
                </div>
              </div>
              <div className="portifolio-item">
                {/* Adicione conteúdo para o segundo item do portfólio */}
              </div>
              <div className="portifolio-item">
                {/* Adicione conteúdo para o terceiro item do portfólio */}
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
        .menubar.fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
        }
      `}</style>
      </main>
    </>
  );
};

export default Home;
