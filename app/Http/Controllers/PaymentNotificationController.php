<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Invoice;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class PaymentNotificationController extends Controller
{
    //
    public function handle(Request $request){
        //SHA512(order_id+status_code+gross_amount+ServerKey)
        $invoice = Invoice::where('order_id', $request->order_id)->first();
        $signature_key = hash('sha512', $invoice->order_id . $request->status_code . $invoice->gross_amount . '.00' . config('services.midtrans.server_key'));

        if ($signature_key == $request->signature_key){
            $invoice->update([
                'success_at' => $request->settlement_time,
            ]);

            $cartQuery = Cart::query()->whereIn('id', $invoice->cart_ids);

            $cartQuery->update([
                'paid_at' => $request->settlement_time,
            ]);

            $product_ids = $cartQuery->pluck('product_id');

            $user = User::find($invoice->user_id);

            $user->products()->attach($product_ids);

            Cache::forget('carts_global_count');
        }
    }
}
