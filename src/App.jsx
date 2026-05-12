import { useState } from "react";
import html2pdf from "html2pdf.js";

export default function App() {
  const [form, setForm] = useState({
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
    submissionDate: "",
    align: "left",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const element = document.getElementById("cover");

    const opt = {
      margin: 0,
      filename: "assignment-cover.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-200 p-3 md:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* FORM */}
        <div className="bg-white p-5 rounded-2xl shadow-lg h-fit">
          <h1 className="text-3xl font-bold text-center mb-6">
            Assignment Cover Generator
          </h1>

          <div className="space-y-4">
            <Input
              name="courseTitle"
              placeholder="Course Title"
              value={form.courseTitle}
              onChange={handleChange}
            />

            <Input
              name="courseCode"
              placeholder="Course Code"
              value={form.courseCode}
              onChange={handleChange}
            />

            <Input
              name="assignmentNo"
              placeholder="Assignment Number"
              value={form.assignmentNo}
              onChange={handleChange}
            />

            <Input
              name="assignmentTitle"
              placeholder="Assignment Title"
              value={form.assignmentTitle}
              onChange={handleChange}
            />

            <Input
              name="studentName"
              placeholder="Student Name"
              value={form.studentName}
              onChange={handleChange}
            />

            <Input
              name="studentId"
              placeholder="Student ID"
              value={form.studentId}
              onChange={handleChange}
            />

            <Input
              name="program"
              placeholder="Program"
              value={form.program}
              onChange={handleChange}
            />

            <Input
              name="semester"
              placeholder="Semester"
              value={form.semester}
              onChange={handleChange}
            />

            <Input
              name="batch"
              placeholder="Batch"
              value={form.batch}
              onChange={handleChange}
            />

            <Input
              name="teacherName"
              placeholder="Teacher Name"
              value={form.teacherName}
              onChange={handleChange}
            />

            <Input
              name="teacherDesignation"
              placeholder="Teacher Designation"
              value={form.teacherDesignation}
              onChange={handleChange}
            />

            <Input
              name="department"
              placeholder="Department"
              value={form.department}
              onChange={handleChange}
            />

            <Input
              name="collegeName"
              placeholder="College Name"
              value={form.collegeName}
              onChange={handleChange}
            />

            <Input
              name="submissionDate"
              placeholder="Example: 4 May 2026"
              value={form.submissionDate}
              onChange={handleChange}
            />

            <select
              name="align"
              value={form.align}
              onChange={handleChange}
              className="w-full border rounded-lg p-4 text-lg"
            >
              <option value="left">Submitted Block Left</option>
              <option value="center">Submitted Block Center</option>
              <option value="right">Submitted Block Right</option>
            </select>

            <button
              onClick={generatePDF}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 rounded-xl"
            >
              Generate PDF
            </button>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="w-full overflow-x-auto flex justify-center">
          <div
            id="cover"
            className="bg-[#f5f5f5] relative shadow-lg overflow-hidden"
            style={{
              width: window.innerWidth < 768 ? "95vw" : "210mm",
              minHeight: window.innerWidth < 768 ? "135vw" : "297mm",
              padding: window.innerWidth < 768 ? "10px" : "20mm",
            }}
          >
            {/* BORDER */}
            <div className="absolute inset-3 border-[5px] border-black"></div>
            <div className="absolute inset-5 border-[2px] border-black"></div>

            <div className="relative z-10">

              {/* TOP */}
              <div className="text-center mt-8">
                <h1 className="text-3xl md:text-5xl font-bold">
                  {form.collegeName}
                </h1>

                <h2 className="text-lg md:text-2xl font-bold mt-4">
                  Department of Computer Science and Engineering (CSE)
                </h2>

                <img
                  src="/logo.png"
                  alt="logo"
                  className="w-32 md:w-48 mx-auto my-8"
                />

                <h3 className="text-lg md:text-2xl font-bold">
                  Course Title: {form.courseTitle},
                  Course Code: {form.courseCode}
                </h3>

                <h3 className="text-lg md:text-2xl font-bold mt-5">
                  Assignment #{form.assignmentNo},
                  Title: {form.assignmentTitle}
                </h3>
              </div>

              {/* SUBMITTED SECTION */}
              <div
                className={`mt-16 px-4 md:px-10 ${
                  form.align === "center"
                    ? "text-center"
                    : form.align === "right"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <div className="space-y-10">

                  {/* Submitted By */}
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-5">
                      SUBMITTED BY:
                    </h2>

                    <div className="text-lg md:text-2xl font-semibold leading-relaxed">
                      <p>Name: {form.studentName}</p>
                      <p>ID: {form.studentId}</p>
                      <p>Program: {form.program}</p>
                      <p>Semester: {form.semester}</p>
                      <p>Batch: {form.batch}</p>
                    </div>
                  </div>

                  {/* Submitted To */}
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-5">
                      SUBMITTED TO:
                    </h2>

                    <div className="text-lg md:text-2xl font-semibold leading-relaxed">
                      <p>{form.teacherName}</p>
                      <p>{form.teacherDesignation}</p>
                      <p>{form.department}</p>
                      <p>{form.collegeName}</p>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="pb-10">
                    <h2 className="text-xl md:text-3xl font-bold">
                      DATE OF SUBMISSION: {form.submissionDate}
                    </h2>
                  </div>

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
      className="w-full border border-gray-300 rounded-lg px-4 py-4 text-lg outline-none"
    />
  );
}