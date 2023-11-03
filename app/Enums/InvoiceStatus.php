<?php


namespace App\Enums;

enum InvoiceStatus: string

{
    case Pending = 'pending';
    case Success = 'success';
    case Failed = 'failed';
}
