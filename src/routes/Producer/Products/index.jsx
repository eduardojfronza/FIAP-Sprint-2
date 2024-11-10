import { useState } from "react";
import Modal from "../../../components/Modal";
import Header from "../../../components/Header";
import "../../../styles/Home/data-merchant.css";
import ProducerData from "../Data"; // Importando o ProducerData

function ProducerProducts() {
  // Estado para armazenar os produtos
  const [products, setProducts] = useState([
    { name: "Laranja", amount: "90 Unidades" },
    { name: "Maçã", amount: "30 Unidades" },
    { name: "Batata", amount: "30 Quilos" },
  ]);

  // Função para adicionar um novo produto
  const addProduct = (newProduct) => {
    if (newProduct.name.trim() !== "" && newProduct.amount.trim() !== "") {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } else {
      console.warn("Produto inválido");
    }
  };

  // Função para remover um produto pelo índice
  const removeProduct = (indexToRemove) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== indexToRemove)
    );
  };

  // Controle do modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", amount: "" });

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({ name: "", amount: "" });
    setModalOpen(false);
  };

  return (
    <>
      <Header user="Produtor" />
      <main className="container_data">
        <section className="data-info">
          <div className="card_data container_stock_products">
            <div className="header_card_data">
              <h2>Meus produtos</h2>
              <button
                type="button"
                className="button-open-modal"
                onClick={() => setModalOpen(true)}
              >
                Adicionar Produto
              </button>
            </div>

            <div className="list_items_data">
              <ul className="card_remove_item">
                {products.map((product, index) => (
                  <li key={index}>
                    <p>{product.name}</p>
                    <span>{product.amount}</span>
                    <button
                      type="button"
                      className="card_remove_item"
                      onClick={() => removeProduct(index)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onConfirm={handleAddProduct}
        >
          <h3>Adicionar Produto</h3>
          <label>
            Nome:
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
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
      </main>

      {/* Passando os produtos como props para o ProducerData */}
      <ProducerData products={products} />
    </>
  );
}

export default ProducerProducts;
