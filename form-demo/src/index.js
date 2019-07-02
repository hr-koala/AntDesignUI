import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history';

import './index.css';
// import App from './App';

import WrappedHorizontalLoginForm from './view/WrappedHorizontalLoginForm.js'
import WrappedNormalLoginForm from './view/WrappedNormalLoginForm.js'
import WrappedRegistrationForm from './view/WrappedRegistrationForm.js'
import WrappedAdvancedSearchForm from './view/WrappedAdvancedSearchForm.js'
import CollectionsPage from './view/CollectionsPage.js'
import WrappedDynamicFieldSet from './view/WrappedDynamicFieldSet.js'
import WrappedTimeRelatedForm from './view/WrappedTimeRelatedForm.js'
import WrappedDemo from './view/WrappedDemo.js'
import StoreFormDataintoUpperComponent from './view/StoreFormDataintoUpperComponent.js'
import HandleFormDataManually from './view/HandleFormDataManually.js'
import CustomizedValidation from './view/CustomizedValidation.js'
import CoordinatedControls from './view/CoordinatedControls.js'
import FormLayout from './view/FormLayout.js'
import DynamicRules from './view/DynamicRules.js'
import ValidateOther from './view/ValidateOther.js'


import {LocaleProvider} from 'antd'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'

moment.locale('zh-cn')

const history = createBrowserHistory()

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
    <LocaleProvider locale = {zh_CN}>
        <Router history={history}>
          <Switch>
            <Route exact path ='/' component={WrappedNormalLoginForm} /> 
            <Route path="/horizontal" component={WrappedHorizontalLoginForm} /> 
            <Route path="/registration" component={WrappedRegistrationForm} />
            <Route path="/advancedsearch" component={WrappedAdvancedSearchForm} />
            <Route path="/collections" component={CollectionsPage} />
            <Route path="/dynamic" component={WrappedDynamicFieldSet } />
            <Route path="/timeRelatedt" component={WrappedTimeRelatedForm } /> 
            <Route path="/wrappedDemo" component={WrappedDemo } /> 
            <Route path='/storeForm' component={StoreFormDataintoUpperComponent} />
            <Route path='/handleForm' component={HandleFormDataManually} />
            <Route path='/customizedValidation' component={CustomizedValidation} />
            <Route path='/coordinated' component={CoordinatedControls} />
            <Route path='/formLayout' component={FormLayout} />
            <Route path='/dynamicRules' component={DynamicRules} />
            <Route path='/validateOther' component={ValidateOther} />

            
          </Switch>
        </Router>
        {/* <App /> */}
    </LocaleProvider>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
