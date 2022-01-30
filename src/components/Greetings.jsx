function Greetings({
    lang,
    children
}){
    return (
        <h1>
            {lang === "de" && <p>Hallo {children}</p>}
            {lang === "en" && <p>Hey {children}</p>}
            {lang === "es" && <p>Hola {children}</p>}
            {lang === "fr" && <p>Bonjour {children}</p>}
        </h1>
    );
}

export default Greetings;