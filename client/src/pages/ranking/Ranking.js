import { useState, useEffect } from "react";
import axios from '../../config/axios';

const Ranking = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        const response = await axios.get('/student/top');
        setStudents(response.data);
    };

    return (
        <div className="p-4">
            <h2 className="font-bold mb-4">Ranking</h2>
            <table className="border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">SBD</th>
                        <th className="border p-2">Toán</th>
                        <th className="border p-2">Vật Lí</th>
                        <th className="border p-2">Hóa Học</th>
                        <th className="border p-2">Tổng điểm</th>
                    </tr>
                </thead>
                <tbody>
                    {students && students.map((student,index) => (
                        <tr key={index}>
                            <td className="border p-2">{student.sbd}</td>
                            <td className="border p-2">{student.toan}</td>
                            <td className="border p-2">{student.vat_li}</td>
                            <td className="border p-2">{student.hoa_hoc}</td>
                            <td className="border p-2">{student.total_score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ranking