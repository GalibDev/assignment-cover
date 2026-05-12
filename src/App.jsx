import { useState } from "react";
import html2pdf from "html2pdf.js";

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

  const generatePDF = () => {
    const element = document.getElementById("cover-page");

    const opt = {
      margin: 0,
      filename: "assignment-cover.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  const alignClass =
    formData.align === "center"
      ? "mx-auto text-left"
      : formData.align === "right"
      ? "ml-auto text-left"
      : "mr-auto text-left";

  return (
    <div className="min-h-screen bg-gray-200 p-4">
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* FORM */}
        <div className="w-full lg:w-[350px] bg-white rounded-2xl shadow-xl p-6">
          <h1 className="text-4xl font-bold text-center mb-6">
            Fill Information
          </h1>

          <div className="space-y-4">
            <Input name="courseTitle" placeholder="Course Title" value={formData.courseTitle} onChange={handleChange} />
            <Input name="courseCode" placeholder="Course Code" value={formData.courseCode} onChange={handleChange} />
            <Input name="assignmentNo" placeholder="Assignment Number" value={formData.assignmentNo} onChange={handleChange} />
            <Input name="assignmentTitle" placeholder="Assignment Title" value={formData.assignmentTitle} onChange={handleChange} />
            <Input name="studentName" placeholder="Student Name" value={formData.studentName} onChange={handleChange} />
            <Input name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} />
            <Input name="program" placeholder="Program" value={formData.program} onChange={handleChange} />
            <Input name="semester" placeholder="Semester" value={formData.semester} onChange={handleChange} />
            <Input name="batch" placeholder="Batch" value={formData.batch} onChange={handleChange} />
            <Input name="teacherName" placeholder="Teacher Name" value={formData.teacherName} onChange={handleChange} />
            <Input name="teacherDesignation" placeholder="Teacher Designation" value={formData.teacherDesignation} onChange={handleChange} />
            <Input name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
            <Input name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange} />
            <Input name="date" placeholder="Example: 4 May 2026" value={formData.date} onChange={handleChange} />

            <select
              name="align"
              value={formData.align}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl p-4 text-lg bg-white"
            >
              <option value="left">Submitted Block Left</option>
              <option value="center">Submitted Block Center</option>
              <option value="right">Submitted Block Right</option>
            </select>

            <button
              onClick={generatePDF}
              className="w-full bg-green-600 text-white font-bold text-2xl py-4 rounded-xl"
            >
              Generate PDF
            </button>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="w-full flex justify-center">
          <div className="preview-box">
            <div id="cover-page" className="cover-page">
              <div className="cover-border">

                <h1 className="college-title">
                  {formData.collegeName || "Shyamoli Engineering College"}
                </h1>

                <h2 className="department-title">
                  Department of Computer Science and Engineering (CSE)
                </h2>

                <img src="/logo.png" alt="logo" className="college-logo" />

                <div className="course-section">
                  <h3>
                    Course Title: {formData.courseTitle || "Linear Algebra"}, Course Code: {formData.courseCode || "MATH-2105"}
                  </h3>

                  <h3>
                    Assignment #{formData.assignmentNo || "01"}, Title: {formData.assignmentTitle || "Matrix"}
                  </h3>
                </div>

                <div className={`submitted-block ${alignClass}`}>
                  <h3>SUBMITTED BY:</h3>

                  <p>
                    Name: {formData.studentName || "Tanjila Khanam Tamim"} <br />
                    ID: {formData.studentId || "49/24|CSE-22"} <br />
                    Program: {formData.program || "B.Sc. in CSE"} <br />
                    Semester: {formData.semester || "3rd"} <br />
                    Batch: {formData.batch || "5th"}
                  </p>

                  <h3 className="submitted-to">SUBMITTED TO:</h3>

                  <p>
                    {formData.teacherName || "Khalid Bin Kaysar"} <br />
                    {formData.teacherDesignation || "Lecturer, Mathematics"} <br />
                    {formData.department || "Dept. Of Related Subjects"} <br />
                    {formData.collegeName || "Shyamoli Engineering College"}
                  </p>

                  <h3 className="date-text">
                    DATE OF SUBMISSION:{" "}
                    <span>{formData.date || "4 May 2026"}</span>
                  </h3>
                </div>

              </div>
            </div>
          </div>
        </div>

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
      className="w-full border border-gray-300 rounded-xl p-4 text-lg outline-none"
    />
  );
}