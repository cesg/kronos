<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/w';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('github')->stateless()->redirect()->getTargetUrl();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        $userAuth = Socialite::driver('github')->stateless()->user();

        $user = User::firstOrNew([
           'email' => $userAuth->getEmail(),
        ]);

        if (!$user->exists()) {
            $user->name = $userAuth->getName();
            $user->password = bcrypt('secret123');
        }
        $user->api_token = md5("$user->email");
        $user->save();

        $this->logout(request());
        $this->guard()->loginUsingId($user->id);
        return redirect($this->redirectTo);
    }
}
