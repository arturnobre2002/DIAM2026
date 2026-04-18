from votacao.models import Questao, Opcao
from django.utils import timezone

#options_list=[['Opcao A', 9], ['Opcao B', 0]]

def create_question(question_text):
    q = Questao.objects.create(questao_texto=question_text, pub_data=timezone.now())
    q.save()
    for opcao in options_list:
        q.opcao_set.create(opcao_texto=opcao[0], votos=opcao[1])

#create_question("Questao 1")

options_list=[['Rock', 0],['Metal', 0],['Pop',0],['Classica',0],['Rap',0],['Eletronica',0]]
create_question("Qual o teu genero de musica favorito?")

options_list=[['Alentejano' ,0], ['Acoriano',0],['Portuense',0], ['Madeirense',0], ['Algarvio',0], ['Lisboeta',0]]
create_question("Qual o melhor sotaque portugues?")

options_list = [
    ['O efeito é executado apenas na primeira vez que o componente é renderizado.', 0],
    ['O efeito é executado apenas quando o componente é removido do DOM (unmounted).', 0],
    ['O efeito nunca é executado, servindo apenas para definir funções de cleanup.', 0],
    ['O efeito é executado sempre que o componente sofre um novo rendering.', 0]
]
create_question("No contexto de React Hooks, qual é a principal diferença de comportamento do hook useEffect quando o array de dependências é fornecido como um array vazio ([])?")

options_list = [
    ['Utilizar a função navigate("/destino", {state: {dados}}).', 0],
    ['Utilizar o método document.getElementById() para transferir o valor.', 0],
    ['Passar os dados como props diretamente no componente Link.', 0],
    ['Armazenar os dados obrigatoriamente num ficheiro JSON externo.', 0]
]
create_question("Ao utilizar a biblioteca react-router-dom para navegação entre páginas, qual é a forma correta de propagar dados através do hook useNavigate?")
