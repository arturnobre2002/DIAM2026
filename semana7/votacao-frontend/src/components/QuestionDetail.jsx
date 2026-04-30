import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Button, Input, FormGroup, Label } from 'reactstrap'
import axios from 'axios'
import DetailData from './DetailData'
import Header from './Header'

function QuestionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const URL_QUESTION   = `http://localhost:8000/votacao/api/question/${id}`
  const URL_OPTIONS    = `http://localhost:8000/votacao/api/options/${id}`
  const URL_OPTION     = `http://localhost:8000/votacao/api/option/`
  const URL_COMENTARIOS = `http://localhost:8000/votacao/api/comentarios/${id}`

  const [question, setQuestion]       = useState(null)
  const [optionList, setOptionList]   = useState([])
  const [comentarios, setComentarios] = useState([])
  const [novaOpcao, setNovaOpcao]     = useState('')

  const getData = () => {
    axios.get(URL_QUESTION).then((res) => setQuestion(res.data))
    axios.get(URL_OPTIONS).then((res) => setOptionList(res.data))
    axios.get(URL_COMENTARIOS).then((res) => setComentarios(res.data))
  }

  useEffect(() => { getData() }, [])

  const adicionarOpcao = () => {
    if (novaOpcao.trim() === '') return
    const data = { questao: id, opcao_texto: novaOpcao, votos: 0 }
    axios.post(URL_OPTIONS, data).then(() => {
      setNovaOpcao('')
      axios.get(URL_OPTIONS).then((res) => setOptionList(res.data))
    })
  }

  const apagarOpcao = (optionId) => {
    axios.delete(URL_OPTION + optionId).then(() => {
      axios.get(URL_OPTIONS).then((res) => setOptionList(res.data))
    })
  }

  if (!question) return <p>A carregar...</p>

  return (
    <>
      <Header />
      <Container style={{ marginTop: '20px', maxWidth: '800px' }}>

        <DetailData
          options={optionList}
          comentarios={comentarios}
          question={question}
          toggle={() => navigate('/')}
        />

     
        <hr />
        <h5>Gerir Opções</h5>
        {optionList.map((o) => (
          <div key={o.id} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
            <span style={{ flexGrow: 1 }}>{o.opcao_texto}</span>
            <Button color="danger" size="sm" onClick={() => apagarOpcao(o.id)}>
              Apagar
            </Button>
          </div>
        ))}

        <FormGroup style={{ marginTop: '12px' }}>
          <Label><b>Nova Opção</b></Label>
          <Input
            type="text"
            value={novaOpcao}
            onChange={(e) => setNovaOpcao(e.target.value)}
            placeholder="Texto da opção..."
          />
          <Button color="primary" style={{ marginTop: '8px' }} onClick={adicionarOpcao}>
            Adicionar Opção
          </Button>
        </FormGroup>

      </Container>
    </>
  )
}

export default QuestionDetail