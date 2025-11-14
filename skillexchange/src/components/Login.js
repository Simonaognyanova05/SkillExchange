import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <section id="login" class="auth"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)", border: "1px solid rgba(255,255,255,0.02)" }}>
            <h3>Вход</h3>
            <form>
                <label for="email-login">E-mail</label>
                <input id="email-login" type="email" placeholder="you@example.com" />
                <label for="pass-login">Парола</label>
                <input id="pass-login" type="password" placeholder="• • • • • •" />
                <div style={{ display: "flex", gap: ".6rem", marginTop: ".6rem" }}>
                    <button class="btn primary" type="submit">Вход</button>
                    <Link to="/register" class="btn">Регистрация</Link>
                </div>
            </form>
        </section>
    );
}