import date from "date-and-time";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ShowDeadLineForOrder } from "../../components/ShowDeadLineForOrder";
import { Button } from "../../components/UI/Button";
import { dateNow } from "../../helpers/dateNow";
import { timeNow } from "../../helpers/timeNow";
import { saveNewTimeForOrderAction } from "../../redux/actions/adminAction";
import { deadlineForOrderingSelector } from "../../redux/selectors";

const SelectDeadLineForOrderBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;
const SelectTimeBox = styled.div``;
const SelectTime = styled.select`
  padding: 1px 10px;
`;

const SelectDeadLineForOrder = () => {
  const dispatch = useDispatch();
  const deadlineForOrdering = useSelector(deadlineForOrderingSelector);

  const dateNowToday = `${dateNow()} ${timeNow()}`;
  const minTime = date.addMinutes(
    date.parse(dateNowToday, "DD.MM.YYYY HH:mm"),
    30
  );
  const initialMinutesArray = ["00", 15, 30, 45];
  const minHours = Number(date.format(minTime, "HH"));
  const minMinutes = Number(date.format(minTime, "mm"));
  const hoursArray = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].filter(
    (hour) => (minMinutes < 45 ? hour >= minHours : hour > minHours)
  );

  const [hours, setHours] = useState(hoursArray[0]);
  const [minutesArray, setMinutesArray] = useState(initialMinutesArray);
  const [minutes, setMinutes] = useState(minutesArray[0]);

  useEffect(() => {
    const _minutesArray = initialMinutesArray.filter((minute) =>
      Number(hours) === Number(minHours) ? minute >= minMinutes : minute
    );
    setMinutesArray(_minutesArray);
    setMinutes(_minutesArray[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours]);

  const setHoursHandler = ({ target: { value } }) => {
    setHours(value);
  };
  const setMinutesHandler = ({ target: { value } }) => {
    setMinutes(value);
  };

  const saveNewTimeHandler = () => {
    dispatch(
      saveNewTimeForOrderAction({ deadlineTime: `${hours}:${minutes}` })
    );
  };
  return (
    <>
      <ShowDeadLineForOrder />
      <SelectDeadLineForOrderBox>
        <SelectTimeBox>
          <SelectTime
            onChange={setHoursHandler}
            value={hours}
            children={hoursArray.map((hour) => (
              <option value={hour} key={hour} children={Number(hour)} />
            ))}
          />
          {` : `}
          <SelectTime
            onChange={setMinutesHandler}
            value={minutes}
            children={minutesArray.map((minute) => (
              <option
                value={Number(minute)}
                key={minute}
                children={Number(minute)}
              />
            ))}
          />
        </SelectTimeBox>
        <Button
          padding="5px"
          children={!deadlineForOrdering ? "Save Time" : "Save new Time"}
          onClick={saveNewTimeHandler}
        />
      </SelectDeadLineForOrderBox>
    </>
  );
};

export default SelectDeadLineForOrder;
