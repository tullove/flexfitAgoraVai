import { FormEvent, useState} from 'react'
import { Input } from "../Input";
import styles from "./cadastroTreino.module.css"
import {db} from '../../services/firebaseConnection'
import{
  addDoc, 
  collection,
} from 'firebase/firestore'


export function CadastroTreino(){
  const [nomeExercicioInput, setNomeExercicioInput] = useState("")
  const [tipoExercicioInput, setTipoExercicioInput] = useState("")
  const [grupoMuscularInput, setGrupoMuscularInput] = useState("")
  const [descricaoCInput, setDescricaoCInput] = useState("")
  const [descricaoAInput, setDescricaoAInput] = useState("")
  const [pesoInput, setPesoInput] = useState("")
  const [tempoDescansoInput, setTempoDescansoInput] = useState("")
  
 



  function registro(e: FormEvent){
    e.preventDefault();
    if(nomeExercicioInput === " " || tipoExercicioInput === " " || grupoMuscularInput === " " || descricaoCInput === " " || descricaoAInput === " " || pesoInput === " " || tempoDescansoInput  ){
      alert("Preencha todos os campos")
      return
    }

    addDoc(collection(db,"treino"),{
      nome:nomeExercicioInput,
      tipo: tipoExercicioInput,
      grupo: grupoMuscularInput,
      decricaoC: descricaoCInput,
      descricaoA: descricaoAInput,
      peso: pesoInput,
      tempo:tempoDescansoInput

    })
    .then(()=>{
      setNomeExercicioInput("")
      setTipoExercicioInput("")
      setGrupoMuscularInput("")
      setDescricaoCInput("")
      setDescricaoAInput("")
      setPesoInput("")
      setTempoDescansoInput("")
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
           placeholder="Nome do Exercicio:"
           value={nomeExercicioInput}
          onChange={ (e) => setNomeExercicioInput(e.target.value) }
        />

         <Input className={styles.formInput}
           placeholder="Tipo do exercicio:"
           value={tipoExercicioInput}
           onChange={ (e) => setTipoExercicioInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Grupo Muscular:"
           value={grupoMuscularInput}
           onChange={ (e) => setGrupoMuscularInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Descrição completa:"
           value={descricaoCInput}
           onChange={ (e) => setDescricaoCInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Descrição abreviada:"
           value={descricaoAInput}
           onChange={ (e) => setDescricaoAInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Indicação de peso para o aluno:"
           value={pesoInput}
           onChange={ (e) => setPesoInput(e.target.value) }
        />
        <Input className={styles.formInput}
           placeholder="Tempo de descanso:"
           value={tempoDescansoInput}
           onChange={ (e) => setTempoDescansoInput(e.target.value) }
        />
        <button type='submit' className='button'>CADASTRAR</button>
       

      </form>


    
    </div>
  )
}