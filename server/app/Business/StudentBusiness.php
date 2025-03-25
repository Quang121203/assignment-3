<?php

namespace App\Business;

use App\Models\Student;
use Illuminate\Support\Facades\DB;

class StudentBusiness
{

    public static function getTop10(){
        return Student::select(
            'sbd',
            'toan',
            'vat_li',
            'hoa_hoc',
            DB::raw('(toan + vat_li + hoa_hoc) as total_score') 
        )
        ->orderBy('total_score', 'DESC') 
        ->limit(10)
        ->get();
    }

    public static function getStudent(){
        return Student::paginate(50); 
    }

    public static function checkScore(string $id)
    {
        return Student::where('sbd','=',$id)->first();
    }

    public static function scoreReport(string $subject)
    {
        $scoreLevels = [
            '>=8' => Student::where($subject, '>=', 8)->count(),
            '6-8' => Student::where($subject, '>=', 6)->where($subject, '<', 8)->count(),
            '4-6' => Student::where($subject, '>=', 4)->where($subject, '<', 6)->count(),
            '<4' => Student::where($subject, '<', 4)->count(),
        ];
        return $scoreLevels;
    }
}