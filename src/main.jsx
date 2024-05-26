import React from 'react'
import ReactDOM from 'react-dom/client'
import PageTitle from './components/page-title.jsx'
import {PageForm} from './components/page-form.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageTitle />
    <PageForm />
  </React.StrictMode>,
)
