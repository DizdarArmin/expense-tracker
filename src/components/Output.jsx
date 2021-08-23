import { useState, useEffect } from "react";
export default function Output({ data, removeExpense }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [data]);

  const calculateTotal = () => {
    let totalExpense = 0;
    data.forEach((item) => {
      totalExpense = totalExpense + item[1];
    });
    setTotal(totalExpense);
  };
  return (
    <div className="container-fluid output col-md-6">
      {data.length > 0 && (
        <>
          {data.map((item, i) => (
            <div key={i} className="item row text-white ">
              <h5 className="col">{item[0]}</h5>
              <h5 className="col text-right">{item[1]}</h5>
              <div className="d-flex ml-1 align-items-center">
                <i
                  onClick={() => removeExpense(item[0])}
                  className="far fa-trash-alt"
                ></i>
              </div>

              {/*               <button onClick={() => removeExpense(item.expense)}>X</button> */}
            </div>
          ))}
          <div className="row total ">
            <h5 className="col text-left text-white font-weight-bold">
              Total:
            </h5>
            <h5 className="mr-3 col text-right text-white font-weight-bold">
              {total}
            </h5>
          </div>
        </>
      )}
    </div>
  );
}
