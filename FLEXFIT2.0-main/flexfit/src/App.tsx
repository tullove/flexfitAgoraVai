import { createBrowserRouter } from "react-router-dom";

//Importação dos arquivos das páginas
//import { Entrar } from "./Pages/Entrar/entrar";
// import {Logar} from "./Components/Logar/index";
import { Cadastro } from "./Components/Cadastrar/cadastro";
import { CadastroTreino } from "./Components/CadastrarTreino/cadastroTreino";
// import {Tabela} from "./Pages/Tabela/"
//import { Ficha } from "./Pages/Ficha/ficha";
// import {Home} from "./Pages/Home/";
//import { Agenda } from "./Pages/Agenda/agenda";
// import {Across} from "./Pages/Horarios/";
// import {Afitdance} from "./Pages/Horarios/";
// import {Ajiujitsu} from "./Pages/Horarios/"
// import {Amuaythai} from "./Pages/Horarios/"
// import {Akickboxing} from "./Pages/Horarios/"
// import {Apilates} from "./Pages/Horarios/"
// import {Alocal} from "./Pages/Horarios/"
// import {Aparkour} from "./Pages/Horarios/"
// import {Perfil} from "./Pages/Perfil/"

//Cria o router que será utilizado para navegar entre as rotas
const router = createBrowserRouter([
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
     path: '/cadastroTreino',
     element: <CadastroTreino />
  },
])

export { router };