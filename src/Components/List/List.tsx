import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import fakeData from "../../Store/fakeData";
import valueForRnd from "../../Store/valueForRnd";
import { useInView } from "react-intersection-observer";
import CsvButton from "./CsvButton";
const List: React.FC = observer(() => {
  let num = 1;
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && fakeData.data.length) {
      setTimeout(() => {
        fakeData.getData(
          valueForRnd.region,
          Number(valueForRnd.countOfError),
          Number(valueForRnd.seed),
          10
        );
      }, 2000);
    }
  }, [inView]);

  return (
    <div className="mt-5">
      <div className="flex items-center">
        <p className="mr-2 ml-2 w-32">№</p>
        <p className="w-72">Имя</p>
        <p className="w-80 ml-2 pl-8">Адрес</p>
        <p className="mr-9">Номер телефона</p>
        <CsvButton />
      </div>
      {fakeData.data.map((el) => {
        return (
          <div
            key={el.id}
            className="flex items-center border-teal-700 border-2 mt-2 h-9"
          >
            <p className="mr-2 ml-2 w-20">{num++}.</p>
            <p className="mr-2 ml-1 w-80">{el.fullName}</p>
            <p className="mr-2 ml-1  w-80">{el.addres}</p>
            <p className="mr-2 ml-1  w-80">{el.phone}</p>
          </div>
        );
      })}
      <div ref={ref}></div>
    </div>
  );
});
export default List;
