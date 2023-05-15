

const OverlayCover = ({ sidebarInfo }) => {
  const { setIsSidebarActive, isSidebarActive } = sidebarInfo;
  // () => {}
  return (
    <div
      className={`absolute z-[45] left-0 top-[104px] w-full h-full bg-black/50 mdTab:hidden ${
        isSidebarActive ? "block" : "hidden"
      }`}
      onClick={() => {setIsSidebarActive(false)}}
    ></div>
  );
};

export default OverlayCover