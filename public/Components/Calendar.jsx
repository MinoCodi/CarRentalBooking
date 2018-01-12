import React from "react";
import ReactDOM from "react-dom";

const now = new Date();

const monthNormilizer = () => {
  let m = now.getMonth();
  if (m < 9) {
    let n = m + 1;
    return (m = "0" + n);
  }
  if (m >= 9) {
    return (m = m + 1);
  }
};
const currentDate = `${now.getFullYear()}-${monthNormilizer()}-${now.getDate()}`;

const Calendar = () => {
  return (
    <div>
      Дата получения: <input type="date" name="date1" min={currentDate} />
      Дата возврата:
      <input type="date" id="date2" min={currentDate} />
      <button>Поиск</button>
      <li>Текущая дата - {currentDate}</li>
    </div>
  );
};

export default Calendar;
