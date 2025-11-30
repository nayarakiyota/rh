

# 💼 Projeto Inova RH - FrontEnd

<p align="center">
  <img src="https://ik.imagekit.io/u0isfvxls/InovaHer/Copilot_20251028_085719.png?updatedAt=1761683022317" alt="logo" />
</p>


## 1. Descrição

O **Inova RH** é uma plataforma desenvolvida para **modernizar a gestão de pessoas** e, ao mesmo tempo, **atrair novos talentos** para o ecossistema corporativo.  
Mais do que um simples sistema de Recursos Humanos, o Inova RH funciona como uma **vitrine tecnológica** — um ambiente inovador que demonstra os valores, processos e ferramentas da empresa, despertando o interesse de profissionais em **fazer parte do time**.

Com uma interface moderna e intuitiva, o sistema centraliza informações de colaboradores e departamentos, otimizando os processos de RH e promovendo **agilidade, transparência e eficiência**.  
Entre as principais funções, estão o **cálculo automático de salários**, o **cadastro de colaboradores**, e a **geração de holerites** com base em regras de negócio automatizadas.

Nesta sprint, o backend passou a incluir **autenticação e autorização via Spring Security e JWT**, além do **deploy da aplicação em ambiente cloud**, garantindo segurança e escalabilidade.

------

## 2. Sobre a Integração com o Backend

O front-end do **Inova RH** consome a API desenvolvida em **Spring Boot**, que segue a arquitetura **RESTful** e disponibiliza os endpoints necessários para operações de cadastro, consulta, atualização e exclusão (CRUD) das entidades:

- **Colaborador**
- **Departamento**

A interface foi construída para oferecer uma navegação simples e intuitiva, garantindo a comunicação eficiente com o back-end e refletindo em tempo real as regras de negócio, como:

- validações  
- fluxo de cadastro  
- atualização de dados  
- mensagens de erro e sucesso (toasts/alertas)  

Este front-end também segue padrões profissionais, demonstrando boas práticas de desenvolvimento web aplicadas ao contexto corporativo.

### 2.1. Principais Funcionalidades

1. CRUD completo das entidades:
   - `Colaborador`
   - `Departamento`
2. Cálculo automático de salário:  
   `valorHora * horasTrabalhadas + bonus – descontos`
3. Geração de **holerite** com resumo de valores
4. Relacionamento entre Departamento e Colaborador (`@OneToMany`, `@ManyToOne`)
5. Visualização da lista de Colaboradores
6. Visualização da lista de Departamentos
7. Validação de formulários e feedback de erros 
8. Consumo de API (backend) para operações CRUD — integração com o backend do projeto Inova RH  

------

## 3. Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **React Toastify**
- **Axios**
- **TailwindCSS**
- **Git e GitHub**
- Deploy: **Vercel**

------

## 6. Configuração e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/InovaHer/inovaher-projeto-front-rh-frontend.git
   ```

2. **Acesse o diretório**

   ```bash
   cd inovaher-projeto-front-rh-frontend
   ```

3. **Instale as dependências**  

   ```
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**

   ```
   npm run dev
   ```

5. Após isso, **acesse `http://localhost:5173`**.

------

## 👥 Equipe – Grupo D

<table align="center">
  <tr>
      <td align="center">
          <a href="https://github.com/nayarakiyota">
        <img src="https://github.com/nayarakiyota.png" style="width:120px; height:120px; border-radius:50%; object-fit:cover;"><br>
        <b>Nayara</b><br>
        <sub>Scrum Master</sub>
      </a>
    </td>
    <td align="center">
         <a href="https://github.com/stellabrumatti">
        <img src="https://github.com/stellabrumatti.png" style="width:120px; height:120px; border-radius:50%; object-fit:cover;"><br>
        <b>Stella</b><br>
        <sub>Tester</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jmcardoso18">
        <img src="https://github.com/jmcardoso18.png" style="width:120px; height:120px; border-radius:50%; object-fit:cover;"><br>
        <b>Jamila</b><br>
        <sub>Desenvolvedora</sub>
      </a>
    </td>
    <td align="center">
        <a href="https://github.com/patriciaEliseu">
        <img src="https://github.com/patriciaEliseu.png" style="width:120px; height:120px; border-radius:50%; object-fit:cover;"><br>
        <b>Patricia</b><br>
        <sub>Desenvolvedora</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/lauhgabrielle14">
        <img src="https://github.com/lauhgabrielle14.png" style="width:120px; height:120px; border-radius:50%; object-fit:cover;"><br>
        <b>Lauren</b><br>
        <sub>Desenvolvedora</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/MarciaCondarco">
        <img src="https://github.com/MarciaCondarco.png" style="width:120px; height:120px; border-radius:50%; object-fit:cover;"><br>
        <b>Marcia</b><br>
        <sub>Desenvolvedora</sub>
      </a>
    </td>
  </tr>
</table>



------

## 📅 Data

**São Paulo, dezembro de 2025**

