import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { provideFirebaseApp } from "@angular/fire/app";


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const firebaseConfig = {
  apiKey: "AIzaSyAQy_3GIgHNxUF3HteNubgasuz6wJxrHNE",
  authDomain: "pf-rap.firebaseapp.com",
  projectId: "pf-rap",
  storageBucket: "pf-rap.appspot.com",
  messagingSenderId: "296975379675",
  appId: "1:296975379675:web:dd6f0f933e85d3c22070fe",
  measurementId: "G-L1LGCRHZDN"
}; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
  provideHttpClient(),provideRouter(routes), provideAnimationsAsync(), (
  [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ]
  )]
  };

