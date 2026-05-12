import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseCode: "",
    assignmentNo: "",
    assignmentTitle: "",
    studentName: "",
    studentId: "",
    program: "",
    semester: "",
    batch: "",
    teacherName: "",
    teacherDesignation: "",
    department: "",
    collegeName: "Shyamoli Engineering College",
    date: "",
    align: "left",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const alignmentClass =
    formData.align === "center"
      ? "items-center text-center"
      : formData.align === "right"
      ? "items-end text-right"
      : "items-start text-left";

  return (
    <div className="min-h-screen bg-gray-200 p-3 md:p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Assignment Cover Generator
      </h1>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* FORM */}
        <div className="w-full xl:w-[350px] bg-white rounded-2xl shadow-lg p-5 h-fit">
          <div className="space-y-4">
            <Input
              name="courseTitle"
              placeholder="Course Title"
              value={formData.courseTitle}
              onChange={handleChange}
            />

            <Input
              name="courseCode"
              placeholder="Course Code"
              value={formData.courseCode}
              onChange={handleChange}
            />

            <Input
              name="assignmentNo"
              placeholder="Assignment Number"
              value={formData.assignmentNo}
              onChange={handleChange}
            />

            <Input
              name="assignmentTitle"
              placeholder="Assignment Title"
              value={formData.assignmentTitle}
              onChange={handleChange}
            />

            <Input
              name="studentName"
              placeholder="Student Name"
              value={formData.studentName}
              onChange={handleChange}
            />

            <Input
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
            />

            <Input
              name="program"
              placeholder="Program"
              value={formData.program}
              onChange={handleChange}
            />

            <Input
              name="semester"
              placeholder="Semester"
              value={formData.semester}
              onChange={handleChange}
            />

            <Input
              name="batch"
              placeholder="Batch"
              value={formData.batch}
              onChange={handleChange}
            />

            <Input
              name="teacherName"
              placeholder="Teacher Name"
              value={formData.teacherName}
              onChange={handleChange}
            />

            <Input
              name="teacherDesignation"
              placeholder="Teacher Designation"
              value={formData.teacherDesignation}
              onChange={handleChange}
            />

            <Input
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />

            <Input
              name="collegeName"
              placeholder="College Name"
              value={formData.collegeName}
              onChange={handleChange}
            />

            <Input
              name="date"
              placeholder="Example: 4 May 2026"
              value={formData.date}
              onChange={handleChange}
            />

            <select
              name="align"
              value={formData.align}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 text-lg"
            >
              <option value="left">Submitted Block Left</option>
              <option value="center">Submitted Block Center</option>
              <option value="right">Submitted Block Right</option>
            </select>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-2xl py-4 rounded-xl">
              Generate PDF
            </button>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="flex-1 overflow-hidden">
          <div className="w-full overflow-x-auto">
            <div className="flex justify-center min-w-full">
              <div
                className="
                  bg-white
                  shadow-xl
                  relative
                  border-[6px]
                  border-black
                  p-4
                  md:p-8
                  lg:p-16
                "
                style={{
                  width: "210mm",
                  minHeight: "297mm",
                  maxWidth: "100%",
                }}
              >
                {/* INNER BORDER */}
                <div className="absolute inset-2 border-[3px] border-black pointer-events-none"></div>

                {/* CONTENT */}
                <div className="relative z-10">
                  <h1 className="text-2xl md:text-5xl font-bold text-center">
                    {formData.collegeName || "Shyamoli Engineering College"}
                  </h1>

                  <h2 className="text-lg md:text-3xl font-bold text-center mt-5">
                    Department of Computer Science and Engineering (CSE)
                  </h2>

                  <img
                    src="/logo.png"
                    alt="logo"
                    className="w-32 md:w-52 mx-auto my-8 md:my-12"
                  />

                  <h2 className="text-lg md:text-3xl font-bold text-center">
                    Course Title:{" "}
                    {formData.courseTitle || "Linear Algebra"},
                    Course Code: {formData.courseCode || "MATH-2105"}
                  </h2>

                  <h2 className="text-lg md:text-3xl font-bold text-center mt-5">
                    Assignment #{formData.assignmentNo || "01"},
                    Title: {formData.assignmentTitle || "Matrix"}
                  </h2>

                  {/* SUBMITTED SECTION */}
                  <div
                    className={`flex flex-col ${alignmentClass} mt-16 md:mt-24`}
                  >
                    <div className="w-full md:w-[60%]">
                      <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        SUBMITTED BY:
                      </h2>

                      <div className="text-lg md:text-2xl font-semibold leading-relaxed">
                        <p>
                          Name:{" "}
                          {formData.studentName ||
                            "Tanjila Khanam Tamim"}
                        </p>

                        <p>
                          ID: {formData.studentId || "49/24/CSE-22"}
                        </p>

                        <p>
                          Program:{" "}
                          {formData.program || "B.Sc. in CSE"}
                        </p>

                        <p>
                          Semester: {formData.semester || "3rd"}
                        </p>

                        <p>Batch: {formData.batch || "5th"}</p>
                      </div>

                      <h2 className="text-2xl md:text-4xl font-bold mt-14 mb-6">
                        SUBMITTED TO:
                      </h2>

                      <div className="text-lg md:text-2xl font-semibold leading-relaxed">
                        <p>
                          {formData.teacherName ||
                            "Khalid Bin Kaysar"}
                        </p>

                        <p>
                          {formData.teacherDesignation ||
                            "Lecturer, Mathematics"}
                        </p>

                        <p>
                          {formData.department ||
                            "Dept. Of Related Subjects"}
                        </p>

                        <p>
                          {formData.collegeName ||
                            "Shyamoli Engineering College"}
                        </p>
                      </div>

                      <h2 className="text-2xl md:text-4xl font-bold mt-20">
                        DATE OF SUBMISSION:{" "}
                        <span className="font-medium">
                          {formData.date || "4 May 2026"}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END PREVIEW */}
      </div>
    </div>
  );
}

function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-xl p-4 text-lg outline-none focus:border-green-500"
    />
  );
}