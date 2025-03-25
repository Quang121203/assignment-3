<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fileurls = fopen('public/diem_thi_thpt_2024.csv', 'r');
        $header = fgetcsv($fileurls);

        while (($row = fgetcsv($fileurls, 0, ',')) != FALSE) {
            $data = array_combine($header, $row);

            Student::create([
                'sbd' => $data['sbd'],
                'toan' => !empty($data['toan']) ? $data['toan'] : -1,
                'ngu_van' => !empty($data['ngu_van']) ? $data['ngu_van'] : -1,
                'vat_li' => !empty($data['vat_li']) ? $data['vat_li'] : -1,
                'hoa_hoc' => !empty($data['hoa_hoc']) ? $data['hoa_hoc'] : -1,
                'sinh_hoc' => !empty($data['sinh_hoc']) ? $data['sinh_hoc'] : -1,
                'lich_su' => !empty($data['lich_su']) ? $data['lich_su'] : -1,
                'dia_li' => !empty($data['dia_li']) ? $data['dia_li'] : -1,
                'gdcd' => !empty($data['gdcd']) ? $data['gdcd'] : -1,
                'ma_ngoai_ngu' => $data['ma_ngoai_ngu'] ?? '', 
            ]);
        }
    }
}
