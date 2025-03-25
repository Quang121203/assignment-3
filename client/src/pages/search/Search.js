import axios from "../../config/axios";
import { useRef, useState } from "react";
import { toast } from 'react-toastify';

const Search = () => {
    const [student, setStudent] = useState();
    const sbd = useRef();

    const searchScore = async () => {
        if (sbd.current.value.trim() === "") {
            toast.error("Please input Registration Number");
            return;
        }

        const data = await axios.get(`student/${sbd.current.value}`);
        if (data && data.success) {
            setStudent(data.data);
        }
        else {
            setStudent();
        }
        sbd.current.value = '';
    }

    return (
        <div className="col-6 col-md-10 py-4 mx-auto">
            <div className="card mb-4 col-12 col-md-10 mx-auto">
                <div className="card-body">
                    <h2 className="fw-bold">User Registration</h2>
                    <div >
                        <label htmlFor="registration-number">Registration Number:</label>
                        <div className="d-md-flex col-12 col-md-6 my-2">
                            <input type="text" className="form-control me-3" id="registration-number" placeholder="Enter registration number" ref={sbd} />
                            <button className="btn btn-dark my-3 my-md-0" onClick={() => searchScore()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            {student && <div className="card mb-4 col-12 col-md-10 mx-auto">
                <div className="card-body">
                    <h2 className="fw-bold">Detailed Scores</h2>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>SBD</td>
                                <td>{student.sbd}</td>
                            </tr>
                            <tr>
                                <td>Toán</td>
                                <td>{student.toan>=0?student.toan:"#"}</td>
                            </tr>
                            <tr>
                                <td>Ngữ Văn</td>
                                <td>{student.ngu_van>=0?student.ngu_van:"#"}</td>
                            </tr>
                            <tr>
                                <td>Vật Lí</td>
                                <td>{student.vat_li>=0?student.vat_li:"#"}</td>
                            </tr>
                            <tr>
                                <td>Hóa Học</td>
                                <td>{student.hoa_hoc>=0?student.hoa_hoc:"#"}</td>
                            </tr>
                            <tr>
                                <td>Sinh Học</td>
                                <td>{student.sinh_hoc>=0?student.sinh_hoc:"#"}</td>
                            </tr>
                            <tr>
                                <td>Lịch Sử</td>
                                <td>{student.lich_su>=0?student.lich_su:"#"}</td>
                            </tr>
                            <tr>
                                <td>Địa Lí</td>
                                <td>{student.dia_li>=0?student.dia_li:"#"}</td>
                            </tr>
                            <tr>
                                <td>GDCD</td>
                                <td>{student.gdcd>=0?student.gdcd:"#"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>}
        </div>
    )
}

export default Search;