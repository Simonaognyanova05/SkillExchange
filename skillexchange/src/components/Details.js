export default function Details() {
    return (
        <section id="service-1" aria-labelledby="s1-title">
            <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexDirection: "column" }}>
                <a href="#services" class="btn" style={{ alignSelf: "flex-end" }}>затвори</a>
                <div class="details-grid">
                    <div>
                        <h3 id="s1-title">Логотип + визуална идентичност — Ivan</h3>
                        <p class="muted">Пълен пакет за бранд — лого, цветова палитра, варианти за социални медии.
                            Включва 3 концепции и 2 рунда корекции.</p>

                        <h4>Какво включва</h4>
                        <ul class="muted">
                            <li>Концепции за логотип (3)</li>
                            <li>Векторни файлове (AI, SVG)</li>
                            <li>Палитра и типография</li>
                            <li>Ръководство за употреба (1 страница)</li>
                        </ul>

                        <h4>Отзиви</h4>
                        <p class="muted"><strong>4.9</strong> • (34 ревюта)</p>
                    </div>

                    <aside class="details-actions">
                        <div class="order-card">
                            <div class="meta">
                                <div class="muted">Цена</div>
                                <div style={{ fontWeight: "800" }}>250 лв</div>
                            </div>
                            <p class="muted">Време за изпълнение: 5 дни</p>
                            <a href="#order-form" class="btn primary"
                                style={{ display: "block", marginTop: ".6rem", textAlign: "center" }}>Поръчай тази услуга</a>
                        </div>

                        <div class="order-card">
                            <div class="muted">Контакт</div>
                            <p class="muted">Ivan • дизайнер • <span class="muted">ivan@example.com</span></p>
                            <a href="#services" class="btn"
                                style={{ display: "block", textAlign: "center", marginTop: ".6rem" }}>Профил на доставчика</a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>

    );
}