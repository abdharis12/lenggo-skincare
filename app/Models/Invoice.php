<?php

namespace App\Models;

use App\Enums\InvoiceStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $casts = [
        'cart_ids' => 'array',
        'payment_info' => 'array',
        'success_at' => 'datetime',
        'status' => InvoiceStatus::class,
    ];


}
