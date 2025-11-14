export default function Register() {
    return (
        <section id="register" class="auth"
            style={{ marginTop: "1rem", background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)", border: "1px solid rgba(255,255,255,0.02)" }}>
            <h3>Регистрация</h3>
            <form>
                <label for="name-reg">Име</label>
                <input id="name-reg" type="text" placeholder="Име Фамилия" />
                <label for="email-reg">E-mail</label>
                <input id="email-reg" type="email" placeholder="you@example.com" />
                <label for="pass-reg">Парола</label>
                <input id="pass-reg" type="password" placeholder="• • • • • •" />
                <div style={{ display: "flex", gap: ".6rem", marginTop: ".6rem" }}>
                    <button class="btn primary" type="submit">Създай профил</button>
                    <a href="#login" class="btn">Вход</a>
                </div>
            </form>
        </section>
    );
}