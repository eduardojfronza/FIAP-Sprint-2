import { useState } from "react";
import Header from "../../../components/Header";
import ProductsChart from "../../../components/Chart";
import "../../../styles/Home/data-merchant.css";

function ProducerData() {
  const [setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    amount: "",
    month: "",
  });
  const [chartData, setChartData] = useState({
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [],
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.amount && newProduct.month) {
      setProducts((prevProducts) => [...prevProducts, { ...newProduct }]);

      const monthIndex = chartData.labels.indexOf(newProduct.month);
      if (monthIndex >= 0) {
        const existingDatasetIndex = chartData.datasets.findIndex(
          (dataset) => dataset.label === newProduct.name
        );

        let updatedDatasets;
        if (existingDatasetIndex >= 0) {
          updatedDatasets = [...chartData.datasets];
          updatedDatasets[existingDatasetIndex].data[monthIndex] +=
            parseInt(newProduct.amount, 10) || 0;
        } else {
          const newDataset = {
            label: newProduct.name,
            data: Array(12).fill(0),
            backgroundColor: `rgba(${Math.floor(
              Math.random() * 255
            )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
              Math.random() * 255
            )}, 0.6)`,
          };
          newDataset.data[monthIndex] = parseInt(newProduct.amount, 10) || 0;
          updatedDatasets = [...chartData.datasets, newDataset];
        }

        setChartData((prevData) => ({
          ...prevData,
          datasets: updatedDatasets,
        }));
      }

      setNewProduct({ name: "", amount: "", month: "" });
    } else {
      console.warn("Preencha todos os campos corretamente.");
    }
  };

  return (
    <>
      <Header user="Produtor" />
      <main>
        <section className="container_data">
          <div className="card_data container_sold_products">
            <div className="header_card_data">
              <h2>Produtos vendidos</h2>
              <div className="form-container">
                <input
                  type="text"
                  placeholder="Nome do Produto"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  className="input-field"
                />
                <input
                  type="number"
                  placeholder="Quantidade"
                  value={newProduct.amount}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, amount: e.target.value })
                  }
                  className="input-field"
                />
                <select
                  value={newProduct.month}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, month: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="">Selecione o mês</option>
                  {chartData.labels.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <button type="button" onClick={handleAddProduct} className="add-button">
                  Adicionar
                </button>
              </div>
            </div>
          </div>
          <div className="Chart_data">
            <ProductsChart chartData={chartData} />
          </div>
        </section>
      </main>
    </>
  );
}

export default ProducerData;
