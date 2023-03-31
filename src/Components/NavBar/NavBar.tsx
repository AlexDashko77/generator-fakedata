import React from "react";
import valueForRnd from "../../Store/valueForRnd";
import fakeData from "../../Store/fakeData";
import { observer } from "mobx-react-lite";

const NavBar: React.FC = observer(() => {
  return (
    <>
      <div className="flex mt-2 gap-6 justify-center items-center">
        <select className="bg-transparent">
          <option onClick={(e) => valueForRnd.changeRegion(e)} value="fr">
            France
          </option>
          <option onClick={(e) => valueForRnd.changeRegion(e)} value="en">
            England
          </option>
          <option onClick={(e) => valueForRnd.changeRegion(e)} value="de">
            Denmark
          </option>
        </select>
        <input
          type="range"
          min={0}
          max={10}
          onChange={(e) => valueForRnd.changeCountOfError(e)}
          value={valueForRnd.countOfError}
        />
        <input
          value={valueForRnd.countOfError}
          onChange={(e) => valueForRnd.changeCountOfError(e)}
          className="rounded-xl w-64 p-1 border-2 outline-none border-teal-700"
          type="text"
          placeholder="Введите количество ошибок"
        />
        <input
          value={valueForRnd.seed}
          onChange={(e) => valueForRnd.changeSeed(e)}
          className="rounded-xl w-64 p-1 border-2 outline-none border-teal-700"
          type="text"
          placeholder="Введите seed"
        />
        <button
          onClick={() => {
            fakeData.getData(
              valueForRnd.region,
              Number(valueForRnd.countOfError),
              Number(valueForRnd.seed),
              20
            );
          }}
          className="rounded-xl w-64 h-9 bg-teal-700 text-white"
        >
          Сгенерировать
        </button>
        <button
          onClick={() => fakeData.clearData()}
          className="rounded-xl w-64 h-9 bg-teal-700 text-white"
        >
          Очистить
        </button>
      </div>
    </>
  );
});
export default NavBar;
