import React from "react";
import Input from "../../../components/Inputs/Input";

const ContactInfoForm = ({ contactInfo, updateSection }) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2">
          <Input
            label="Address"
            placeholder="Short Address"
            value={contactInfo?.location}
            onChange={({ target }) => updateSection("location", target.value)}
            type="text"
          />
        </div>

        <Input
          label="Email"
          placeholder="john@example.com"
          value={contactInfo.email}
          onChange={({ target }) => updateSection("email", target.value)}
          type="email"
        />

        <Input
          label="Phone Number"
          placeholder="987654321"
          value={contactInfo.phone}
          onChange={({ target }) => updateSection("phone", target.value)}
          type="email"
        />

        <Input
          label="LinkedIn"
          placeholder="https://linkedin.com/in/username"
          value={contactInfo.linkedin}
          onChange={({ target }) => updateSection("linkedin", target.value)}
          type="url"
        />

        <Input
          label="GitHub"
          placeholder="https://github.com/username"
          value={contactInfo.github}
          onChange={({ target }) => updateSection("github", target.value)}
          type="url"
        />

        <div className="md:col-span-2">
          <Input
            label="Portfolio / Website"
            placeholder="https://yourwebsite.com/"
            value={contactInfo.website}
            onChange={({ target }) => updateSection("website", target.value)}
            type="url"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
