import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import Registration from "./views/Registration.js";
import Homepage from "./views/Homepage.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
}


const router = async () => {
  const routes = [
    { path: "/", view: Registration },
    { path: "/home", view: Homepage },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings }
  ];

  // Test each route for potential match

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname == route.path
    }
  })

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if(!match){
    match = {
      route: routes[0],
      isMatch: true
    }
  }

  const view = new match.route.view();

  document.querySelector('body').innerHTML = await view.getHtml();
};

window.addEventListener('popstate', router); // trigger router for browser back or forward button click events

document.addEventListener('DOMContentLoaded', ()=>{
  document.body.addEventListener('click', e => {
    if(e.target.matches("[data-link]")){
      e.preventDefault();
      navigateTo(e.target.href); 
    }
  })
  router();
})

window.addEventListener("DOMContentLoaded", function() {

  let input_elements = document.querySelectorAll("input");

  if(input_elements.length > 0){

    input_elements.forEach(inputElement=>{
      inputElement.addEventListener("keyup", () => {
        inputElement.setAttribute("value", inputElement.value);
    })
    })
  }


  const dropdowns = document.querySelectorAll('.dropdown');

  if(dropdowns.length > 0){
    dropdowns.forEach(dropdown=>{
      const select = dropdown.querySelector('.select');
      // const caret = dropdown.querySelector('.caret');
      const menu = dropdown.querySelector('.menu');
      const options = dropdown.querySelectorAll('.menu li');
      // const selected = dropdown.querySelector('.selected');
    
      select.addEventListener('click', ()=>{
        select.classList.toggle('select-clicked');
        // caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
      })
    
      options.forEach(option=> {
        option.addEventListener('click', ()=>{
          console.log('here');
          // selected.innerText = option.innerText;
          select.classList.remove('select-clicked');
          // caret.classList.remove('caret-rotate');
          menu.classList.remove('menu-open');
          
          // options.forEach(option=>{
          //   option.classList.remove('active');
          // })
    
          // option.classList.add('active');
        })
      })
    })
  }


}, false);

