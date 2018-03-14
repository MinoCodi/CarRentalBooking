import React from "react";

const now = new Date();

const monthNormilizer = () => {
  let m = now.getMonth();
  if (m < 9) {
    const n = m + 1;
    return (m = `0${n}`);
  } else if (m >= 9) {
    return (m += 1);
  }
};

const currentDate = `${now.getFullYear()}-${monthNormilizer()}-${now.getDate()}`;

const Calendar = () => (
    <div>
      <form>
        Дата получения: <input type="date" id="date1" min={currentDate} />
        Дата возврата: <input type="date" id="date2" min={currentDate} />
      </form>
    </div>
  );

export default Calendar;
