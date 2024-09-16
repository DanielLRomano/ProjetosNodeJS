Escopo do Projeto: Aplicação Web de To-Do List para Organização Financeira
Objetivo
Desenvolver uma aplicação web de To-Do List focada na organização financeira, permitindo que os usuários gerenciem suas tarefas financeiras, acompanhem seus gastos e definam orçamentos de forma eficiente. O sistema será seguro, escalável, com autenticação via JWT (JSON Web Tokens) e utilizará tecnologias modernas para oferecer uma experiência fluida e eficaz.

1. O que Vamos Fazer
A aplicação permitirá que os usuários:

Gerenciem suas tarefas financeiras, como controle de despesas, planejamento de pagamentos, e metas de orçamento.
Acompanhem o progresso de suas finanças através de relatórios e alertas automáticos.
Usem autenticação segura para garantir que apenas usuários autenticados possam acessar suas próprias informações financeiras.

2. Escopo Funcional
Autenticação e Autorização:
Registro de novos usuários.
Login de usuários existentes.
Implementação de JWT para gerenciamento seguro de sessões.
Recuperação de senha por e-mail.
Gerenciamento de Tarefas Financeiras:
Criação de novas tarefas financeiras (e.g., pagar contas, revisar despesas).
Edição de tarefas financeiras existentes.
Exclusão de tarefas.
Marcação de tarefas como concluídas ou pendentes.
Filtros para visualizar tarefas por status (pendente, concluída) e categoria (despesas, receitas).
Orçamentos e Monitoramento de Gastos:
Definir orçamentos para categorias financeiras (e.g., alimentação, transporte).
Monitoramento de despesas e receitas, comparando com os limites orçamentários.
Alertas automáticos quando os usuários se aproximarem dos limites estabelecidos.
Relatórios Financeiros:
Geração de relatórios financeiros mensais/semanais para monitorar gastos e receitas.
Visualização de estatísticas financeiras para ajudar no planejamento.
Histórico de despesas e receitas.
Interface de Usuário:
Página inicial com lista de tarefas financeiras e resumo orçamentário.
Formulários para adicionar, editar e excluir tarefas.
Painel para visualizar o status do orçamento.
Mensagens de erro e sucesso.
Design responsivo para diferentes tamanhos de tela (mobile, tablet, desktop).
Persistência de Dados:
Armazenamento de dados em MongoDB.
Operações CRUD para gerenciar tarefas, usuários e orçamentos.

3. Escopo Não Funcional
Desempenho:
Resposta do servidor em menos de 2 segundos para operações comuns.
Carregamento de página em menos de 3 segundos, mesmo com volume moderado de dados.
Segurança:
Criptografia de senhas usando bcrypt ou similar.
Proteção contra ataques comuns, como CSRF, XSS, e SQL Injection.
Armazenamento seguro de tokens JWT.
Controle de acesso baseado em permissões, permitindo que cada usuário gerencie apenas suas próprias finanças.
Escalabilidade:
Arquitetura escalável para suportar o crescimento no número de usuários e a adição de novas funcionalidades.
Suporte para até 1.000 usuários simultâneos.
Usabilidade:
Design intuitivo com navegação simples.
Foco na experiência do usuário, com interface clara e orientada para a produtividade financeira.
Compatibilidade com dispositivos móveis, tablets e desktops.
Manutenibilidade:
Código modular e bem documentado para facilitar futuras manutenções e expansões.
Testes automatizados para garantir a integridade e a segurança do sistema.

4. Objetivos SMART
Específico: Desenvolver uma aplicação web de To-Do List com foco em finanças, que permita gerenciar tarefas financeiras, acompanhar gastos e controlar orçamentos.
Mensurável: Implementar todas as funcionalidades descritas no escopo funcional e não funcional, com suporte para 1.000 usuários simultâneos e tempo de resposta de menos de 2 segundos.
Atingível: Utilizar tecnologias já conhecidas, como React, Node.js, MongoDB e JWT, para garantir que o projeto seja realizável dentro do prazo.
Relevante: Auxiliar os usuários a organizarem suas finanças de forma prática e eficiente, melhorando o controle de suas despesas e orçamentos.
Temporal: Completar o desenvolvimento da aplicação em 12 semanas.

5. Cronograma - Diagrama de Gantt



![alt text](<Diagrama Gantt.png>)

Análise de Risco
Risco de Atraso no Desenvolvimento:

Mitigação: Planejamento detalhado e divisão clara de tarefas.
Problemas de Segurança:

Mitigação: Utilização de bibliotecas e práticas de segurança recomendadas.
Dificuldades de Integração entre Frontend e Backend:

Mitigação: Testes contínuos e comunicação clara entre as equipes.
Problemas de Performance:

Mitigação: Monitoramento de performance e otimização contínua.
Recursos
Tecnologias:

Frontend: React
Backend: Node.js
Banco de Dados: MongoDB
Autenticação: JWT
Ferramentas de Desenvolvimento: Git, Docker (opcional), ferramentas de CI/CD (opcional)
Equipe:

Desenvolvedor Frontend
Desenvolvedor Backend
Designer (opcional)
Testador (opcional)
Orçamento:

Desenvolvimento: X horas
Infraestrutura: Y reais
Materiais de Referência:

Documentação das tecnologias utilizadas
Tutoriais e exemplos relevantes


Diagramas

Diagrama de Classes


![alt text](<Diagrama de Classes.png>)

Diagrama de Uso
![alt text](<Diagrama de caso de uso.png>)

Diagrama de Fluxo
![alt text](<Diagrama de fluxo.png>)


Prototipagem
![alt text](prototipagem.png)  