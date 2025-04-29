import React from "react";
import Input from "../../../components/Inputs/Input";
import { LuPlus, LuTrash2 } from "react-icons/lu";

const CertificationsInfoForm = ({
  certifications,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Projects</h2>

      <div className="mt-4 flex flex-col gap-4 mb-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-gray-400/80 p-4 rounded-lg relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Certificate Title"
                placeholder="Full Stack Developer"
                value={cert.title || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "title", target.value)
                }
                type="text"
              />

              <Input
                label="Issuer"
                placeholder="Coursera / Google / etc."
                value={cert.issuer || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "issuer", target.value)
                }
                type="text"
              />

              <Input
                label="Year"
                placeholder="2025"
                value={cert.year || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "year", target.value)
                }
                type="text"
              />
            </div>

            {certifications.length > 1 && (
              <button
                type="button"
                className="absolute top-3 right-3 text-red-600 hover:underline text-sm cursor-pointer"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
          onClick={() =>
            addArrayItem({
              title: "",
              issuer: "",
              year: "",
            })
          }
        >
          <LuPlus /> Add Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationsInfoForm;
