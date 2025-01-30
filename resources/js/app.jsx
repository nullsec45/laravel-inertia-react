import './bootstrap';
import '../css/app.css'

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layouts from "@/Layouts/Layouts";

createInertiaApp({
  title:title => (title) ?`${title} - Laravel Inertia React` : '',
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`];

    page.default.layout=page.default.layout || ((page) => <Layouts childer={page}/>);

    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress:{
    color:'#fff',
    showSpinner:true
  }
})