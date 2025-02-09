import React from "react";

function CardForm() {
  return (
    <div>
      <form action="">
        <input
          type="tell"
          placeholder="카드번호"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          maxLength="3"
          required
        />
        <input type="button" value="입력" />
      </form>
    </div>
  );
}

export default CardForm;
