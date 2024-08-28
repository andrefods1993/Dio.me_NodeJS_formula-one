<h1 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Collision.webp" alt="Collision" width="40" height="40" /> Fórmula 1 API <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Collision.webp" alt="Collision" width="40" height="40" /></h1>

<div align="center">
<img src="" width="480" />
</div>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs" height="25"/>
  </a>
</p>

<h2 align="center"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Compass.webp" alt="Compass" width="30" height="30" /> Sumário</h2>
<p align="center">
 <a href="#description">Descrição</a> •
 <a href="#functionalities">Funcionalidades</a> •
 <a href="#demo">Demonstração</a> • 
 <a href="#status">Status do projeto</a> • 
 <a href="#license">Licença</a> • 
 <a href="#contributor">Colaboradores</a>
</p>

<h2 id="description"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Writing%20Hand.webp" alt="Writing Hand" width="30" height="30" /> Descrição</h2>

Uma API REST simples utilizando Fastify que fornece dados sobre equipes e pilotos de Fórmula 1.

<h2 id="functionalities"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Books.webp" alt="Books" width="30" height="30" /> Funcionalidades</h2>

-  Listar equipes: Retorna uma lista de todas as equipes de Fórmula 1.
-  Listar pilotos: Retorna uma lista de todos os pilotos de Fórmula 1.
-  Detalhes de um piloto: Retorna os detalhes de um piloto específico baseado no id fornecido.

<h2 id="demo"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Rocket.webp" alt="Rocket" width="30" height="30" /> Demonstração</h2>

## Endpoints

### `GET /teams`

Retorna a lista completa de equipes de Fórmula 1.

**Resposta**:
- Código: 200 OK
- Tipo: `application/json`
- Corpo: Um array de objetos, onde cada objeto representa uma equipe.

**Exemplo de resposta**:
```json
[
    {
        "id": 1,
        "name": "Ferrari"
    },
    {
        "id": 2,
        "name": "Mercedes"
    },
    ...
]
```

### `GET /drivers`

Retorna a lista completa de pilotos de Fórmula 1.

**Resposta**:
- Código: 200 OK
- Tipo: `application/json`
- Corpo: Um array de objetos, onde cada objeto representa um piloto.

**Exemplo de resposta**:
```json
[
    {
        "id": 1,
        "name": "Lewis Carl Davidson Hamilton",
        "team": "Mercedes"
    },
    {
        "id": 2,
        "name": "Max Emilian Verstappen",
        "team": "Red Bull Racing"
    },
    ...
]
```

### `GET /drivers/:id`

Retorna os detalhes de um piloto específico identificado pelo `id` na URL.

**Parâmetros**:
- `id`: O identificador único do piloto.

**Resposta**:
- Código: 200 OK (se o piloto for encontrado)
- Código: 404 Not Found (se o piloto não for encontrado)
- Tipo: `application/json`
- Corpo: Um objeto representando o piloto ou uma mensagem de erro.

**Exemplo de resposta para um piloto encontrado**:
```json
{
    "id": 1,
    "name": "Lewis Carl Davidson Hamilton",
    "team": "Mercedes"
}
```

**Exemplo de resposta para um piloto não encontrado**:
```json
{
    "message": "Driver not found"
}
```

## Configuração

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure a porta** (opcional):
   - Defina a variável de ambiente `PORT` para especificar a porta na qual o servidor deve escutar. Caso contrário, a porta padrão será 3000.

4. **Inicie o servidor**:
   ```bash
   npm start
   ```


<h2 id="status"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Thermometer.webp" alt="Thermometer" width="30" height="30" /> Status do projeto</h2>

✅ **Concluído**: O projeto foi finalizado e todas as funcionalidades planejadas foram implementadas.

<h2 id="license"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Objects/Locked%20With%20Key.webp" alt="Locked With Key" width="30" height="30" /> Licença</h2>

Este projeto é licenciado sobre a licença [MIT License](https://opensource.org/licenses/MIT) - veja [LICENSE](LICENSE) para mais informações.

<h2 id="contributor"><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Technologist.webp" alt="Technologist" width="25" height="25" /> Colaboradores</h2>

[@andrefods1993](https://github.com/andrefods1993)

<span style="font-size: 10px;"> [ReadME Wizard](https://github.com/andrefods1993) </span>