import Button from "../../../components/Button";
import ProductsChart from "../../../components/Chart";
import Header from "../../../components/Header";
import "../../../styles/Home/data-merchant.css";

const stockProducts = [
  {
    name: "Laranja",
    amount: "90 Unidades",
  },
  {
    name: "Maça",
    amount: "30 Unidades ",
  },
  {
    name: "Batata",
    amount: "30 Quilos",
  },
];

const colors = [
  {
    color: "blue",
  },
  {
    color: "red",
  },
  {
    color: "yellow",
  },
];

function ProducerData() {
  return (
    <>
      <Header user={"Produtor"} />

      <main>
        <section className="container_data">
          <div className="data-info">
            <div className="card_data container_stock_products">
              <div className="header_card_data">
                <h2>Produtos no estoque</h2>
              </div>

              <div className="list_items_data">
                <ul>
                  {stockProducts.map((product, index) => (
                    <li
                      key={index}
                      style={{
                        borderLeft: `12px solid ${
                          colors[index % colors.length].color
                        }`,
                      }}
                    >
                      <p>{product.name}</p>
                      <span>{product.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card_data container_sold_products">
              <div className="header_card_data">
                <h2>Produtos vendidos</h2>
                <Button type="button" children="Adicionar" variant="primary" />
              </div>

              <div className="list_items_data">
                <ul>
                  {stockProducts.map((product, index) => (
                    <li key={index}>
                      <p>{product.name}</p>
                      <span>{product.amount}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="Chart_data">
            <ProductsChart />
          </div>
        </section>
      </main>
    </>
  );
}

export default ProducerData;
