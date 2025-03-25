<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('sbd')->unique();
            $table->decimal('toan', 4, 2);
            $table->decimal('ngu_van', 4, 2);
            $table->decimal('vat_li', 4, 2);
            $table->decimal('hoa_hoc', 4, 2);
            $table->decimal('sinh_hoc', 4, 2);
            $table->decimal('lich_su', 4, 2);
            $table->decimal('dia_li', 4, 2);
            $table->decimal('gdcd', 4, 2);
            $table->string('ma_ngoai_ngu');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
