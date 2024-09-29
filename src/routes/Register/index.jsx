import Button from '../../components/Button'
import Input from '../../components/Input'
import Select from '../../components/Select'
import '../../styles/Login.css'

const USERS = ['Comerciante', 'Produtor']

function Register() {
    function Submit(event) {
        event.preventDefault()

        return window.location.href = '/login'
    }


    return (
        <section className='login_container'>
            <div>
                <form onSubmit={Submit}>
                    <h1>Seja <span>bem vindo(a)</span>, para cadastrar informe seus dados</h1>

                    <div className='inputs'>
                        <Select type="text" placeholder="teste" options={USERS} />
                        <Input type="text" placeholder="Digite seu nome" />
                        <Input type="text" placeholder="Digite seu cpf ou cnpj" />
                        <Input type="text" placeholder="Digite sua senha" />
                    </div>

                    <div className='buttons'>
                        <Button type="submit" children="Entrar" variant="primary" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register