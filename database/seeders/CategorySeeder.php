<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => $name = 'Product Pack',
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'Single Product',
                'slug' => str($name)->slug(),
            ],
        ])->each(fn ($q) => Category::create($q));
    }
}
