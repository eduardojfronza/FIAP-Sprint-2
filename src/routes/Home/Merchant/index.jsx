import '../../../styles/Home/Merchant.css'
import { LuFilter } from "react-icons/lu";


import Button from "../../../components/Button"
import Header from "../../../components/Header"


function Merchant() {
    const missingProducts = [
        {
            name: 'Laranja',
            amount: '90 Unidades',
        },
        {
            name: 'Maça',
            amount: '30 Unidades ',
        },
        {
            name: 'Batata',
            amount: '30 Quilos',
        }
    ]


    return <>
        <Header user={'Comerciante'} />

        <main>
            <section className='container_merchant'>
                <div className="card_merchant container_missing_products">
                    <div className='header_card_merchant'>
                        <h2>Produtos em falta</h2>
                        <Button type="button" children="Adicionar" variant="primary" />
                    </div>

                    <div className='list_items_merchant'>
                        <ul>
                            {missingProducts.map((product, index) =>
                                < li key={index} >
                                    <p>{product.name}</p>
                                    <span>{product.amount}</span>
                                    <button>Remover</button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className='card_merchant container_procuder_deal'>
                    <div className='header_card_merchant'>
                        <h2>Produtores</h2>
                        <LuFilter style={{ fontSize: "22px" }} />
                    </div>

                    <div className='list_items_merchant'>
                        <ul>
                            {missingProducts.map((product, index) =>
                                < li key={index} >
                                    <p>{product.name}</p>
                                    <span>{product.amount}</span>

                                    <div className='buttons_list_item_merchant'>
                                        <button style={{ backgroundColor: "#ED4B4E" }}>Remover</button>
                                        <button style={{ backgroundColor: "#F6FE81" }}>Negociar</button>
                                        <button style={{ backgroundColor: "#81FE88" }}>Finalizar</button>
                                    </div>

                                </li>
                            )}
                        </ul>
                    </div>

                </div>
            </section>
        </main >
    </>
}

export default Merchant