import fakeData from "../../Store/fakeData";

const CsvButton = () => {
  const downloadCsv = (): void => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "fullName     address     phone\n";
    fakeData.data.map((el) => {
      csvContent += `${el.fullName}     `;
      csvContent += `${el.addres}      `;
      csvContent += `${el.phone}\n`;
    });
    const encoderUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encoderUri);
    link.setAttribute("download", "file.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <>
      <button
        onClick={downloadCsv}
        className="rounded-xl w-64 h-9 bg-teal-700 text-white"
      >
        Скачать CSV
      </button>
    </>
  );
};

export default CsvButton;
