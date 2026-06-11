# VidaPlena Nexus

O VidaPlena Nexus é um projeto de banco de dados visual desenvolvido para a ONG **Vida Plena** como parte de uma atividade acadêmica da disciplina **Banco de Dados Visual e Ferramentas Integradas**.

## Visão geral do projeto

O objetivo deste projeto é organizar dados relacionados a:

- eventos
- beneficiários
- inscrições
- histórico de participação

A solução foi construída com **Airtable** como plataforma principal de banco de dados visual, combinando interfaces, formulários, automações e uma página pública hospedada no **GitHub Pages**.

## Problema

A ONG Vida Plena realiza ações como:

- eventos de inclusão digital
- atividades de capacitação profissional
- campanhas de saúde

Antes deste projeto, os dados eram controlados por planilhas manuais e grupos de WhatsApp, o que gerava:

- desorganização
- registros duplicados
- dificuldade para acompanhar o histórico de participação
- risco de perda de informações

## Solução proposta

A proposta foi criar um sistema visual e acessível capaz de:

- cadastrar beneficiários
- criar e gerenciar eventos
- vincular beneficiários a múltiplos eventos
- exibir histórico de participação
- oferecer um dashboard com botões de acesso rápido
- automatizar parte do fluxo de trabalho

## Estrutura do banco de dados

O projeto foi modelado com três tabelas principais:

### 1. Beneficiários
Armazena:
- nome completo
- idade
- contato
- e-mail
- região

### 2. Eventos
Armazena:
- nome do evento
- categoria
- data
- horário
- local
- região
- capacidade
- status

### 3. Inscrições
Funciona como ponte relacional entre beneficiários e eventos.
Armazena:
- ID da inscrição
- beneficiário
- evento
- data da inscrição
- status da inscrição
- canal de inscrição

## Funcionalidades implementadas

- banco de dados visual relacional no Airtable
- geração automática de ID de inscrição
- views filtradas e agrupadas
- visualização em calendário
- kanban por status de inscrição
- interface no Airtable com múltiplas páginas
- dashboard administrativo com botões de acesso rápido
- formulário de cadastro de beneficiário
- formulário de criação de evento
- formulário de inscrição em evento
- automação funcional no Airtable
- página pública do projeto no GitHub Pages

## Páginas da interface

A interface criada no Airtable inclui:

- Painel Administrativo
- Eventos
- Beneficiários
- Inscrições
- Calendário

## Formulários

O sistema inclui três formulários funcionais:

- formulário de beneficiário
- formulário de evento
- formulário de inscrição

## Automação

Foi criada e testada com sucesso uma automação funcional no Airtable para atualizar automaticamente o status da inscrição de acordo com a lógica definida no projeto.

## Acesso e segurança

O acesso completo ao ambiente administrativo foi pensado para usuários autorizados.  
Como o Airtable no plano gratuito não oferece autenticação nativa customizada com usuário e senha próprios do sistema, o controle de acesso foi tratado com base nas permissões da própria plataforma e no acesso de visualização autorizado. Já os formulários públicos foram usados apenas para entrada estruturada de dados, sem expor a base administrativa completa.

## Tecnologias utilizadas

- Airtable
- Airtable Interfaces
- Airtable Forms
- Airtable Automations
- GitHub
- GitHub Pages
- HTML
- CSS
- JavaScript

## Links do projeto

### Página pública do projeto
https://therealteacherpaul.github.io/vidaplena-nexus/

### Repositório GitHub
https://github.com/therealteacherpaul/vidaplena-nexus

### Projeto no Airtable
https://airtable.com/appJj6TiOdEunK6Fl/pagXu60vYoFnNGccS

### PDF do projeto
https://therealteacherpaul.github.io/vidaplena-nexus/assets/VidaPlena_Nexus.pdf

### Vídeo de apresentação
https://youtu.be/IhVEVqzO5io

## Informações acadêmicas

- **Aluno:** Paulo Ricardo Takara Stefens
- **RA:** 232231
- **Curso:** Graduação Tecnológica em Inteligência Artificial e Automação Digital
- **Disciplina:** Banco de Dados Visual e Ferramentas Integradas

## Autor

**Paulo Ricardo Takara Stefens**