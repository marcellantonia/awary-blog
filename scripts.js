const posts = [
    {
        title: "Google Chrome",
        content: "O Google Chrome é um navegador rápido, seguro e fácil de usar. Projetado para o Android, o Chrome traz artigos personalizados de notícias, links rápidos."        
    },
    {
        title: "Mozilla Firefox",
        content: "A Mozilla é a organização sem fins lucrativos por trás do Firefox, o navegador alternativo original. Nós criamos produtos e políticas para manter a internet."        
    },
    {
        title: "Microsoft Edge",
        content: "Criado com a mesma tecnologia do Chrome, o Microsoft Edge tem recursos integrados adicionais, como o início rápido e as abas inativas para dormir, que melhoram a sua experiência de navegação com desempenho e velocidade de primeiro nível e otimizado para funcionar melhor com o Windows."        
    }
];

const wrapper = document.getElementById("posts");

posts.forEach (createArticle);

function createArticle(post) {
    const article = document.createElement("article");
    const title = document.createElement("h1");
    const titleText = document.createTextNode("post.title");
    title.appendChild(titleText);
    article.appendChild(title);
    const content = document.createElement("p");
    const comtentText = document.createTextNode("post.content");
    content.appendChild(contentText);
    article.appendChild(content);
    wrapper.appendChild(article);
}
