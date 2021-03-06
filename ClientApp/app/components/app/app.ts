import { PLATFORM } from 'aurelia-framework';
import { Router } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config, router) {
        config.title = 'BodyWork';

        config.options.pushState = true;
        
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home', 'home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter', 'counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'calculate',
            name: 'calculate',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../calculate/calculate', 'calculate'),
            nav: true,
            title: 'Workout calculating'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata', 'fetchdata'),
            nav: true,
            title: 'Fetch data'
        }, {
                route: 'registration',
                name: 'registration',
                settings: { icon: 'th-list' },
                moduleId: PLATFORM.moduleName('../registration/registration', 'registration'),
                nav: true,
                title: 'Registration'
            }
        ]);

        this.router = router;
    }
}
