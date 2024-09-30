import Header from "../../components/Header";
import "../../styles/Home/data-merchant.css";

const marketProducts = [
  {
    name: "Arroz",
    amount: "90 Unidades",
  },
  {
    name: "Feijão",
    amount: "30 Unidades",
  },
];

const markets = [
  {
    products: [
      {
        name: "Laranja",
        amount: "90 Unidades",
      },
      {
        name: "Maçã",
        amount: "30 Unidades",
      },
    ],
    location: "Avenida São Rafael - Salvado, BA",
    status: "open",
  },
  {
    products: marketProducts,
    location: "Avenida São Rafael - Salvado, BA",
    status: "open",
  },
  {
    products: marketProducts,
    location: "Avenida São Rafael - Salvado, BA",
    status: "negotiating",
  },
];

function ProducerHome() {
  return (
    <>
      <Header user="Produtor" />

      <main>
        <section className="container_data">
          <h1>hello producer</h1>

          <div className="data-info">
            {markets.map((market, marketIndex) => (
              <div
                className="card_data container_stock_products"
                key={marketIndex}
              >
                <div className="header_card_data market">
                  <h2>Comércio {marketIndex + 1}</h2>
                  <p>
                    <span>Endereço:</span> <span>{market.location}</span>
                  </p>
                </div>
                <div className="list_items_data">
                  <ul>
                    {market.products.map((product, productIndex) => (
                      <li key={productIndex}>
                        <p>{product.name}</p>
                        <span>{product.amount}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {market.status === "negotiating" && (
                  <div className="negotiating">
                    <p>Em negociação</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProducerHome;
