

    export class Router {
        routes = {}

        add (routeName, page) {
            this.routes[routeName] = page
        }

        route(event) {
            event = event || window.event
            event.preventDefault()

            window.history.pushState({},"",event.target.href)
            
            this.handle()
        }

        handle() {
            const { pathname } = window.location
            const routes = this.routes[pathname] || this.routes[404]
            
            this.bg()

            fetch(routes).then(data => data.text()).then(html => document.querySelector('#main').innerHTML = html)
        }

        bg() {
            const { pathname } = window.location 
            const bodyBg = document.querySelector('body')

            if(pathname == '/') {
                bodyBg.classList.add('home')
                bodyBg.classList.remove('universe' || 'exploration')
            }
            else if(pathname == '/universe') {
                bodyBg.classList.add('universe')
                bodyBg.classList.remove('home' || 'exploration')
            }
            else if(pathname == '/exploration') {
                bodyBg.classList.add('exploration')
                bodyBg.classList.remove('home' || 'universe')           
            }
        }
    }