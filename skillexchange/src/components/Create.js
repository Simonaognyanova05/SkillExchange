export default function Create() {
    return (
        <section id="create" class="auth"
            style={{ marginTop: "1rem", background: "linear-gradient(180deg, rgba(255,255,255,0.01), transparent)", border: "1px solid rgba(255,255,255,0.02)" }}>
            <h3>Създай услуга</h3>
            <form>
                <label for="title">Заглавие на услугата</label>
                <input id="title" type="text" placeholder="Кратко и ясно заглавие" />

                <label for="category">Категория</label>
                <select id="category">
                    <option>Дизайн</option>
                    <option>Програмиране</option>
                    <option>Музика</option>
                    <option>Езици</option>
                </select>

                <label for="summary">Кратко описание</label>
                <textarea id="summary" placeholder="Какво предлагате?"></textarea>

                <label for="price">Цена (по избор)</label>
                <input id="price" type="text" placeholder="Пр. 120 лв" />

                <div style={{ display: "flex", gap: ".6rem", marginTop: ".6rem" }}>
                    <button class="btn primary" type="submit">Публикувай</button>
                    <a href="#services" class="btn">Откажи</a>
                </div>
            </form>
        </section>
    );
}