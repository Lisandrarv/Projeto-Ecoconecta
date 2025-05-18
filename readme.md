# ♻ Econectar - Aplicativo de Reciclagem

🌱 Projeto de um aplicativo web feito com Django que conecta usuários a pontos de coleta de materiais recicláveis, promove agendamentos de coleta e reforça a educação ambiental com uma interface moderna. 

Os serviços disponíveis são:

- Agendamento de coleta ​
- Visualização de pontos de coleta ​
- Autenticação
- Feedback ambiental ​

<div align="center">
  
### Objetivo

Criar um aplicativo de coleta de materiais recicláveis que busca conscientizar sobre a importância da reciclagem do lixo, auxiliando a população da cidade de Porto Alegre na identificação dos tipos de materiais recicláveis e as formas corretas de reciclagem, trazendo informações sobre rotas de coleta de lixo, assim como empresas de coletas de materiais recicláveis específicos.

### Prototipos

Protótipos Interativos: A seguir, são apresentados os protótipos de interface do aplicativo, criados no Figma. Eles ilustram as telas e interações dos módulos de login de Pessoas Físicas, agendamento e localização de pontos de coleta. Para visualizar os protótipos
interativos, basta clicar nos links abaixo.

<img src="https://github.com/user-attachments/assets/2cb35788-d05c-4fe5-bf46-5d667494e6e6">
<img src="https://github.com/user-attachments/assets/602e88e6-ba90-44f3-8318-e9aa4c336c17">
<img src="https://github.com/user-attachments/assets/ce6d11d3-5a94-4789-b6de-b64082aa1f41">
<img src="https://github.com/user-attachments/assets/5ea4ca0f-296b-4ed0-9997-5d7052d21304">
<img src="https://github.com/user-attachments/assets/86a93572-8b21-48b6-9cf2-7eeb82b7c116">
<img src="https://github.com/user-attachments/assets/a517bb64-b61a-416f-93af-872cd0de1be1">
<img src="https://github.com/user-attachments/assets/4a15e87e-cebc-4827-abbc-a89825bd1d8a">

</div>

⚙️ Pré-requisitos:
Antes de executar o projeto instale:

Python 3.9+
Pip
Git
Um ambiente virtual (recomendado: venv ou virtualenv)

🚀 Como executar o projeto localmente:
1. Clonar o repositório:
git clone https://github.com/seu-usuario/econectar.git
cd econectar

2. Criar um ambiente vitual:
python -m venv venv

3. Ativar o ambiente virtual:
   * Windows
     venv\Scripts\activate

4. Instalar as dependências:
pip install -r requirements.txt
Criar o arquivo requirements se ele não exisitir:
pip freeze > requirements.txt

5. Realizar as migrações:
python manage.py makemigrations
python manage.py migrate

6. Iniciar o servidor:
python manage.py runserver

7. Acessar o servidor:
Acesse em http://127.0.0.1:8000

🗃️ Scripts de Carga (dados iniciais)
Este é um script com dados de exemplo, com instruções, para os pontos de coleta ou agendamentos:
python manage.py loaddata coleta/fixtures/pontos_coleta.json

☁️ Subida para Nuvem (opcional)
Se for implantar o projeto em ambiente de nuvem (como Heroku, Railway ou Render), inclua:

  * Procfile
  * runtime.txt
  * requirements.txt
  * Configuração para STATICFILES

### Tecnologias Utilizadas

* Python 3.10+ 
* Django 4.x
* HTML5
* CSS3
* Bootstrap5
* SQLite3 (padrão Django)

🌿 Sobre
Desenvolvido como parte de um projeto acadêmico e social com foco em sustentabilidade, cidadania e tecnologia acessível.

  

