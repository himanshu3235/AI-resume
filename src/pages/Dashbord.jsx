

// import React, { useEffect, useState } from "react";
// import {
//   UploadCloudIcon,
//   PlusIcon,
//   FilePenLineIcon,
//   TrashIcon,
//   PencilIcon,
//   X,
//   UploadCloud,
// } from "lucide-react";
// import { dummyResumeData } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const colors = [
//     "#D97706",
//     "#059669",
//     "#2563EB",
//     "#DB2777",
//     "#DC2626",
//     "#7C3AED",
//   ];

//   const [allResumes, setAllResumes] = useState([]);
//   const [showCreateResume, setShowCreateResume] = useState(false);
//   const [showUploadResume, setShowUploadResume] = useState(false);
//   const [title, setTitle] = useState("");
//   const [resume, setResume] = useState(null);

//   const navigate = useNavigate();

//   // Load all resumes
//   const loadAllResumes = async () => {
//     setAllResumes(dummyResumeData);
//   };

//   // Create Resume
//   const createResume = async (event) => {
//     event.preventDefault();

//     setShowCreateResume(false);
//     setTitle("");

//     navigate("/app/builder/res123");
//   };

//   // Upload Resume
//   const uploadResume = async (event) => {
//     event.preventDefault();

//     setShowUploadResume(false);
//     setTitle("");
//     setResume(null);

//     navigate("/app/builder/res123");
//   };

//   const editTitle = async(event)=>{
//     event.preventDefault()
//   }

//   // Load resumes when component loads
//   useEffect(() => {
//     loadAllResumes();
//   }, []);

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Welcome */}
//         <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
//           Welcome, Hero
//         </p>

//         {/* Top Buttons */}
//         <div className="flex gap-4 mb-6">
//           {/* Create Resume */}
//           <button
//             onClick={() => setShowCreateResume(true)}
//             className="w-36 h-44 bg-white flex flex-col items-center justify-center rounded-xl gap-3 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
//           >
//             <PlusIcon className="size-12 p-3 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full" />

//             <p className="text-sm font-medium text-slate-600 group-hover:text-indigo-600">
//               Create Resume
//             </p>
//           </button>

//           {/* Upload Existing */}
//           <button
//             onClick={() => setShowUploadResume(true)}
//             className="w-36 h-44 bg-white flex flex-col items-center justify-center rounded-xl gap-3 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300"
//           >
//             <UploadCloudIcon className="size-12 p-3 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-full" />

//             <p className="text-sm font-medium text-slate-600 group-hover:text-purple-600">
//               Upload Existing
//             </p>
//           </button>
//         </div>

//         <hr className="border-slate-300 my-6 sm:w-[305px]" />

//         {/* Resume Cards */}
//         <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
//           {allResumes.map((resume, index) => {
//             const baseColor = colors[index % colors.length];

//             return (
//               <button
//                 key={resume.id || index}
//                 onClick={()=> navigate(`/app/builder/${resume.id}`)} className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300"
//                 style={{
//                   background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
//                   borderColor: `${baseColor}40`,
//                 }}
//               >
//                 {/* Resume Icon */}
//                 <FilePenLineIcon
//                   className="size-7 group-hover:scale-105 transition-all"
//                   style={{ color: baseColor }}
//                 />

//                 {/* Resume Title */}
//                 <p
//                   className="text-sm text-center group-hover:scale-105 transition-all px-2"
//                   style={{ color: baseColor }}
//                 >
//                   {resume.title}
//                 </p>

//                 {/* Updated Date */}
//                 <p
//                   className="absolute bottom-1 text-[11px] text-center px-2"
//                   style={{ color: `${baseColor}90` }}
//                 >
//                   Updated on{" "}
//                   {new Date(resume.updatedAt).toLocaleDateString()}
//                 </p>

//                 {/* Edit / Delete */}
//                 <div className="absolute top-1 right-1 hidden group-hover:flex items-center gap-1">
//                   <TrashIcon className="size-7 p-1.5 hover:bg-white/50 rounded transition-colors" />

//                   <PencilIcon onClick={()=>{setEditResumeID(resume._id ); setTitle(resume.title)}} className="size-7 p-1.5 hover:bg-white/50 rounded transition-colors" />
//                 </div>
//               </button>
//             );
//           })}
//         </div>

//         {/* ================= CREATE RESUME MODAL ================= */}
//         {showCreateResume && (
//           <form
//             onSubmit={createResume}
//             onClick={() => setShowCreateResume(false)}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-slate-50 border border-slate-300 rounded-lg w-full max-w-sm p-6"
//             >
//               {/* Close Button */}
//               <X
//                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
//                 onClick={() => {
//                   setShowCreateResume(false);
//                   setTitle("");
//                 }}
//               />

//               <h2 className="text-xl font-bold mb-4">
//                 Create Resume
//               </h2>

//               {/* Resume Title */}
//               <input
//                 type="text"
//                 placeholder="Enter Resume Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:outline-none"
//                 required
//               />

//               {/* Create Button */}
//               <button
//                 type="submit"
//                 className="px-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
//               >
//                 Create Resume
//               </button>
//             </div>
//           </form>
//         )}

//         {/* ================= UPLOAD RESUME MODAL ================= */}
//         {showUploadResume && (
//           <form
//             onSubmit={uploadResume}
//             onClick={() => setShowUploadResume(false)}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-slate-50 border border-slate-300 rounded-lg w-full max-w-sm p-6"
//             >
//               {/* Close Button */}
//               <X
//                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
//                 onClick={() => {
//                   setShowUploadResume(false);
//                   setTitle("");
//                   setResume(null);
//                 }}
//               />

//               <h2 className="text-xl font-bold mb-4">
//                 Upload Resume
//               </h2>

//               {/* Resume Title */}
//               <input
//                 type="text"
//                 placeholder="Enter Resume Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:outline-none"
//                 required
//               />

//               {/* File Upload */}
//               <div>
//                 <label
//                   htmlFor="resume-input"
//                   className="block text-sm text-slate-700"
//                 >
//                   Select resume file

//                   {/* Hidden File Input */}
//                   <input
//                     id="resume-input"
//                     type="file"
//                     accept=".pdf,.doc,.docx"
//                     className="hidden"
//                     onChange={(e) => {
//                       setResume(e.target.files[0]);
//                     }}
//                   />

//                   {/* Upload Box */}
//                   <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
//                     {resume ? (
//                       <p className="text-green-700">
//                         {resume.name}
//                       </p>
//                     ) : (
//                       <>
//                         <UploadCloud className="size-14 stroke-1" />

//                         <p>Upload resume</p>
//                       </>
//                     )}
//                   </div>
//                 </label>
//                 <input type="file"  id="resume_input" accept="hidden"onChange={()=>setResume(e.target.files[0])} />
//               </div>

//               {/* Upload Button */}
//               <button
//                 type="submit"
//                 className="px-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
//               >
//                 Upload Resume
//               </button>
//             </div>
//           </form>
//         )}
//                 {editResumeID && (
//           <form
//             onSubmit={editTitle}
//             onClick={() => setEditResumeID('')}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//           >
//             <div
//               onClick={(e) => e.stopPropagation()}
//               className="relative bg-slate-50 border border-slate-300 rounded-lg w-full max-w-sm p-6"
//             >
//               {/* Close Button */}
//               <X
//                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
//                 onClick={() => {
//                   setEditResumeID('');
//                   setTitle("");
//                 }}
//               />

//               <h2 className="text-xl font-bold mb-4">
//                 Edit Resume Title
//               </h2>

//               {/* Resume Title */}
//               <input
//                 type="text"
//                 placeholder="Enter Resume Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:outline-none"
//                 required
//               />

//               {/* Create Button */}
//               <button
//                 type="submit"
//                 className="px-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
//               >
//                 Update
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import {
  UploadCloudIcon,
  PlusIcon,
  FilePenLineIcon,
  TrashIcon,
  PencilIcon,
  X,
  UploadCloud,
} from "lucide-react";
import { dummyResumeData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const colors = [
    "#D97706",
    "#059669",
    "#2563EB",
    "#DB2777",
    "#DC2626",
    "#7C3AED",
  ];

  // ================= STATES =================
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);

  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);

  // Edit resume state
  const [editResumeID, setEditResumeID] = useState("");

  const navigate = useNavigate();

  // ================= LOAD RESUMES =================
  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };

  // ================= CREATE RESUME =================
  const createResume = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    setShowCreateResume(false);

    // Reset title
    setTitle("");

    // Demo navigation
    navigate("/app/builder/res123");
  };

  // ================= UPLOAD RESUME =================
  const uploadResume = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    if (!resume) {
      alert("Please select a resume file.");
      return;
    }

    setShowUploadResume(false);

    // Reset fields
    setTitle("");
    setResume(null);

    // Demo navigation
    navigate("/app/builder/res123");
  };

  // ================= EDIT TITLE =================
  const editTitle = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    setAllResumes((prevResumes) =>
      prevResumes.map((item) => {
        const itemId = item.id || item._id;

        if (itemId === editResumeID) {
          return {
            ...item,
            title: title,
            updatedAt: new Date().toISOString(),
          };
        }

        return item;
      })
    );

    // Close modal
    setEditResumeID("");

    // Reset title
    setTitle("");
  };

  // ================= DELETE RESUME =================
  const deleteResume = (resumeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) {
      return;
    }

    setAllResumes((prevResumes) =>
      prevResumes.filter((item) => {
        const itemId = item.id || item._id;
        return itemId !== resumeId;
      })
    );
  };

  // ================= LOAD DATA =================
  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* ================= WELCOME ================= */}
        <p className="text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Welcome, Hero
        </p>

        {/* ================= TOP BUTTONS ================= */}
        <div className="flex gap-4 mb-6">

          {/* CREATE RESUME */}
          <button
            type="button"
            onClick={() => {
              setShowCreateResume(true);
              setTitle("");
            }}
            className="w-36 h-44 bg-white flex flex-col items-center justify-center rounded-xl gap-3 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
          >
            <PlusIcon className="size-12 p-3 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white rounded-full" />

            <p className="text-sm font-medium text-slate-600 group-hover:text-indigo-600">
              Create Resume
            </p>
          </button>

          {/* UPLOAD EXISTING */}
          <button
            type="button"
            onClick={() => {
              setShowUploadResume(true);
              setTitle("");
              setResume(null);
            }}
            className="w-36 h-44 bg-white flex flex-col items-center justify-center rounded-xl gap-3 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300"
          >
            <UploadCloudIcon className="size-12 p-3 bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-full" />

            <p className="text-sm font-medium text-slate-600 group-hover:text-purple-600">
              Upload Existing
            </p>
          </button>
        </div>

        <hr className="border-slate-300 my-6 sm:w-[305px]" />

        {/* ================= RESUME CARDS ================= */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
          {allResumes.map((resumeItem, index) => {
            const baseColor = colors[index % colors.length];

            const resumeId =
              resumeItem.id || resumeItem._id || index;

            return (
              <div
                key={resumeId}
                onClick={() =>
                  navigate(`/app/builder/${resumeId}`)
                }
                className="relative cursor-pointer w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: `${baseColor}40`,
                }}
              >
                {/* ================= RESUME ICON ================= */}
                <FilePenLineIcon
                  className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />

                {/* ================= RESUME TITLE ================= */}
                <p
                  className="text-sm text-center group-hover:scale-105 transition-all px-2"
                  style={{ color: baseColor }}
                >
                  {resumeItem.title}
                </p>

                {/* ================= UPDATED DATE ================= */}
                <p
                  className="absolute bottom-1 text-[11px] text-center px-2"
                  style={{ color: `${baseColor}90` }}
                >
                  Updated on{" "}
                  {resumeItem.updatedAt
                    ? new Date(
                        resumeItem.updatedAt
                      ).toLocaleDateString()
                    : "N/A"}
                </p>

                {/* ================= EDIT / DELETE ================= */}
                <div
                  className="absolute top-1 right-1 hidden group-hover:flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* DELETE */}
                  <button
                    type="button"
                    onClick={() => deleteResume(resumeId)}
                    className="p-0 bg-transparent border-0"
                  >
                    <TrashIcon className="size-7 p-1.5 hover:bg-white/50 rounded transition-colors" />
                  </button>

                  {/* EDIT */}
                  <button
                    type="button"
                    onClick={() => {
                      setEditResumeID(resumeId);
                      setTitle(resumeItem.title || "");
                    }}
                    className="p-0 bg-transparent border-0"
                  >
                    <PencilIcon className="size-7 p-1.5 hover:bg-white/50 rounded transition-colors" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===================================================== */}
        {/* CREATE RESUME MODAL */}
        {/* ===================================================== */}

        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => setShowCreateResume(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border border-slate-300 rounded-lg w-full max-w-sm p-6"
            >
              {/* CLOSE */}
              <button
                type="button"
                className="absolute top-4 right-4"
                onClick={() => {
                  setShowCreateResume(false);
                  setTitle("");
                }}
              >
                <X className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
              </button>

              <h2 className="text-xl font-bold mb-4">
                Create Resume
              </h2>

              {/* TITLE */}
              <input
                type="text"
                placeholder="Enter Resume Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:outline-none"
                required
              />

              {/* CREATE */}
              <button
                type="submit"
                className="px-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Create Resume
              </button>
            </div>
          </form>
        )}

        {/* ===================================================== */}
        {/* UPLOAD RESUME MODAL */}
        {/* ===================================================== */}

        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => setShowUploadResume(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border border-slate-300 rounded-lg w-full max-w-sm p-6"
            >
              {/* CLOSE */}
              <button
                type="button"
                className="absolute top-4 right-4"
                onClick={() => {
                  setShowUploadResume(false);
                  setTitle("");
                  setResume(null);
                }}
              >
                <X className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
              </button>

              <h2 className="text-xl font-bold mb-4">
                Upload Resume
              </h2>

              {/* TITLE */}
              <input
                type="text"
                placeholder="Enter Resume Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:outline-none"
                required
              />

              {/* FILE UPLOAD */}
              <div>
                <label
                  htmlFor="resume-input"
                  className="block text-sm text-slate-700"
                >
                  Select resume file

                  {/* HIDDEN FILE INPUT */}
                  <input
                    id="resume-input"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const selectedFile = e.target.files?.[0];

                      if (selectedFile) {
                        setResume(selectedFile);
                      }
                    }}
                  />

                  {/* UPLOAD BOX */}
                  <div className="flex flex-col items-center justify-center gap-2 border text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
                    {resume ? (
                      <p className="text-green-700 text-center break-all">
                        {resume.name}
                      </p>
                    ) : (
                      <>
                        <UploadCloud className="size-14 stroke-1" />

                        <p>Upload resume</p>
                      </>
                    )}
                  </div>
                </label>
              </div>

              {/* UPLOAD BUTTON */}
              <button
                type="submit"
                className="px-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Upload Resume
              </button>
            </div>
          </form>
        )}

        {/* ===================================================== */}
        {/* EDIT RESUME TITLE MODAL */}
        {/* ===================================================== */}

        {editResumeID && (
          <form
            onSubmit={editTitle}
            onClick={() => {
              setEditResumeID("");
              setTitle("");
            }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-slate-50 border border-slate-300 rounded-lg w-full max-w-sm p-6"
            >
              {/* CLOSE */}
              <button
                type="button"
                className="absolute top-4 right-4"
                onClick={() => {
                  setEditResumeID("");
                  setTitle("");
                }}
              >
                <X className="text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
              </button>

              <h2 className="text-xl font-bold mb-4">
                Edit Resume Title
              </h2>

              {/* TITLE */}
              <input
                type="text"
                placeholder="Enter Resume Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 mb-4 border rounded focus:border-green-600 focus:outline-none"
                required
              />

              {/* UPDATE */}
              <button
                type="submit"
                className="px-4 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Dashboard;