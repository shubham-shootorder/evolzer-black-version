"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import "react-tabs/style/react-tabs.css";

const TechStackAndTools = ({
  stacks,
  tools,
  framework,
  database,
  platform,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { label: "Stacks", content: stacks },
    { label: "Frameworks", content: framework },
    { label: "Tools", content: tools },
    { label: "Database", content: database },
    { label: "Platform", content: platform },
  ].filter((tab) => tab.content && tab.content.length > 0);

  // If there is no data, return null (hide the entire section)
  if (tabs.length === 0) return null;

  return (
    <div className="py-10 bg-black">
      <div className="container mx-auto py-10 px-4">
        <div className="w-full mb-6">
          <h2 className="text-3xl font-bold text-white text-center">
            Tech Stacks and Tools We Use
          </h2>
        </div>
        <div className="mt-6 pt-6">
          <Tabs
            selectedIndex={activeIndex}
            onSelect={(index) => setActiveIndex(index)}
          >
            <TabList className="flex flex-wrap justify-center space-x-4 border-gray-300">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  className={`!cursor-pointer !text-lg !font-bold !px-4 !py-2 transition-colors !duration-300 ${
                    activeIndex === index
                      ? "!bg-[#f15a29] !text-white"
                      : "text-white hover:text-[#f15a29]"
                  }`}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
            {tabs.map((tab, index) => (
              <TabPanel key={index}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto py-6">
                  {tab.content.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center justify-center"
                    >
                      <div className="bg-white w-[160px] h-[100px] flex items-center justify-center rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
                        <Link href={item.navigate}>
                          <Image
                            src={item.imageUrl}
                            width={80}
                            height={80}
                            alt={item.name}
                            className="object-contain"
                          />
                        </Link>
                      </div>
                      <div className="text-white text-center mt-3 font-medium">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TechStackAndTools;
