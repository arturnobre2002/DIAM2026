from votacao.models import Questao, Opcao
from django.utils import timezone

options_list=[['Opcao A', 9], ['Opcao B', 0]]

def create_question(question_text):
    q = Questao.objects.create(questao_texto=question_text, pub_data=timezone.now())
    q.save()
    for opcao in options_list:
        q.opcao_set.create(opcao_texto=opcao[0], votos=opcao[1])

create_question("Questao 1")