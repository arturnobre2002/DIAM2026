import React, { useEffect, useState } from "react";
import { Table, Button, Input, FormGroup, Label } from "reactstrap";
import { useNavigate } from "react-router-dom";
import DetailModal from "./DetailModal";
import VoteModal from "./VoteModal";
import axios from "axios";

function QuestionTable() {
  const URL_QUESTIONS = "http://localhost:8000/votacao/api/questions/"; // (1)
  const URL_QUESTION = "http://localhost:8000/votacao/api/question/"; // (1)

  const [questionList, setQuestionList] = useState([]); // (2)
  const [newQuestion, setNewQuestion] = useState('');
  const navigate = useNavigate();

  const getQuestions = () => {
    axios.get(URL_QUESTIONS).then((request) => {
      setQuestionList(request.data);
    });
  };

  useEffect(() => {
    // (4)
    getQuestions();
  }, []);

  const createQuestion = () => {
    if(newQuestion.trim() === '') return
    const data = {questao_texto: newQuestion, pub_data: new Date().toISOString() }
    axios.post(URL_QUESTIONS, data).then(() => {
      setNewQuestion('')
      getQuestions()
    })
  }

  const deleteQuestion = (id) => {
    axios.delete(URL_QUESTION + id).then(() => getQuestions())
  }

  const centered = { textAlign: "center" };

  return (
    // (5)
    <>
    <FormGroup>
        <Label><b>Nova Questão</b></Label>
        <Input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Texto da questão..."
        />
        <Button color="primary" style={{ marginTop: '8px' }} onClick={createQuestion}>
          Criar Questão
        </Button>
      </FormGroup>

    <Table light="true">
      <thead>
        <tr>
          <th>Texto</th>
          <th style={centered}>Controls</th>
        </tr>
      </thead>

      <tbody>
        {questionList.map((question) => (
          // (6)
          <tr key={question.id}>
            <td>{question.questao_texto}</td>
            <td style={centered}>
             {/* <DetailModal question={question} />
              &nbsp;
              <VoteModal question={question} /> */}
              <Button color="warning" onClick={() => navigate(`/questao/${question.id}`)}>Detalhe</Button>
                &nbsp;
                <Button color="success" onClick={() => navigate(`/votar/${question.id}`)}>Votar </Button>
                &nbsp;
                <Button color="danger" onClick={() => deleteQuestion(question.id)}> Apagar </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default QuestionTable;