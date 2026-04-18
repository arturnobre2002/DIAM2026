from votacao.models import Questao, Opcao
from django.utils import timezone

# a)

def create_question(question_text, options_list):
    q = Questao.objects.create(questao_texto=question_text, pub_data=timezone.now())
    q.save()
    for opcao in options_list:
        q.opcao_set.create(opcao_texto=opcao[0], votos=opcao[1])

#options_list=[['Opcao A', 9], ['Opcao B', 0]]
#create_question("Questao 1", options_list)

# b)

options_list=[['Rock', 0],['Metal', 0],['Pop',0],['Classica',0],['Rap',0],['Eletronica',0]]
create_question("Qual o teu genero de musica favorito?", options_list)

options_list=[['Alentejano' ,0], ['Acoriano',0],['Portuense',0], ['Madeirense',0], ['Algarvio',0], ['Lisboeta',0]]
create_question("Qual o melhor sotaque portugues?", options_list)

options_list = [
    ['O efeito é executado apenas na primeira vez que o componente é renderizado.', 0],
    ['O efeito é executado apenas quando o componente é removido do DOM (unmounted).', 0],
    ['O efeito nunca é executado, servindo apenas para definir funções de cleanup.', 0],
    ['O efeito é executado sempre que o componente sofre um novo rendering.', 0]
]
create_question("No contexto de React Hooks, qual é a principal diferença de comportamento do hook useEffect quando o array de dependências é fornecido como um array vazio ([])?", options_list)

options_list = [
    ['Utilizar a função navigate("/destino", {state: {dados}}).', 0],
    ['Utilizar o método document.getElementById() para transferir o valor.', 0],
    ['Passar os dados como props diretamente no componente Link.', 0],
    ['Armazenar os dados obrigatoriamente num ficheiro JSON externo.', 0]
]
create_question("Ao utilizar a biblioteca react-router-dom para navegação entre páginas, qual é a forma correta de propagar dados através do hook useNavigate?", options_list)

# c)

def delete_all_questions():
    Questao.objects.all().delete()

# para testar era so tirar o comentario da linha abaixo e executar o script
# delete_all_questions()

# d)

def show_question(question):
    print(f"\nQuestao: {question.questao_texto}")
    opcoes = question.opcao_set.all()
    if not opcoes:
        print("Nao existem opcoes para esta questao")
    else:
        for opcao in opcoes:
            print(f"- {opcao.opcao_texto}: {opcao.votos} votos")

#teste
primeira_questao = Questao.objects.first()
if primeira_questao:
    show_question(primeira_questao)

# e)

def show_all_questions():
    for q in  Questao.objects.all():
        show_question(q)
        
#teste
show_all_questions()

# f)

def show_question_prefix(prefix):
    questoes_filtradas = Questao.objects.filter(questao_texto__startswith=prefix)
    if not questoes_filtradas:
        print("Nao foram encontradas questoes com o prefixo pedido")
    else:
        for q in questoes_filtradas:
            show_question(q)

#teste
show_question_prefix("Qual")

# g)

def show_question_mostvotes(question):
    print(f"\nQuestão: {question.questao_texto}")
    opcoes = question.opcao_set.all()
    if not opcoes:
        print("Nao existem opcoes para esta questao")
    else:
        max_votos = max(opcao.votos for opcao in opcoes)
        opcoes_maisvotadas = [opcao for opcao in opcoes if opcao.votos == max_votos]
        print("Opcoes mais votadas:")
        for opcao in opcoes_maisvotadas:
            print(f"- {opcao.opcao_texto}: {opcao.votos} votos")


#teste
for q in Questao.objects.all():
    show_question_mostvotes(q)

# h)

def get_total_votes():
    total=0
    opcoes = Opcao.objects.all()
    for opcao in opcoes:
            total+=opcao.votos
    print(total)

#teste
get_total_votes()

#nota: o script ja foi executado uma vez. para ver o resultado dos testes que fazem prints sem registar questoes repetidas, e necessario comentar todo o codigo da alinea b)
        
