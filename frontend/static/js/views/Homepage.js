import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(){
    super();
    this.setTitle("SELISE | Available Apps");
  }

  async getHtml(){
    return `
    <div class="container">
    <div class="toolbar">
      <div class="logo">
        <img class="logo-icon" src="https://az-cdn.selise.biz/selisecdn/cdn/arc2/selise-apps/selise-contacts.png">
      </div>
      <div style="display: flex; justify-content: space-around; align-items: center">

        <button class="toolbar-menu-btn dropdown" style="margin-right: 30px">
          <div class="select" style="width: 50px">
            <i class="fa-solid fa-xl fa-globe" style="width: 100%"></i>
          </div>
          
          <ul class="menu" style="width: 50px">
            <li><img class="flag" src="https://cdn.selise.biz/slpc/assets/images/flags/us.svg"></li>
            <li><img class="flag" src="https://cdn.selise.biz/slpc/assets/images/flags/de.svg"></li>
          </ul>
        </button>

        <button class="toolbar-menu-btn dropdown" style="margin-right: 30px">
          <div class="select" style="width: 50px">
            <i class="fa-brands fa-xl fa-app-store" style="width: 100%"></i>
          </div>
          <div class="menu my-apps">

            <p style="text-align: center; margin-bottom: 24px; font-size: 18px; font-weight: 400">My apps</p>

            <div style="display: flex; flex-direction: row; justify-content: start; align-items: center; flex-wrap: wrap;">

              <span class="app" style="display: flex; flex-direction: column">
                <i class="fa-regular fa-2x fa-user"></i>
                <span style="font-size: 14px; font-weight: 400">Contacts</span>
              </span>

              <span class="app" style="display: flex; flex-direction: column">
                <i class="fa-regular fa-2x fa-flag"></i>
                <span style="font-size: 14px; font-weight: 400">Calender</span>
              </span>

              <span class="app" style="display: flex; flex-direction: column">
                <i class="fa-solid fa-2x fa-pen-nib"></i>
                <span style="font-size: 14px; font-weight: 400">eSignature</span>
              </span>

              <span class="app" style="display: flex; flex-direction: column">
                <i class="fa-solid fa-2x fa-list-check"></i>
                <span style="font-size: 14px; font-weight: 400">Task Manager</span>
              </span>

              <span class="app" style="display: flex; flex-direction: column">
                <i class="fa-solid fa-2x fa-globe"></i>
                <span style="font-size: 14px; font-weight: 400">Language</span>
              </span>

            </div>


            <div style="margin-top: 16px; margin-bottom: 32px; margin-left: auto; margin-right: auto; width: 177px; padding: 8px 24px; border: 1.8px solid rgb(225, 222, 222);">
              <p style="font-size: 14px; color: #008AF1; font-weight: 800;">MANAGE APPS</p>
            </div>

            <div style="margin-top: 16px; margin-left: auto; margin-right: auto; width: 100%; padding: 8px 24px; border: 1.8px solid rgb(225, 222, 222);">
              <p style="font-size: 14px; color: #008AF1; font-weight: 800;">EXPLORE SELISE APPS MARKETPLACE</p>
            </div>

          </div>
          
        </button>


        <button class="my-acc-btn dropdown">
      
          <div class="select">
            <img style="width:93px; height:40px; margin-right: 15px;" src="https://az-cdn.selise.biz/selisecdn/cdn/arc2/selise-apps/selise-contacts.png">
            <img style="width: 30px; height: 30px" src="https://az-cdn.selise.biz/selisecdn/cdn/arc2/user.jpg">
          </div>
          
          <ul class="menu" style="width: 210px; top: 4em">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px">
              <img style="width: 30px; height: 30px; margin-right: 10px" src="https://az-cdn.selise.biz/selisecdn/cdn/arc2/user.jpg">
              <span style="display: flex; flex-direction:column; justify-content: center; align-items: start;">
                <span style="font-size: 14px; font-weight: 600">Hasib Ullah</span>
                <span style="font-size: 12px; font-weight: 400">hasib@yopmail.com</span>
              </span>
            </div>
            <hr style="display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0">

            <li style="text-align: left;">
              <i class="fa-regular fa-lg fa-user" style="margin-right: 10px"></i>
              My SELISE
            </li>
            <li style="text-align: left">
              <i class="fa-solid fa-lg fa-user-shield" style="margin-right: 10px"></i>
              Admin
            </li>
            <li style="text-align: left">
              <i class="fa-solid fa-lg fa-circle-info" style="margin-right: 10px"></i>
              About
            </li>
            <li style="text-align: left">
              <i class="fa-regular fa-lg fa-copyright" style="margin-right: 10px"></i>
              Privacy Policy
            </li>

            <hr style="display: block; height: 1px; border: 0; border-top: 1px solid #ccc; margin: 1em 0; padding: 0">

            <li style="text-align: left">
              <i class="fa-solid fa-lg fa-right-from-bracket" style="margin-right: 10px"></i>
              Logout
            </li>
          </ul>
         
        </button>
      </div>
    </div>

    <!-- <div class="dropdown">
      <div class="select">
        <span class="selected">Figma</span>
        <div class="caret"></div>
      </div>
      <ul class="menu">
        <li>Framer</li>
        <li>Sketch</li>
        <li>Invision Studio</li>
        <li class="active">Figma</li>
        <li>Adobe XD</li>
      </ul>
    </div> -->

  </div>
    `;
  }
}