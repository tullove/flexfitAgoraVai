import { FormEvent, useState} from 'react'
import { Input } from "../Input";
import styles from "./cadastro.module.css"
import {db} from '../../services/firebaseConnection'
import{
  addDoc, 
  collection,
} from 'firebase/firestore'


export function Cadastro(){
  const [nomeInput, setNomeInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [academiaInput, setAcademiaInput] = useState("")
  const [sexoInput, setSexoInput] = useState("")
  const [dataNascimentoInput, setdataNascimentoInput] = useState("")
  const [telefoneInput, setTelefoneInput] = useState("")
  const [objetivoInput, setObjetivoInput] = useState("")
  const [observacaoInput, setObservacaoInput] = useState("")
  const [cpfInput, setCpfInput] = useState("")
  const [senhaInput, setSenhaInput] = useState("")
 




  function registro(e: FormEvent){
    e.preventDefault();
    if(nomeInput === " " || emailInput === " " ||academiaInput === " " || senhaInput === " " || cpfInput === " " || sexoInput === " " || dataNascimentoInput === " " || telefoneInput === " " ||  objetivoInput === " " || observacaoInput === " " ){
      alert("Preencha todos os campos")
      return
    }

    addDoc(collection(db,"dados"),{
      nome:nomeInput,
      email: emailInput,
      academia: academiaInput,
      sexo: sexoInput,
      dataNasc: dataNascimentoInput,
      telefone: telefoneInput,
      objetivo: objetivoInput,
      obsercacao: observacaoInput,
      cpf: cpfInput,
      senha: senhaInput,
      created: new Date()

    })
    .then(()=>{
      setNomeInput("")
      setEmailInput("")
      setAcademiaInput("")
      setSexoInput("")
      setdataNascimentoInput("")
      setTelefoneInput("")
      setObjetivoInput("")
      setObservacaoInput("")
      setCpfInput("")
      setSenhaInput("")
      console.log("CADASTRADO COM SUCESSO")

    })
    .catch((error)=>{
      console.log("ERRO AO CADASTRAR NO BANCO"+error)
    })
  }

  return(
    <div className={styles.body}>
      <header className={styles.header}>
       <p className={styles.flex}>FLEX</p><p className={styles.fit}>FIT</p>
    </header>

      <form className={styles.form} onSubmit={registro}>
        <Input className={styles.formInput}
           placeholder="Nome:"
           value={nomeInput}
          onChange={ (e) => setNomeInput(e.target.value) }
        />

         <Input className={styles.formInput}
           placeholder="Email:"
           value={emailInput}
           onChange={ (e) => setEmailInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Academia:"
           value={academiaInput}
          onChange={ (e) => setAcademiaInput(e.target.value) }
        />
         <Input className={styles.formInput}
           placeholder="Sexo:"
           value={senhaInput}
          onChange={ (e) => setSenhaInput(e.target.value) }
        />
         <Input className={styles.formInput}
           placeholder="Senha:"
           value={senhaInput}
          onChange={ (e) => setSenhaInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Senha:"
           value={senhaInput}
          onChange={ (e) => setSenhaInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Cpf:"
           value={cpfInput}
          onChange={ (e) => setCpfInput(e.target.value) }
        />

        <button type='submit' className='button'>CADASTRAR</button>
       

      </form>
      <footer>
      <p className="text">Possui login? <a href="../Logar/login.html" className="cadastrese">Fazer login</a></p>
        
    </footer>

    
    </div>
  )
}