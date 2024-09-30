import Header from "../../../components/Header";
import Button from "../../../components/Button";
import "../../../styles/Home/data-merchant.css";

const stockProducts = [
  {
    name: "Laranja",
    amount: "90 Unidades",
  },
  {
    name: "Maçã",
    amount: "30 Unidades ",
  },
  {
    name: "Batata",
    amount: "30 Quilos",
  },
];

function ProducerProducts() {
  return (
    <>
      <Header user={"Produtor"} />

      <main>
        <section className="container_data">
          <div className="data-info">
            <div className="card_data container_stock_products">
              <div className="header_card_data">
                <h2>Meus produtos</h2>
                <Button type="button" variant="minified">
                  Adicionar
                </Button>
              </div>

              <div className="list_items_data">
                <ul className="card_remove_item">
                  {stockProducts.map((product, index) => (
                    <li key={index}>
                      <p>{product.name}</p>
                      <span>{product.amount}</span>
                      <Button type="button" className="card_remove_item">
                        Remover
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProducerProducts;
