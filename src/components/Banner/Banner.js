import './Banner.css'

export const Banner = () => {
    /*
    JSX é uma extensão React para a sintaxe da linguagem JavaScript 
    que fornece uma maneira de estruturar a renderização de componentes 
    usando uma sintaxe familiar a muitos desenvolvedores. 
    É semelhante em aparência ao HTML mas não é HTML.
    */
    return (
        <header class="banner">
            <img src="/imagens/banner.png" alt="Banner principal do site"></img>
        </header>
    )
}