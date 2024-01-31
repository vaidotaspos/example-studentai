import useApiData from "../../hooks/useApiData.jsx";
import {baseApiUrl} from "../../helper.js";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast";
import {useAuthContext} from "../../store/AuthCtxProvider.jsx";

export default function ListPage() {
    const [studentList, setStudentList] = useApiData(`${baseApiUrl}students`);

    const {isUserAdmin, isUserLoggedIn} = useAuthContext();

    const navigate = useNavigate();

    const deleteStudent = async (studentId) => {
        axios
            .delete(`${baseApiUrl}students/${studentId}`)
            .then((response) => {
                navigate('/list-student');
                toast.success(`Studentas ID: ${studentId} sėkmingai ištrintas!`);

                const list = studentList.filter(student => student.id !== studentId); //only remove the selected row
                setStudentList(list);
            })
            .catch((error) => {
                toast.error(error.response.data.error);
            })
    }

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-4xl'>Studentu sarasas</h1>

            <div className='mt-5'>
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-600 text-white">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Vardas</th>
                        <th className="px-4 py-2">Pavardė</th>
                        <th className="px-4 py-2">El. paštas</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((studentas) => (
                        <tr key={studentas.id} className="bg-gray-200">
                            <td className="border px-4 py-2">{studentas.id}</td>
                            <td className="border px-4 py-2">{studentas.firstname}</td>
                            <td className="border px-4 py-2">{studentas.lastname}</td>
                            <td className="border px-4 py-2">{studentas.email}</td>
                            <td className="border px-4 py-2">
                                { isUserLoggedIn && (
                                    <>
                                        <Link
                                            to={`/edit-student/${studentas.id}`}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Redaguoti
                                        </Link>

                                        { isUserAdmin && (
                                            <button
                                                className="bg-red-500 hover:bg-red-400 text-white font-bold ml-2 py-2 px-4 rounded"
                                                onClick={() => deleteStudent(studentas.id)}
                                            >
                                                Ištrinti
                                            </button>
                                        )}
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
