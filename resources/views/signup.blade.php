<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <title>Amigos Sign-Up</title>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('manifest.webmanifest') }}" rel="manifest">
  </head>
  <body>
    <main>
      <div class="container">
        <div class="row justify-content-center" style="height: 100vh;">
          <div class="col-sm-8 align-self-center text-center">
            <div class="card" id="signup-form">
              <div class="card-header text-sm-center">{{ _('Sign-Up for Our Mailing List') }}</div>
              <div class="card-body">
                  <div class="row form-group">
                    <label for="first_name" class="col-sm-4 col-form-label text-sm-right">{{ _('First Name') }}</label>
                    <input id="first_name" name="first_name" type="text" class="form-control col-sm-6">
                  </div>
                  <div class="form-group row">
                    <label for="last_name" class="col-sm-4 col-form-label text-sm-right">{{ _('Last Name') }}</label>
                    <input id="last_name" name="last_name" type="text" class="form-control col-sm-6">
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-sm-4 col-form-label text-sm-right">{{ _('Email') }}</label>
                    <input id="email" name="email" type="text" class="form-control col-sm-6" >
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-4 text-sm-right"></div>
                    <button type="button" id="submit_button" class="btn btn-primary col-sm-6">{{ _('Sign Up!') }}</button>
                  </div>
              </div>
            </div>
            <div id="thank-you">Thank You!</div>
            <svg id="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256">
            <circle class="circle"
                cx="128"
                cy="128"
                r="128"
                fill="#4D5C7A"/>
                <path class="check"
                  d="M9 16l5 5 9-9"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2.5"
                  stroke-linecap="round">
                </svg>
              </div>
          </div>
        </div>
        </div>
    </main>
    <script src="/js/anime-master/lib/anime.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/checkAnimation.js"></script>
  </body>
</html>
