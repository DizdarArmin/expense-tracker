import { useState } from "react";
export default function Input({ addExpense }) {
  const expenses = [
    "Rent",
    "Insurance",
    "Subscriptions",
    "Mobile",
    "Cinema",
    "Hygiene",
    "Food",
    "Petrol",
    "Car",
  ];
  const [expense, setExpense] = useState(expenses[0]);
  const [price, setPrice] = useState("");
  const [validation, setValidation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!price) {
      setValidation("Amount can't be empty");
    } else if (price <= 0) {
      setValidation("Amount can't be 0 or negative");
    } else {
      setValidation(" ");
      addExpense(expense, price);
      setPrice("");
      console.log(expense, price);
    }
  };
  const priceChange = (e) => {
    setPrice(e.target.value);
    console.log(e.target.value);
  };

  const expenseChange = (e) => {
    setExpense(e.target.value);
  };

  return (
    <div className="container-fluid input col-md-6">
      <h1 className="heading text-white">Expenses tracker</h1>
      <p className="text-white">Easy way of tracking monthly expenses.</p>
      <br />
      <form onSubmit={(e) => onSubmit(e)} className="form-check-inline row">
        <div className="form-group col">
          <label className="text-white" for="amount">
            Amount
          </label>
          <input
            autoComplete="on"
            id="amount"
            autoFocus={true}
            placeholder="1190 $"
            className="form-control col"
            type="number"
            value={price}
            onChange={(e) => priceChange(e)}
          />
        </div>
        <div className="form-group col">
          <label for="expense" className="text-white">
            Expense
          </label>
          <select
            id="expense"
            className="form-control"
            value={expense}
            onChange={(e) => expenseChange(e)}
          >
            {expenses.map((item) => (
              <option key={Math.random()}>{item}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-danger col">
          {" "}
          Add
        </button>
      </form>
      <label className="row text-white">{validation}</label>
    </div>
  );
}
