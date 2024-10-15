"use client"

import React,{useState} from "react";

import ModernCV from "@/app/CvTemplate/template1";
import ClassicCV from "@/app/CvTemplate/template2";
import ProfessionalCV from "@/app/CvTemplate/template3";
import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@chakra-ui/react";





const CVPreview = () => {
  const selectedTemplate = localStorage.getItem("selectedTemplate");

  const getCVDocument = () => {
    switch (selectedTemplate) {
      case "template1":
        return <ModernCV />;
      case "template2":
        return <ClassicCV />;
      case "template3":
        return <ProfessionalCV />;
      default:
        return <ModernCV />;
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
  };
 

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center mb-[2%]">
          <div className="p-4  shadow-2xl">
            <ReactPDF.PDFViewer width="900" height="955" showToolbar={false}>
              {getCVDocument()}
            </ReactPDF.PDFViewer>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <Button
            colorScheme="green"
            size={"lg"}
            className="w-[25%]"
            isDisabled={isLoading}
          >
            <PDFDownloadLink
              document={getCVDocument()}
              fileName="cv.pdf"
              onClick={handleDownload}
            >
              {({  loading }) =>
                loading || isLoading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
