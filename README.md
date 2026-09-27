# Portfólio de Desenvolvedor Web

Projeto em HTML5, CSS3 e JavaScript puro.

## Onde alterar seu site

O principal arquivo de edição é:

`script.js`

Procure:

`const projects = [`

Dentro dele existe um único projeto chamado `blank`.

### Para colocar um site que você fez

Altere estas linhas:

```js
{
  name: "blank", // nome do seu site
  description: "Descrição do projeto.", // descrição
  technologies: ["HTML", "CSS", "JavaScript"], // tecnologias
  categories: ["html", "javascript"], // categorias
  link: "#", // link do site
  image: "assets/blank-site.svg", // imagem do site
  featured: true
}
```

### Para adicionar outro projeto

Copie o objeto `blank`, coloque uma vírgula depois do objeto anterior e altere os dados.

Exemplo:

```js
,{
  name: "Meu novo site",
  description: "Site que desenvolvi para...",
  technologies: ["HTML", "CSS"],
  categories: ["html"],
  link: "https://meu-site.com",
  image: "assets/meu-site.jpg",
  featured: true
}
```

Coloque as imagens dos seus projetos dentro de `assets/`.

## Imagem da capa

A imagem provisória da capa está em:

`assets/capa-referencia.svg`

Para trocar a imagem, abra `index.html` e procure o comentário:

`>>> IMAGEM DE REFERÊNCIA DA CAPA`

Depois altere o `src`, por exemplo:

```html
<img src="assets/minha-capa.jpg" alt="Imagem de referência da capa do portfólio">
```

## Seus dados

No `index.html`, procure os comentários `>>>` para encontrar rapidamente os locais de edição.

Você pode alterar:
- nome
- descrição
- áreas de atuação
- links
- e-mail
- imagem da capa

## Habilidades

No `script.js`, procure:

`const skills = [`

Altere nomes e porcentagens ou adicione novas habilidades.

## Formulário

O formulário usa `mailto:` para abrir o aplicativo de e-mail do visitante.

No `script.js`:

```js
const contactEmail = "ph.eve.cris@gmail.com";
```

Troque pelo seu e-mail.

## Como executar

Abra `index.html` no navegador ou use o Live Server do VS Code.
