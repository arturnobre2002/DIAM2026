import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from 'reactstrap'
import axios from 'axios'
import VoteForm from './VoteForm'
import Header from './Header'

function VotePage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const URL_QUESTION = `http://localhost:8000/votacao/api/question/${id}`
  const URL_OPTIONS  = `http://localhost:8000/votacao/api/options/${id}`

  const [question, setQuestion]     = useState(null)
  const [optionList, setOptionList] = useState([])

  useEffect(() => {
    axios.get(URL_QUESTION).then((res) => setQuestion(res.data))
    axios.get(URL_OPTIONS).then((res) => setOptionList(res.data))
  }, [])

  if (!question) return <p>A carregar...</p>

  return (
    <>
      <Header />
      <Container style={{ marginTop: '20px', maxWidth: '800px' }}>
        <h4>Voto na questão {id}</h4>
        <VoteForm
          options={optionList}
          question={question}
          toggle={() => navigate('/')}
        />
      </Container>
    </>
  )
}

export default VotePage