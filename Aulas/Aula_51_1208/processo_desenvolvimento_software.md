# Processo de desenvolvimento de software (12/08/2023)

## Definição
    O processo de desenvolvimento de software é tudo aquilo que envolve,
    esforço de criar, desenvolver, projetar, programar e dar suporte ao software.
    Podemos dividi-lo nas seguintes etapas:

    1 - Requisitos do cliente (Stakeholder - Sócios - Parte interessada)
        Nesta etapa o cliente deve dizer o que deve ser feito, analisar qual
        objetivo daquele software ou daquela entrega e analisar expectativas
        que o cliente deseja alcançar com o software.

    2 - Especificações técnicas (Início da sprint)
        Nesta etapa é feito a analise dos requisitos de negócio para que seja
        feito o levantamento dos requisitos técnicos para desenvolver o software.
        Os requisitos de negócio devem estar totalmente desenvolvidos para que
        seja feito o levantamento técnico. O desenvolvimento só inicia quando
        todos do time entenderem o que deve ser feito.
        Exemplo:
            Requisito de negócio:
                "Usuário só deve acessar o sistema quando passar pelo login"
            Requisito técnico:
                - "Criar tela de login"
                - "Criar endpoint de login"
                - "Criar método de geração de token"
    
    3 - Processo (Durante a sprint)
        Nesta etapa inicia-se o processo de codificação, onde os desenvolvedores
        vão pegar os requisitos técnicos e de negócios/produto e implementar
        via código.
    
    4 - Teste (Durante a sprint)
        Nesta etapa inicia-se os testes das entregas realizadas pelos
        desenvolvedores para garantir que o que foi desenvolvido está de acordo
        com o que foi pedido. Nesta etapa é o momento de encontrar bugs, falhas,
        vulnerabilidade, débito técnico...
        QA (Quality Assurance) - UI/UX (User interface - User experience)
    
    5 - Review (Final da sprint)
        Após o teste, é feito uma reuinão (review) para apresentar para o
        cliente/stackholder o que foi desenvolvido, se estiver de acordo com
        o que foi pedido, segue para a próxima etapa, caso não esteja, inicia-se
        o processo de correções.

    6 - Implantação/publicação (Subir para produção)
        Após os testes e review inicia-se a etapa de publicação do software nos
        servidores de produção, para que os clientes começem a usar o software.