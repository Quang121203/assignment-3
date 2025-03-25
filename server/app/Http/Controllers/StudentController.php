<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Business\StudentBusiness;

class StudentController extends Controller
{

    public function index()
    {
        $students = StudentBusiness::getStudent();
        
        return response()->json([
            'success' => true,
            'data' => $students, 
        ],200);
    }

    public function show(string $id)
    {
        $student = StudentBusiness::checkScore($id);
        if (!$student) {
            return response()->json([
                'success' => false,
                'message' => 'Student not found',
            ], 404);
        }

        return response()->json([
            'success'=>true,
            'data'=> $student
        ],200);
    }

    public function scoreReport(Request $request){
        $subject = $request->query('subject');
        $report = StudentBusiness::scoreReport($subject);
        return response()->json([
            'success'=>true,
            'data'=> $report
        ],200);
    }

    public function getTop10(){
        $students = StudentBusiness::getTop10();
        return response()->json([
            'success'=>true,
            'data'=> $students
        ],200);
    }
}
