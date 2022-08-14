import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("SELISE | Login");
  }

  async getHtml(){
    return `
    <div id="registration-container">

    <section class="registration-header">
      <div class="top-logo">
      </div>
      <p style="font-weight: 300">Don’t have a SELISE Apps account? <span class="sign-up-link">Sign Up Now</span></p>
    </section>

    <section class="registration-body">
      <div class="registration-form">
        <p class="form-header">Sign in to access SELISE Apps</p>

        <div class="input-contain">
          <input type="text" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" required>
          <label class="placeholder-text" for="fname" id="placeholder-fname">
             <div class="text">Email *</div>
          </label>
        </div>

        <div class="input-contain">
          <input type="password" id="fname" name="fname" autocomplete="off" value="" aria-labelledby="placeholder-fname" required>
          <label class="placeholder-text" for="fname" id="placeholder-fname">
             <div class="text">Password *</div>
          </label>
        </div>

        <div class="input-contain">
          <a type="button" class="submit-btn" href="/home" data-link>Sign In</a>
        </div>

        <div class="input-contain" style="text-align: center;"> 
          <a href="#" class="forgot-password-link">Forgot Password?</a>
        </div>

        <div class="input-contain">
          <p>By Signing In, you agree with our <span class="forgot-password-link" style="font-weight: 400">Terms and Conditions</span></p>
        </div>

        <div style="margin-top: 30px">
          <hr>
        </div>

        <div class="input-contain">
          <p>Sign in using</p>
          <div class="oAuth-links input-contain">
            <button class="oAuth-container">
              <span style="width: 24px; height: 24px">
                <img class="oAuth-logo" src="https://az-cdn.selise.biz/selisecdn/cdn/arc2/login/Google_logo.svg" alt="">
              </span>
            </button>
            <button class="oAuth-container">
              <span style="width: 24px; height: 24px">
                <img class="oAuth-logo" src="https://az-cdn.selise.biz/selisecdn/cdn/arc2/login/microsoft_logo.svg" alt="">
              </span>
            </button>
          </div>
        </div>
        

      </div>
    </section>


  </div>
    `;
  }
}