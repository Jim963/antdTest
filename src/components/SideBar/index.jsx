const SideBar = () => {
  const pageList = [
    { name: "查詢服務單", route: "" },
    { name: "營業報表", route: "" },
  ];
  return (
    <>
      <div className="h-screen w-[180px] xl:w-[240px]">
        <div className="flex flex-col items-start justify-start px-[30px] pt-[54px]">
          <div className="w-[120px] xl:w-[180px] h-[38px] xl:h-[56px] bg-slate-500 mb-[60px] font-bold text-center">
            Logo Img
          </div>

          {pageList.map((item) => {
            return (
              <div key={item.name} className="text-[16px] mb-[20px]">
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
