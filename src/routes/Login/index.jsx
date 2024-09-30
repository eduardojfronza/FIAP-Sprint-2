import Button from '../../components/Button'
import Input from '../../components/Input'
import '../../styles/Login.css'

function Login() {
    function Submit(event) {
        event.preventDefault()

        return window.location.href = '/home/merchant'
    }


    function Redirect(url) {
        return window.location.href = url
    }

    return (
        <main>
            <section className='login_container'>
                <div>
                    <form onSubmit={Submit}>
                        <h1>Seja <span>bem vindo(a)</span>, para entrar informe seus dados</h1>

                        <div className='inputs'>
                            <Input type="text" placeholder="Digite seu CPF ou CNPJ" />
                            <Input type="text" placeholder="Digite sua senha" />
                        </div>

                        <div className='buttons'>
                            <Button type="button" children="Criar conta" variant="secondary" onClick={Redirect('/register')} />
                            <Button type="button" children="Entrar produtor" variant="primary" onClick={Redirect('/home/producer')} />
                            <Button type="submit" children="Entrar comerciante" variant="primary" />
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Login