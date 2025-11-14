export default function Services() {
    return (
        <>
            <section id="services" style={{ marginTop: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".6rem" }}>
                    <h2>Услуги</h2>
                    <a href="#create" class="btn">Добави нова</a>
                </div>

                <div class="services-grid" role="list">
                    <article class="card" role="listitem">
                        <div class="meta"><span class="tag">Дизайн</span><span class="muted">от Ivan</span></div>
                        <h3>Логотип + визуална идентичност</h3>
                        <p class="muted">Професионален лого дизайн с 3 концепции, включени корекции и пакет за социални
                            медии.</p>
                        <div class="tags"><span class="tag">2D</span><span class="tag">Бързо</span></div>
                        <div class="btns">
                            <a href="#service-1" class="btn">Детайли</a>
                            <a href="#service-1" class="btn primary">Поръчай</a>
                        </div>
                    </article>

                    <article class="card" role="listitem">
                        <div class="meta"><span class="tag">Уроци</span><span class="muted">от Maria</span></div>
                        <h3>Уроци по китара — начинаещи</h3>
                        <p class="muted">Персонализирани часове, домашни задачи и записан материал за практикуване.</p>
                        <div class="tags"><span class="tag">Видео</span><span class="tag">Онлайн</span></div>
                        <div class="btns">
                            <a href="#service-2" class="btn">Детайли</a>
                            <a href="#service-2" class="btn primary">Поръчай</a>
                        </div>
                    </article>

                    <article class="card" role="listitem">
                        <div class="meta"><span class="tag">Код</span><span class="muted">от Georgi</span></div>
                        <h3>Малки уеб приложения с React</h3>
                        <p class="muted">Индивидуален компонент, интеграция с API и кратка документация.</p>
                        <div class="tags"><span class="tag">React</span><span class="tag">API</span></div>
                        <div class="btns">
                            <a href="#service-3" class="btn">Детайли</a>
                            <a href="#service-3" class="btn primary">Поръчай</a>
                        </div>
                    </article>

                    <article class="card" role="listitem">
                        <div class="meta"><span class="tag">Езици</span><span class="muted">от Ani</span></div>
                        <h3>Разговорен английски — интензивен</h3>
                        <p class="muted">Практически уроци и корекции на произношение.</p>
                        <div class="btns">
                            <a href="#service-4" class="btn">Детайли</a>
                            <a href="#service-4" class="btn primary">Поръчай</a>
                        </div>
                    </article>

                    <article class="card" role="listitem">
                        <div class="meta"><span class="tag">Видео</span><span class="muted">от Petar</span></div>
                        <h3>Монтаж на видео и цветова корекция</h3>
                        <p class="muted">Монтаж до 10 мин клип, цветова корекция и базова графика.</p>
                        <div class="btns">
                            <a href="#service-5" class="btn">Детайли</a>
                            <a href="#service-5" class="btn primary">Поръчай</a>
                        </div>
                    </article>

                    <article class="card" role="listitem">
                        <div class="meta"><span class="tag">Бизнес</span><span class="muted">от Elena</span></div>
                        <h3>Стратегия за социални медии</h3>
                        <p class="muted">Месечен план, календар за съдържание и шаблони за публикации.</p>
                        <div class="btns">
                            <a href="#service-6" class="btn">Детайли</a>
                            <a href="#service-6" class="btn primary">Поръчай</a>
                        </div>
                    </article>

                </div>
            </section>


        </>
    );
}