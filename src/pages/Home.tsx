import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { Chip } from "@heroui/react";
import { CircleInfo } from "@gravity-ui/icons";

export default function Home() {
  const nav = useNavigate();
  function navigatePage(page: string) {
    nav(page);
  }
  const version = "v0.0.1";

  return (
    <>
      <div className={`flex items-center flex-col `}>
        <div className="flex flex-col justify-center items-center ml-40 me-40 mt-10">
          <button className="" onClick={() => navigatePage("/docs")}>
            <Chip
              size="md"
              variant="soft"
              color="accent"
              className="transition duration-400 ease-in-out hover:brightness-130 m-5"
            >
              <CircleInfo /> Astraea MC {version} First Release
            </Chip>
          </button>
          <h1 className="font-bold text-5xl text-center">
            A{" "}
            <span className="bg-linear-to-b to-indigo-600 from-cyan-400 bg-clip-text text-transparent">
              Beautiful
            </span>{" "}
            alternative to the base Minecraft launcher
          </h1>
          <p className={`w-155 text-center text-lg text-gray-400 font-DMSANS`}>
            Astraea MC aims to be an upgrade to the base Minecraft UI while
            keeping mods accessible and easy to install for the average user
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-3 ">
          <div>
            <Button
              variant="primary"
              className={"m-3 "}
              onClick={() => navigatePage("/downloads")}
            >
              Download
            </Button>
            <Button
              variant="outline"
              className={"m-3 "}
              onClick={() => navigatePage("/Docs")}
            >
              View Docs v0.0.1
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
