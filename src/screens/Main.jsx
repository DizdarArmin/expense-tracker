import Input from "../components/Input";
import Output from "../components/Output";
import Chart from "../components/PieChart";
import { useState } from "react";
export default function Main() {
  const [data, setData] = useState([]);

  const addExpense = (name, price) => {
    let expenses = [...data];

    let item = expenses.find((item) => item[0] === name);
    if (!item) {
      expenses.push([name, parseInt(price)]);
    } else {
      item[1] = item[1] + parseInt(price);
    }
    setData(expenses);
  };

  const removeExpense = (name) => {
    let expenses = [...data];
    let result = expenses.filter((item) => item[0] !== name);
    setData(result);
  };
  return (
    <main>
      <section className="input-section">
        <Input addExpense={addExpense} />
      </section>
      <br />
      <section className="chart-section">
        <Chart data={data} />
      </section>
      <section className="output-section">
        <Output data={data} removeExpense={removeExpense} />
      </section>
    </main>
  );
}

/* "Rent",
"Insurance",
"Subscriptions",
"Mobile and Internet",
"Cinema",
"Hygiene products",
"Food",
"Petrol",
"Car", */
