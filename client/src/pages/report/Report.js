import { useEffect, useState } from "react";
import { PieChart } from '@mui/x-charts/PieChart';

import axios from "../../config/axios";

const Report = () => {
    const [subject, setSubject] = useState("toan");
    const [dataChart, setDataChart] = useState();
    const [load, setLoad] = useState(false);

    useEffect(() => {
        getReport(subject);
    }, [subject]);

    const getReport = async (subject) => {
        setLoad(true);
        const data = await axios.get(`/student/report?subject=${subject}`);
        setDataChart(data.data);
        setLoad(false);
    }

    const onChangeSuject = (e) => {
        setSubject(e.target.value);
    }

    return (
        <div className="p-4">
            <h2 className="font-bold mb-4">Report</h2>

            <div className="input-group mb-3 ">
                <select className="form-select " id="inputGroupSelect" defaultValue='toan' onChange={(e) => onChangeSuject(e)}>
                    <option value="toan">Toán</option>
                    <option value="ngu_van">Ngữ Văn</option>
                    <option value="vat_li">Vật Lí</option>
                    <option value="hoa_hoc">Hóa Học</option>
                    <option value="sinh_hoc">Sinh Học</option>
                    <option value="lich_su">Lịch Sử</option>
                    <option value="dia_li">Địa Lí</option>
                    <option value="gdcd">GDCD</option>
                </select>
                <label className="input-group-text" htmlFor="inputGroupSelect">Subjects</label>
            </div>

            {!load && dataChart && <PieChart
                series={[
                    {
                        data: [
                            { id: 1, label: '>=8 points', value: dataChart['>=8'] },
                            { id: 2, label: '8 points > && >=6 points', value: dataChart['6-8'] },
                            { id: 3, label: '6 points > && >= 4 points', value: dataChart['4-6'] },
                            { id: 4, label: '< 4 points', value: dataChart['<4'] },
                        ]
                    },
                ]}
                width={600}
                height={200}
            />}

            {load && <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}

        </div>
    )
}

export default Report;