const routes = {
    '/': home,
    '/recipes': recipes,
    '/shopping-list': shoppingList,
    '/contact': contact
}

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const navigate = (pathname) => {
    //{state, title, url}
    window.history.pushState(
        {},
        pathname,
        window.location.origin+pathname
    );
    rootDiv.innerHTML = routes[pathname];
}

window.onpopstate = () => {
    console.log(`location: ${window.location}, state: ${JSON.stringify(event.state)}`);
    rootDiv.innerHTML = routes[window.location.pathname];
}