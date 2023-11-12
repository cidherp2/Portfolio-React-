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
            <img id="linkedLogo" className="imageLogo" src={src} alt="Mi imagen" />
            <img id ="gitLogo" className="imageLogo" src={src2} alt="Mi imagen" />
            </div>
        </>
    );
}