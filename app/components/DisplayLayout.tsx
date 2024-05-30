"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import { saveAs } from "file-saver";

const codeString = `
import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black">Tailwind Component</div>
        <p className="text-gray-500">This is a sample Tailwind component.</p>
      </div>
    </div>
  );
};

export default MyComponent;
`;

const DisplayLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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
    saveAs(blob, "MyComponent.tsx");
  };

  return (
    <div>
      <h1 className="text-2xl text-main-200 font-semibold pb-3">{title}</h1>
      <div className="border rounded-lg">
        <div className="flex justify-between items-center bg-grey-100 px-5 py-2 border-b border-b-grey-200 rounded-tl-lg rounded-tr-lg">
          <div>
            <div className="flex p-1 space-x-1 bg-grey-100 rounded-xl border border-grey-200">
              <button
                className={`w-fit py-2 flex items-center gap-x-1 px-3 text-sm leading-5 font-medium text-main-100 rounded-lg ${
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
                className={`w-fit py-2 px-3 flex items-center gap-x-1 text-sm leading-5 font-medium text-main-100 rounded-lg ${
                  activeTab === "code"
                    ? "bg-white shadow"
                    : "text-blue-100 hover:text-main-300"
                }`}
                onClick={() => setActiveTab("code")}
              >
                <Image
                  src="/code.svg"
                  width={20}
                  height={17}
                  alt="Code Icon"
                />
                Code
              </button>
            </div>
          </div>
          {activeTab === "preview" && (
            <div className="flex">
              <button
                className="flex items-center gap-x-1 text-main-200 py-1 px-2 hover:bg-gray-100 rounded-lg text-sm"
                type="button"
                onClick={() => setActiveView("mobile")}
              >
                <Image
                  src="/phone.svg"
                  width={12}
                  height={18}
                  alt="Tablet Icon"
                  className=""
                />
                <span>Phone</span>
              </button>
              <button
                className="flex gap-x-1 items-center text-main-200 py-1 px-2 hover:bg-gray-100 rounded-lg text-sm"
                type="button"
                onClick={() => setActiveView("tablet")}
              >
                <Image
                  src="/tablet.svg"
                  width={20}
                  height={14}
                  alt="Tablet Icon"
                  className=""
                />

                <span>Tablet</span>
              </button>
              <button
                className="flex gap-x-1 items-center text-main-200 py-1 px-2 hover:bg-gray-100 rounded-lg text-sm"
                type="button"
                onClick={() => setActiveView("desktop")}
              >
                <Image
                  src="/desktop.svg"
                  width={19}
                  height={17}
                  alt="Desktop Icon"
                />

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
        <div className="p-5">
        {activeTab === "preview" && (
          <div className={`preview-container ${activeView}`}>{children}</div>
        )}
        {activeTab === "code" && (
          <div className="bg-gray-800 p-4 rounded-xl shadow">
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
