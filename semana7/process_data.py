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