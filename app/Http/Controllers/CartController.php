<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Product $product)
    {
        //
        $product->carts()->updateOrCreate([
            'user_id' => $request->user()->id,
            'product_id' => $product->id,
        ],[
            'user_id' => $request->user()->id,
            'price' => $product->price,
        ]);
        Cache::forget('carts_global_count');
        return redirect('/cart');
    }

    /**
     * Display the resource.
     */
    public function index(Request $request)
    {
        //
        $carts = Cart::query()
        ->with('product')
        ->whereBelongsTo($request->user())
        ->whereNull('paid_at')
        ->get();

        return inertia('Cart/index', [
            'carts' => CartResource::collection($carts),
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
        $cart->delete();
        Cache::forget('carts_global_count');
        return back();
    }
}
