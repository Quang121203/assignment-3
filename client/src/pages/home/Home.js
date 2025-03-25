import { useEffect, useState } from 'react';
import axios from '../../config/axios';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [load, setLoad] = useState(false);
    useEffect(() => {
        getStudents(currentPage);
    }, [currentPage]);

    const getStudents = async (page) => {
        setLoad(true);
        const response = await axios.get(`/student?page=${page}`);
        setStudents(response.data.data);
        setLastPage(response.data.last_page);
        setLoad(false);
    };

    const onClickNextPage = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const onClickPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-4">
            <h2 className="font-bold mb-4">Student Dashboard</h2>

            <div className="my-4 d-flex justify-between align-items-center">
                <button
                    onClick={()=>onClickPrevPage()}
                    disabled={currentPage === 1}
                    className="btn btn-primary"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {lastPage}</span>
                <button
                    onClick={()=>onClickNextPage()}
                    disabled={currentPage === lastPage}
                    className="btn btn-primary"
                >
                    Next
                </button>
            </div>
            
            {!load && <table className="border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">SBD</th>
                        <th className="border p-2">Toán</th>
                        <th className="border p-2">Ngữ Văn</th>
                        <th className="border p-2">Vật Lí</th>
                        <th className="border p-2">Hóa Học</th>
                        <th className="border p-2">Sinh Học</th>
                        <th className="border p-2">Lịch Sử</th>
                        <th className="border p-2">Địa Lí</th>
                        <th className="border p-2">GDCD</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td className="border p-2">{student.sbd}</td>
                            <td className="border p-2">{student.toan >= 0 ? student.toan : "#"}</td>
                            <td className="border p-2">{student.ngu_van >= 0 ? student.ngu_van : "#"}</td>
                            <td className="border p-2">{student.vat_li >= 0 ? student.vat_li : "#"}</td>
                            <td className="border p-2">{student.hoa_hoc >= 0 ? student.hoa_hoc : "#"}</td>
                            <td className="border p-2">{student.sinh_hoc >= 0 ? student.sinh_hoc : "#"}</td>
                            <td className="border p-2">{student.lich_su >= 0 ? student.lich_su : "#"}</td>
                            <td className="border p-2">{student.dia_li >= 0 ? student.dia_li : "#"}</td>
                            <td className="border p-2">{student.gdcd >= 0 ? student.gdcd : "#"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}

            {load && <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
    )
}

export default Home;