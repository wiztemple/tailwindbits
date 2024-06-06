"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import { saveAs } from "file-saver";
import PhoneIcon from "./icons/PhoneIcon";
import TabletIcon from "./icons/TabletIcon";
import DesktopIcon from "./icons/DesktopIcon";

const DisplayLayout = ({
  children,
  fileName,
  codeString,
}: {
  children: React.ReactNode;
  fileName: string;
  codeString: string;
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [activeView, setActiveView] = useState<"mobile" | "tablet" | "desktop">(
    "mobile"
  );
  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  const handleDownloadCode = () => {
    const blob = new Blob([codeString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${fileName}.tsx`);
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-between items-center border-b border-b-grey-200 rounded-tl-lg rounded-tr-lg pb-2">
          <div>
            <div className="flex p-1 space-x-1 bg-grey-100 rounded-xl">
              <button
                className={`w-fit py-1 flex items-center gap-x-1 px-3 text-sm leading-5 font-medium text-main-100 rounded-lg ${
                  activeTab === "preview"
                    ? "bg-white shadow"
                    : "  hover:text-main-300"
                }`}
                onClick={() => setActiveTab("preview")}
              >
                <Image
                  src="/eye.svg"
                  width={20}
                  height={15}
                  alt="Open Eye Icon"
                />
                Preview
              </button>
              <button
                className={`w-fit py-1 px-3 flex items-center gap-x-1 text-sm leading-5 font-medium text-main-100 rounded-lg ${
                  activeTab === "code"
                    ? "bg-white shadow"
                    : "text-blue-100 hover:text-main-300"
                }`}
                onClick={() => setActiveTab("code")}
              >
                <Image src="/code.svg" width={20} height={17} alt="Code Icon" />
                Code
              </button>
            </div>
          </div>
          {activeTab === "preview" && (
            <div className="flex p-1 space-x-1 bg-grey-100 rounded-xl">
              <button
                className={`flex items-center gap-x-1 py-1 px-2 hover:bg-white hover:shadow rounded-lg text-sm ${
                  activeView === "mobile"
                    ? "bg-white shadow text-main-200"
                    : "hover:text-main-300 text-slate-500"
                }`}
                type="button"
                onClick={() => setActiveView("mobile")}
              >
                <PhoneIcon fill="current" />
                <span>Phone</span>
              </button>
              <button
                className={`flex gap-x-1 items-center py-1 px-2 hover:bg-white hover:shadow rounded-lg text-sm ${
                  activeView === "tablet"
                    ? "bg-white shadow text-main-200"
                    : "text-slate-500 hover:text-main-200"
                }`}
                type="button"
                onClick={() => setActiveView("tablet")}
              >
                <TabletIcon stroke="current" />
                <span>Tablet</span>
              </button>
              <button
                className={`flex gap-x-1 items-center py-1 px-2 hover:bg-white hover:shadow rounded-lg text-sm ${
                  activeView === "desktop"
                    ? "bg-white shadow text-main-200"
                    : "text-slate-500 hover:text-main-200"
                }`}
                type="button"
                onClick={() => setActiveView("desktop")}
              >
                <DesktopIcon fill="current" />

                <span>Desktop</span>
              </button>
            </div>
          )}
          <div className="flex">
            <button
              onClick={handleCopyCode}
              className="hover:bg-gray-100 flex justify-center items-center w-10 h-10 rounded-xl"
              title="copy"
            >
              <Image src="/copy.svg" width={20} height={22} alt="Copy Icon" />
            </button>
            <button
              onClick={handleDownloadCode}
              className="hover:bg-gray-100 flex justify-center items-center w-10 h-10 rounded-xl"
              title="copy"
            >
              <Image
                src="/download.svg"
                width={16}
                height={20}
                alt="Download Icon"
              />
            </button>
          </div>
        </div>
        <div className="py-2">
          {activeTab === "preview" && (
            <div className={`preview-container ${activeView}`}>{children}</div>
          )}
          {activeTab === "code" && (
            <div className="bg-gray-800 p-4 rounded-xl shadow w-full overflow-scroll">
              <pre className="language-js">
                <code className="language-js">{codeString}</code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayLayout;
