import "./Agenda.scss"

export default () => <div id="Agenda">
    <header>
        <button className="voltar"><a href="/home"><img src="/img/voltar.png" /></a></button>
        <p className="flex">FLEX</p><p>FIT</p>
    </header>
    <main>
        <div className="titulo"><p className="letradiferente">SUA AGENDA DE</p><p>AULAS</p></div>
        <a href="/aparkour"><div className="container" id="parkour">AULA DE <p>PARKOUR</p></div></a>
        <a href="/afitdance"><div className="container" id="fitdance">AULA DE <p>FITDANCE</p></div></a>
        <a href="/apilates"><div className="container" id="pilates">AULA DE <p>PILATES</p></div></a>
        <a href="/across"><div className="container" id="cross">AULA DE <p>CROSS</p></div></a>
        <a href="/alocal"><div className="container" id="local">AULA DE <p>LOCAL</p></div></a>
        <a href="/amuaythai"><div className="container" id="muaythai">AULA DE <p>MUAYTHAI</p></div></a>
        <a href="/akickboxing"><div className="container" id="kickboxing">AULA DE <p>KICKBOXING</p></div></a>
        <a href="/ajiujitsu"><div className="container" id="jiujitsu">AULA DE <p>JIUJITSU</p></div></a>
    </main>
    <footer>
        <button><a href="/home"><img src="/img/casa.png" /></a></button>
        <button><a href="/agenda"><img src="/img/agenda.png" /></a></button>
        <button><a href="/tabela"><img src="/img/halter.png" /></a></button>
        <button><a href="/perfil"><img src="/img/perfil.png" /></a></button>
    </footer>
</div>