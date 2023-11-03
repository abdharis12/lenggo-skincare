<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        collect([
            [
                'name' => 'Abdul Haris',
                'email' => 'haris@ahda.my.id',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Anggun Purwaningsih',
                'email' => 'anggun@ahda.my.id',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
