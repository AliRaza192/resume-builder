import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import DashboradLayout from "../../components/Layouts/DashboradLayout";
import { LuCirclePlus } from "react-icons/lu";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard";
import CreateResumeForm from "./CreateResumeForm";
import Model from "../../components/Model";

const Dashborad = () => {
  const [createOpenModel, setCreateOpenModel] = useState(false);
  const [allResumes, setAllResumes] = useState(null);

  const navigate = useNavigate();

  const fetchAllResumes = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      setAllResumes(response.data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    }
  };

  useEffect(() => {
    fetchAllResumes();
  }, []);

  return (
    <DashboradLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
        <div
          className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white rounded-lg border border-purple-100 hover:border-purple-300 hover:bg-purple-50/5 cursor-pointer"
          onClick={() => setCreateOpenModel(true)}
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-purple-200/60 ">
            <LuCirclePlus className="text-xl text-purple-500" />
          </div>

          <h3 className="font-medium text-gray-800">Add New Resume</h3>
        </div>

        {allResumes?.map((resume) => (
          <ResumeSummaryCard
            key={resume?._id}
            imageUrl={resume?.thumbnailLink || null}
            title={resume.title}
            lastUpdated={
              resume.updatedAt
                ? moment(resume.updatedAt).format("DD MMM YYYY")
                : ""
            }
            onSelect={() => navigate(`/resume/${resume?._id}`)}
          />
        ))}
      </div>

      <Model
        isOpen={createOpenModel}
        onClose={() => {
          setCreateOpenModel(false);
        }}
        hideHeader
      >
        <div>
          <CreateResumeForm />
        </div>
      </Model>
    </DashboradLayout>
  );
};

export default Dashborad;
