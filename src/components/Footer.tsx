export default function Footer() {
  return (
    <footer>
      <div id="footer_content">
        <div id="footer_contacts">
          <h1>SmileFY</h1>
          <p>Inovação que transforma sorrisos</p>
        </div>

        <ul className="footer-list">
          <li><h3>Contatos</h3></li>
          <li>
            <a href="#" className="footer-link">
              <i className="fa-regular fa-envelope" /> smilefy@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/smile.f.y/"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-instagram" /> @smile.f.y
            </a>
          </li>
        </ul>

        <div id="footer_about">
          <h3>Sobre</h3>
          <p>
            Projeto PIBIC-EM desenvolvido com dedicação por alunos do COTIL/FT-UNICAMP e
            professores comprometidos com a democratização da saúde bucal (FOP-UNICAMP).
          </p>
        </div>
      </div>

      <div id="footer_copyright">
        &copy; 2026 SmileFY. Todos os direitos reservados.
      </div>
    </footer>
  );
}
