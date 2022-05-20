## Desafio Componentização

Com o template já clonado, as dependências instaladas e a fake API rodando, você deve criar **pelo menos** os componentes SideBar e Content que já estão com os arquivos criados.
Os arquivos a serem editados são:

- **src/App.tsx**
Esse componente contém toda a aplicação com exceção do componente `Button` que não precisa ser alterado e `Icon` que também não precisa de alteração.
- **src/components/Content.tsx**
Esse componente, ainda vazio, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação (seção contornada em vermelho):

<p align="center">
  <img src="demo\contentImg.png" width="1012" height="470"/>
</p>

- **src/components/SideBar.tsx**
Esse componente, também vazio, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página (seção contornada em vermelho):

<p align="center">
  <img src="demo\sidebarImg.png" width="1012" height="470"/>
</p>

Se você preferir, pode também componentizar algumas outras partes da aplicação como, por exemplo, o header, mas esse não está como requisito deste desafio 🚀
<hr>

## 💪 Considerações finais:
Como eu estava tendo problema para rodar o aplicativo com o template da Rocket, eu criei meu proprio template utilizando create react-app --template typescript, depois de instalar as dependencias necessárias, fiz a componentização como solicitado no desafio.

## ⚙️ Como rodar o projeto?
Após a clonagem do repositório, Baixe as dependendências:
```
yarn
```

Inicie o Servidor com:
```
yarn server
```

Em outro terminal, inicie a aplicação:
```
yarn start
```

## 🖥️ Preview do projeto

<p align="center">
  <img src="demo\preview.gif" width="1012" height="569"/>
</p>