import './App.css';

function App() {
  return (
    <>
    <header className="navbar">
        
        <div className="navbar-container">
            <a href="#inicio" className="navbar-logo">
                <div className="logo-icon"><img src="/img/FazEntLogo.webp" alt="freddy"/></div>
                <span>Freddy Fazbear Pizza</span>
            </a>
            <nav className="navbar-links" id="navbarLinks">
                <a href="#inicio">Inicio</a>
                <a href="#sobre">Sobre la pizzería</a>
                <a href="#animatronicos">Animatrónicos</a>
                <a href="#menu">Menú</a>
                <a href="#eventos">Eventos</a>
                <a href="#galeria">Galería</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <div className="navbar-toggle" id="navbarToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>

    <main>
        
        <section className="section" id="inicio">
            <div className="hero">
                <div className="hero-text">
                    <h1>Bienvenido a <span>Freddy Fazbear Pizza</span></h1>
                    <p>La pizzería familiar donde la diversión nunca duerme. Disfruta de pizzas recién horneadas, shows animatrónicos y noches que nunca olvidarás.</p>
                    <div className="hero-tags">
                        <div className="hero-tag">Shows animatrónicos</div>
                        <div className="hero-tag">Cumpleaños temáticos</div>
                        <div className="hero-tag">Ambiente retro</div>
                    </div>
                    <div className="hero-actions">
                        <a href="#menu"><button className="btn-primary">Ver menú</button></a>
                        <a href="#contacto"><button className="btn-outline">Reservar cumpleaños</button></a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image">
                        <img src="https://preview.redd.it/xi8yva8774b71.jpg?auto=webp&s=c5d80152f502eedd5379bbeac25d5455587b6a3c" alt="Escenario de Freddy Fazbear Pizza"/>
                    </div>
                    <div className="hero-badge">
                        <div><strong>Noches especiales:</strong> viernes y sábado</div>
                        <div>Shows a las 18:00, 20:00 y 22:00</div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="sobre">
            <h2 className="section-title">Sobre la pizzería</h2>
            <p className="section-subtitle">Una pizzería familiar con un toque de misterio. Ideal para fiestas infantiles, reuniones de amigos y amantes de las noches retro.</p>
            <div className="about-grid">
                <div className="about-text">
                    <p>Freddy Fazbear Pizza es una pizzería ficticia inspirada en el universo de Five Nights at Freddy's. Combina luces de neón, música arcade y animatrónicos que suben al escenario para ofrecer un espectáculo único.</p>
                    <p>Cada rincón está decorado con temática de circo y feria nocturna, con colores cálidos, luces parpadeantes y posters de los personajes principales: Freddy, Bonnie, Chica y Foxy.</p>
                    <ul className="about-list">
                        <li><span>•</span> Escenario principal con shows programados durante la tarde y la noche.</li>
                        <li><span>•</span> Zona de juegos arcade con máquinas clásicas y premios.</li>
                        <li><span>•</span> Área de cumpleaños decorada con temática de Freddy y amigos.</li>
                        <li><span>•</span> Pizzas horneadas al momento y snacks para toda la familia.</li>
                    </ul>
                </div>
                <div className="about-image">
                    <img src="/img/local.jpg" alt="Interior de la pizzería Freddy Fazbear"/>
                </div>
            </div>
        </section>

        <section className="section" id="animatronicos">
            <h2 className="section-title">Nuestros animatrónicos</h2>
            <p className="section-subtitle">Los protagonistas del escenario. Cada uno con su personalidad, su canción y su propio encanto.</p>
            <div className="cards-grid">
                <article className="card">
                    <img src="/img/freddy1.png" alt="Freddy animatrónico"/>
                    <div className="card-tag">Vocalista principal</div>
                    <h3 className="card-title">Freddy Fazbear</h3>
                    <p className="card-text">El oso estrella del show. Siempre listo para cantar bajo el foco principal y dar la bienvenida a los visitantes.</p>
                </article>
                <article className="card">
                    <img src="/img/bonnie.png" alt="Bonnie animatrónico"/>
                    <div className="card-tag">Guitarrista</div>
                    <h3 className="card-title">Bonnie</h3>
                    <p className="card-text">El conejo que domina la guitarra eléctrica. Da un toque de rock a cada presentación en el escenario.</p>
                </article>
                <article className="card">
                    <img src="/img/chica.png" alt="Chica animatrónica"/>
                    <div className="card-tag">Dulces y snacks</div>
                    <h3 className="card-title">Chica</h3>
                    <p className="card-text">Nuestra anfitriona amante de la pizza. Aparece siempre con su babero y su famosa frase "Let's Eat!".</p>
                </article>
                <article className="card">
                    <img src="/img/foxy.png" alt="Foxy animatrónico"/>
                    <div className="card-tag">Show sorpresa</div>
                    <h3 className="card-title">Foxy</h3>
                    <p className="card-text">El pirata más inquieto de la pizzería. Desde su propia bahía de pirata, aparece en shows especiales.</p>
                </article>
            </div>
        </section>

        <section className="section" id="menu">
            <h2 className="section-title">Menú especial de la noche</h2>
            <p className="section-subtitle">Pizzas, snacks y bebidas para acompañar una noche llena de música, luces y animatrónicos.</p>
            <div className="menu-grid">
                <div className="menu-item">
                    <div className="menu-item-header">
                        <h3 className="menu-item-name">Pizza Freddy Clásica</h3>
                        <span className="menu-item-price">$10.99</span>
                    </div>
                    <p className="menu-item-desc">Mozzarella, pepperoni, salsa de la casa y bordes crujientes horneados al momento.</p>
                    <div className="menu-item-tag">Recomendada</div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-header">
                        <h3 className="menu-item-name">Bonnie BBQ</h3>
                        <span className="menu-item-price">$11.49</span>
                    </div>
                    <p className="menu-item-desc">Pollo a la barbacoa, cebolla morada, mozzarella y un toque ahumado.</p>
                    <div className="menu-item-tag">Sabor intenso</div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-header">
                        <h3 className="menu-item-name">Chica Lovers</h3>
                        <span className="menu-item-price">$10.49</span>
                    </div>
                    <p className="menu-item-desc">Extra queso, champiñones, aceitunas y salsa especial de la pizzería.</p>
                    <div className="menu-item-tag">Queso extra</div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-header">
                        <h3 className="menu-item-name">Foxy Pepper</h3>
                        <span className="menu-item-price">$11.99</span>
                    </div>
                    <p className="menu-item-desc">Peperoni picante, jalapeños, mozzarella y salsa ligeramente picante.</p>
                    <div className="menu-item-tag">Picante</div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-header">
                        <h3 className="menu-item-name">Combo nocturno</h3>
                        <span className="menu-item-price">$18.99</span>
                    </div>
                    <p className="menu-item-desc">1 pizza mediana + 2 bebidas + fichas para la zona arcade.</p>
                    <div className="menu-item-tag">Ideal para 2 personas</div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-header">
                        <h3 className="menu-item-name">Niños Fazbear</h3>
                        <span className="menu-item-price">$7.99</span>
                    </div>
                    <p className="menu-item-desc">Mini pizza, bebida pequeña y sorpresa temática de Freddy.</p>
                    <div className="menu-item-tag">Menú infantil</div>
                </div>
            </div>
        </section>

        <section className="section" id="eventos">
            <h2 className="section-title">Cumpleaños y eventos</h2>
            <p className="section-subtitle">Celebra tu día especial con un show privado de los animatrónicos y decoración completa.</p>
            <div className="events">
                <div className="events-card">
                    <h3>Fiesta de cumpleaños Fazbear</h3>
                    <p>Preparamos todo para una fiesta temática completa: decoración, música, show y pastel personalizado inspirado en tus personajes favoritos.</p>
                    <ul className="events-list">
                        <li>• Decoración con globos y banners de Freddy y amigos.</li>
                        <li>• Presentación especial en el escenario con canción de cumpleaños.</li>
                        <li>• Mesa reservada para el cumpleañero y sus invitados.</li>
                        <li>• Opción de incluir sesión de fotos en el escenario.</li>
                    </ul>
                    <p className="events-highlight">Paquetes para grupos pequeños y grandes. Reserva con anticipación para asegurar fecha y horario.</p>
                </div>
                <div className="events-image">
                    <img src="/img/happy.jpg" alt="Cumpleaños temático en Freddy Fazbear Pizza"/>
                </div>
            </div>
        </section>

        <section className="section" id="galeria">
            <h2 className="section-title">Galería</h2>
            <p className="section-subtitle">Un vistazo a algunos rincones de la pizzería, el escenario y las noches especiales.</p>
            <div className="gallery-grid">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30eebb1c-8221-4efc-a8af-c4f81488a14d/dibaba6-25d701ef-5224-43f2-a613-420fd32f2e2a.png/v1/fill/w_1032,h_774,q_70,strp/fnaf_1_day_stage_extended_by_itrashman115_dibaba6-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiIvZi8zMGVlYmIxYy04MjIxLTRlZmMtYThhZi1jNGY4MTQ4OGExNGQvZGliYWJhNi0yNWQ3MDFlZi01MjI0LTQzZjItYTYxMy00MjBmZDMyZjJlMmEucG5nIiwid2lkdGgiOiI8PTI1NjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dmFCx8Q7e5rfrNIs9VnrJxsz2qGertrl_Dk6b40M8F4" alt="Escenario principal de Freddy Fazbear Pizza"/>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/489a1849-3e77-4a44-8993-bc69d2104957/de425rb-1938d00c-37f7-4527-9367-c0d9e6af1fe6.png/v1/fill/w_1280,h_720,q_80,strp/fnaf_1_stage_by_superlarrysbm_de425rb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzQ4OWExODQ5LTNlNzctNGE0NC04OTkzLWJjNjlkMjEwNDk1Ny9kZTQyNXJiLTE5MzhkMDBjLTM3ZjctNDUyNy05MzY3LWMwZDllNmFmMWZlNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mVzOd9Zuw2iERtu1NX1SpQ901tJrKHdcuOIiY9EuFWU" alt="escenario"/>
                <img src="https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2023/06/IVE-NIGHTS-AT-FREDDYS.webp?fit=1000%2C563&ssl=1" alt='lol'/>
                <img src="/img/partyy.png" alt="Show nocturno de los animatrónicos"/>
                <img src="https://cdnb.artstation.com/p/assets/images/images/019/957/769/large/i-d-rather-not-disclose-that-information-arcadeareafinal.jpg?1565738450" alt="Luces y decoraciones"/>
                <img src="https://i.ytimg.com/vi/5x4RrH2qgFg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYm0QCE0ZTWe1Z71Z4xRYrFqSKHA" alt="Cumpleaños en Freddy Fazbear Pizza"/>
                <img src="https://i.pinimg.com/736x/76/20/cb/7620cb27e3693cf67111fee69f53925c.jpg" alt="Entrada de la pizzería"/>
                <img src="https://xboxwire.thesourcemediaassets.com/sites/2/2025/05/XBOX-BLOG_Picture2-cfae7e1afb602de401b6.jpg" alt="Detalles decorativos"/>
            </div>
            <div className="rules">
                <h3>Normas de seguridad durante la visita</h3>
                <ul className="rules-list">
                    <li>• No ingresar al área detrás del escenario sin autorización.</li>
                    <li>• Los niños deben estar acompañados por un adulto en todo momento.</li>
                    <li>• No tocar los animatrónicos mientras están en movimiento.</li>
                    <li>• Respetar las áreas restringidas y el horario de cierre del local.</li>
                </ul>
            </div>
        </section>

        <section className="section" id="contacto">
            <h2 className="section-title">Contacto y reservas</h2>
            <p className="section-subtitle">Envía tu mensaje para reservar un cumpleaños, planificar un evento especial o hacer consultas sobre el menú.</p>
            <div className="contact-grid">
                <div className="contact-form">
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre completo</label>
                                <input type="text" id="nombre" placeholder="Tu nombre"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Correo electrónico</label>
                                <input type="email" id="email" placeholder="tucorreo@ejemplo.com"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input type="tel" id="telefono" placeholder="+591 70000000"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fecha">Fecha del evento</label>
                                <input type="date" id="fecha"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje o detalle del evento</label>
                            <textarea id="mensaje" placeholder="Cuéntanos qué tipo de evento quieres organizar..."></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Enviar solicitud</button>
                    </form>
                </div>
                <div className="contact-info">
                    <p className="contact-info-line"><strong>Dirección ficticia:</strong><br/>Calle Fazbear #1987, Sector Arcade, Ciudad Nocturna</p>
                    <p className="contact-info-line"><strong>Horarios:</strong><br/>Lunes a jueves: 16:00 - 22:00<br/>Viernes y sábado: 16:00 - 00:00<br/>Domingo: 15:00 - 21:00</p>
                    <p className="contact-info-line"><strong>Teléfono:</strong><br/>+000 123 456 789</p>
                    <p className="contact-info-line"><strong>Correo:</strong><br/>contacto@freddyfazbearpizza.com</p>
                    <p className="contact-info-line"><strong>Nota:</strong><br/>Freddy Fazbear Pizza es una pizzería ficticia inspirada en el universo de Five Nights at Freddy's, creada solo con fines creativos.</p>
                </div>
            </div>
        </section>
    </main>
    

    <footer className="footer">
        <div className="footer-content">
            <div>© 2025 Freddy Fazbear Pizza. Todos los derechos reservados.</div>
        </div>
    </footer>
    </>
  );
}

export default App;
