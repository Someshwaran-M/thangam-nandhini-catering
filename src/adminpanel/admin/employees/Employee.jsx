import React, { useEffect, useState } from "react";

import {
  FiUsers,
  FiUserPlus,
  FiTrash2,
  FiPower,
} from "react-icons/fi";

const Employee = () => {
  const [workers, setWorkers] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [workerId, setWorkerId] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  useEffect(() => {
    loadWorkers();
  }, []);

  const loadWorkers = () => {
    const savedWorkers = JSON.parse(
      localStorage.getItem("workers") || "[]"
    );

    setWorkers(savedWorkers);
  };

  const handleCreateWorker = (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !name.trim() ||
      !workerId.trim() ||
      !password.trim()
    ) {
      setMessage("அனைத்து தகவல்களையும் உள்ளிடவும்.");
      return;
    }

    const existingWorkers = JSON.parse(
      localStorage.getItem("workers") || "[]"
    );

    const alreadyExists = existingWorkers.some(
      (worker) =>
        worker.workerId.toLowerCase() ===
        workerId.trim().toLowerCase()
    );

    if (alreadyExists) {
      setMessage("இந்த பணியாளர் ID ஏற்கனவே உள்ளது.");
      return;
    }

    const newWorker = {
      id: Date.now(),
      name: name.trim(),
      workerId: workerId.trim(),
      password: password,
      status: "Active",
      createdAt: new Date().toLocaleDateString("ta-IN"),
    };

    const updatedWorkers = [
      ...existingWorkers,
      newWorker,
    ];

    localStorage.setItem(
      "workers",
      JSON.stringify(updatedWorkers)
    );

    setWorkers(updatedWorkers);

    setName("");
    setWorkerId("");
    setPassword("");

    setShowForm(false);

    setMessage(
      "பணியாளர் வெற்றிகரமாக உருவாக்கப்பட்டார்."
    );
  };

  const toggleWorkerStatus = (id) => {
    const updatedWorkers = workers.map((worker) =>
      worker.id === id
        ? {
            ...worker,
            status:
              worker.status === "Active"
                ? "Inactive"
                : "Active",
          }
        : worker
    );

    setWorkers(updatedWorkers);

    localStorage.setItem(
      "workers",
      JSON.stringify(updatedWorkers)
    );
  };

  const deleteWorker = (id) => {
    const confirmDelete = window.confirm(
      "இந்த பணியாளரை நீக்க வேண்டுமா?"
    );

    if (!confirmDelete) return;

    const updatedWorkers = workers.filter(
      (worker) => worker.id !== id
    );

    setWorkers(updatedWorkers);

    localStorage.setItem(
      "workers",
      JSON.stringify(updatedWorkers)
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            பணியாளர் மேலாண்மை
          </h2>

          <p className="text-gray-500 mt-1">
            பணியாளர் கணக்குகளை உருவாக்கி நிர்வகிக்கவும்.
          </p>
        </div>

        <button
          onClick={() => {
            setShowForm(!showForm);
            setMessage("");
          }}
          className="flex items-center justify-center gap-2 px-5 py-2.5
          rounded-lg bg-[#7A0F12] text-white font-semibold
          hover:bg-[#5f0b0e] transition"
        >
          <FiUserPlus size={18} />
          புதிய பணியாளர்
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className="mb-5 rounded-lg bg-[#f2f7eb] border border-[#dce6cc] px-4 py-3">
          <p className="text-sm text-[#4F6B2A] font-semibold">
            {message}
          </p>
        </div>
      )}

      {/* Form */}
      {showForm && (
        <form
          onSubmit={handleCreateWorker}
          className="mb-6 p-5 rounded-xl bg-white border border-[#eadfcf] shadow-sm"
        >
          <h3 className="text-lg font-bold text-[#7A0F12] mb-4">
            புதிய பணியாளர்
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                பணியாளர் பெயர்
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="பெயரை உள்ளிடவும்"
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                பணியாளர் ID
              </label>

              <input
                type="text"
                value={workerId}
                onChange={(e) =>
                  setWorkerId(e.target.value)
                }
                placeholder="WRK001"
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                கடவுச்சொல்
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="கடவுச்சொல்"
                className="w-full h-11 px-4 border border-[#dfcba8]
                rounded-lg outline-none focus:border-[#7A0F12]"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 mt-5">

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-5 py-2.5 rounded-lg border border-gray-300
              text-gray-600 font-semibold"
            >
              ரத்து
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg
              bg-[#7A0F12] text-white font-semibold"
            >
              பணியாளரை உருவாக்கு
            </button>

          </div>
        </form>
      )}

      {/* Worker Table */}
      <div className="bg-white rounded-2xl border border-[#eadfcf] shadow-sm">

        <div className="p-5 border-b border-[#eadfcf]">
          <h3 className="text-lg font-bold text-gray-800">
            பணியாளர் பட்டியல்
          </h3>
        </div>

        <div className="p-5">

          {workers.length === 0 ? (
            <div className="text-center py-12">

              <FiUsers
                size={40}
                className="mx-auto text-gray-300 mb-3"
              />

              <p className="font-semibold text-gray-600">
                பணியாளர்கள் இல்லை
              </p>

              <p className="text-sm text-gray-400 mt-1">
                முதல் பணியாளரை உருவாக்கவும்.
              </p>

            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full min-w-[700px]">

                <thead>
                  <tr className="border-b border-[#eadfcf]">

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      பெயர்
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      Worker ID
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      நிலை
                    </th>

                    <th className="text-left py-3 px-3 text-sm font-bold text-gray-600">
                      உருவாக்கிய தேதி
                    </th>

                    <th className="text-right py-3 px-3 text-sm font-bold text-gray-600">
                      செயல்கள்
                    </th>

                  </tr>
                </thead>

                <tbody>
                  {workers.map((worker) => (
                    <tr
                      key={worker.id}
                      className="border-b border-gray-100 hover:bg-[#fffaf0]"
                    >

                      <td className="py-4 px-3 font-semibold text-gray-800">
                        {worker.name}
                      </td>

                      <td className="py-4 px-3 font-mono text-sm text-[#7A0F12]">
                        {worker.workerId}
                      </td>

                      <td className="py-4 px-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            worker.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {worker.status === "Active"
                            ? "செயலில்"
                            : "செயலிழந்தது"}
                        </span>
                      </td>

                      <td className="py-4 px-3 text-sm text-gray-500">
                        {worker.createdAt}
                      </td>

                      <td className="py-4 px-3">
                        <div className="flex justify-end gap-2">

                          <button
                            onClick={() =>
                              toggleWorkerStatus(worker.id)
                            }
                            className="p-2 rounded-lg bg-[#f2f7eb]
                            text-[#4F6B2A] hover:bg-[#e5efd8]"
                            title="Change Status"
                          >
                            <FiPower size={17} />
                          </button>

                          <button
                            onClick={() =>
                              deleteWorker(worker.id)
                            }
                            className="p-2 rounded-lg bg-red-50
                            text-red-600 hover:bg-red-100"
                            title="Delete"
                          >
                            <FiTrash2 size={17} />
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Employee;