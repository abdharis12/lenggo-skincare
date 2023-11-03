<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\PaymentNotificationController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('products', ProductController::class);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');

})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::controller(CartController::class)->group(function () {
        Route::post('/carts/add-to-cart/{product:slug}', 'store')->name('cart.store');
        Route::get('/cart', 'index');
        Route::delete('/cart/delete/{cart}',  'destroy')->name('cart.delete');
    });

    Route::controller(InvoiceController::class)->group(function () {
        Route::post('/invoice', 'store');
        Route::get('/invoice/{invoice:order_id}','show')->name('invoice.show');
    });
});

Route::post('api/notification/handling', [PaymentNotificationController::class, 'handle'])->name('notification.handle');

require __DIR__.'/auth.php';
