import { useState } from "react";
import "../../../styles/Home/Merchant.css";
import Header from "../../../components/Header";
import Modal from "../../../components/Modal";

function Merchant() {
  const [products, setProducts] = useState([
    { name: "Laranja", amount: "90 Unidades" },
    { name: "Maçã", amount: "30 Unidades" },
    { name: "Batata", amount: "30 Quilos" },
  ]);

  const [producerProducts] = useState([
    { name: "Melancia", amount: "50 Unidades" },
    { name: "Cenoura", amount: "100 Quilos" },
    { name: "Tomate", amount: "40 Unidades" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", amount: "" });

  const [producerStatus, setProducerStatus] = useState("");

  const addProduct = (newProduct) => {
    if (newProduct.name.trim() !== "" && newProduct.amount.trim() !== "") {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } else {
      console.warn("Produto inválido");
    }
    setNewProduct({ name: "", amount: "" });
    setModalOpen(false);
  };

  const removeProduct = (indexToRemove) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleStatusChange = (status) => {
    setProducerStatus(status);
  };

  const handleResetStatus = () => {
    setProducerStatus("");
  };

  return (
    <>
      <Header user={"Comerciante"} />

      <main>
        <section className="container_merchant">
          <div className="card_merchant container_missing_products">
            <div className="header_card_merchant">
              <h2>Produtos em falta</h2>
              <button
                type="button"
                className="button-open-modal"
                onClick={() => setModalOpen(true)}
              >
                Adicionar Produto
              </button>
            </div>

            <div className="list_items_merchant">
              <ul className="card_remove_item">
                {products.map((product, index) => (
                  <li key={index} className="product-item">
                    <p>{product.name}</p>
                    <span>{product.amount}</span>
                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => removeProduct(index)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card de Produtores */}
          <div
            className={`card_merchant container_producer_deal ${
              producerStatus === "Em Negociação" ? "status-negotiating" : ""
            } ${producerStatus === "Finalizado" ? "status-finalized" : ""}`}
          >
            {producerStatus && (
              <div className="status-overlay">{producerStatus}</div>
            )}
            <div className="header_card_merchant">
              <h2>Produtores</h2>
              <div className="buttons_list_item_merchant">
                <button
                  className="button-negotiate"
                  onClick={() => handleStatusChange("Em Negociação")}
                >
                  Negociar
                </button>
                <button
                  className="button-finalize"
                  onClick={() => handleStatusChange("Finalizado")}
                >
                  Concluir
                </button>
              </div>
            </div>

            <div className="list_items_merchant">
              <ul>
                {producerProducts.map((product, index) => (
                  <li key={index} className="product-item">
                    <p>{product.name}</p>
                    <span>{product.amount}</span>
                  </li>
                ))}
              </ul>
              {producerStatus && (
                <button className="button-reset" onClick={handleResetStatus}>
                  Voltar
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={() => addProduct(newProduct)}
      >
        <h3>Adicionar Produto</h3>
        <label>
          Nome:
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </label>
        <label>
          Quantidade:
          <input
            type="text"
            value={newProduct.amount}
            onChange={(e) =>
              setNewProduct({ ...newProduct, amount: e.target.value })
            }
          />
        </label>
      </Modal>
    </>
  );
}

export default Merchant;
