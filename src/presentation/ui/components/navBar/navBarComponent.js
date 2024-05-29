import LanguagePickerComponent from "./components/languagePickerComponent";

const NavBarComponent = () => {
    return (
        <nav className="row">
            JOHAN
            <a href="/">Inicio</a>
            <a href="/aboutMe">Sobre mí</a>
            <a href="/proyects">Proyectos</a>
            <LanguagePickerComponent/>
            <a href="/contact">Contáctame</a>
            <button className="btn btn-primary">Dark Mode</button>
        </nav>
    );
};

export default NavBarComponent;