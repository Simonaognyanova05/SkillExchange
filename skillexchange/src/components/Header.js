import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="brand" to="/">
                <div className="logo">SE</div>
                <div>
                    <div style={{ fontWeight: "800" }}>SkillExchange</div>
                    <div style={{ fontSize: ".8rem", color: "var(--muted)" }}>размяна на умения</div>
                </div>
            </Link>
            <nav aria-label="Основна навигация">
                <Link to="/about">За платформата</Link>
                <Link to="/services">Услуги</Link>
                <Link to="/create">Създай услуга</Link>
                <Link to="/login" className="cta">Вход / Регистрация</Link>
            </nav>
        </header>
    );
}