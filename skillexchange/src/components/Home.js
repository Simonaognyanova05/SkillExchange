export default function Home() {
    return (
        <section id="home" class="hero">
            <div class="hero-inner">
                <h1>Разменяйте умения лесно — учете, предавайте, и печелете</h1>
                <p class="lead">SkillExchange е място, където хората предлагат и търсят услуги/уроци/сътрудничество.
                    Преглеждайте идеи, вижте детайли и поръчайте услуга чрез бърза форма — всичко без сложни
                    регистрации.</p>



                <div class="searchbar">
                    <input aria-label="Търсене" placeholder="Търсете умения, напр. графичен дизайн, урок по китара" />
                    <select aria-label="Категория">
                        <option>Всички категории</option>
                        <option>Дизайн</option>
                        <option>Програмиране</option>
                        <option>Музика</option>
                        <option>Езици</option>
                    </select>
                    <div class="chip">Онлайн</div>
                    <div class="chip">Лично</div>
                    <a href="#services" class="btn primary">Прегледай услуги</a>
                </div>
            </div>

            <div style={{ marginTop: "1rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                <div class="card" style={{ minWidth: "220px", maxWidth: "320px" }}>
                    <div class="meta">
                        <div class="muted">Активни предложения</div>
                        <div style={{ fontWeight: "700" }}>128</div>
                    </div>
                    <p class="muted">Разнообразие от умения — само по един клик до поръчка.</p>
                </div>
                <div class="card" style={{ minWidth: "220px", maxWidth: "320px" }}>
                    <div class="meta">
                        <div class="muted">Нови днес</div>
                        <div style={{ fontWeight: "700" }}>9</div>
                    </div>
                    <p class="muted">Открийте свежи предложения и свържете се с авторите.</p>
                </div>
            </div>
        </section>
    );
}