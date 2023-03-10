import './Formulario.css';
import CampoTexto from '../CampoTexto';

export const Formulario = () => {
    return (
        <section class="formulario">
            <form>
                <h2>Preencha os dados</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}
