import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <small>
        Data from{' '}
        <a href="https://rickandmortyapi.com" target="_blank" rel="noreferrer" className="footer__link" title="Go to Rick and Morty API" aria-label="Go to Rick and Morty API">
          rickandmortyapi.com
        </a>
        <br/>
        <a href="https://portfolio-yemresalcan.vercel.app/"  className="footer__link" title="Go to MyWebSite" >
        🚀 Yunus Emre Salcan 🚀
        </a>
      </small>
    </div>
  );
};

export default Footer;