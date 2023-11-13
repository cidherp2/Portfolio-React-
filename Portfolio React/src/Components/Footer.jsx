import { Link } from 'react-router-dom';
/**
 * @param {string} footerText - El texto del footer
 * @param {any} src - La primera imagen que cargar
 * @param {any} src2 - La segunda imagen
 */

export default function Footer(footerText = "Footer", src = null , src2 = null) {
    return (
        <>
        <div className="footerColor">
            <span className="footerText">{footerText}</span>
        <a href= "https://www.linkedin.com/in/alejandro-larios-b3121520a/ ">
            <img id="linkedLogo" className="imageLogo" src={src} alt="Mi imagen"/>
            </a>
            <a href='https://github.com/cidherp2'>
            <img id ="gitLogo" className="imageLogo" src={src2} alt="Mi imagen" />
            </a>
            </div>
        </>
    );
}