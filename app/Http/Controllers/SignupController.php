<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Signup;

class SignupController extends Controller
{
    public function saveSignup(Request $request) {

      $signup = Signup::create($request->all());
      $success = $signup->saveToConstantContact();

      return $success;

    }
}
