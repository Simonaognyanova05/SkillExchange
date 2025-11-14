export default function Order() {
    return (
        <section id="order-form"
            style={{ marginTop: "1rem", padding: "1rem", borderRadius: "12px", background: "linear-gradient(180deg,#081227, #061226)", border: "1px solid rgba(255,255,255,0.03)" }}>
            <a href="#services" class="btn">затвори</a>
            <h3>Форма за поръчка на услуга</h3>
            <form class="order-card" method="post" action="#" aria-label="Форма за поръчка">
                <label for="service">Услуга</label>
                <input id="service" name="service" type="text" placeholder="Име на услугата (пример: Логотип)"
                    required />

                <label for="name">Вашето име</label>
                <input id="name" name="name" type="text" placeholder="Име Фамилия" required />

                <label for="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />

                <label for="details">Детайли към поръчката</label>
                <textarea id="details" name="details"
                    placeholder="Описване на нуждите, краен срок, файлови изисквания"></textarea>

                <label for="budget">Бюджет (неправително поле)</label>
                <select id="budget" name="budget">
                    <option>Неприложимо</option>
                    <option>до 50 лв</option>
                    <option>50 - 150 лв</option>
                    <option>150 - 400 лв</option>
                    <option>над 400 лв</option>
                </select>

                <div style={{ display: "flex", gap: ".6rem", marginTop: ".6rem" }}>
                    <button class="btn primary" type="submit">Изпрати поръчката</button>
                    <a href="#services" class="btn">Откажи</a>
                </div>
            </form>
        </section>
    );
}