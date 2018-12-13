import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import PageTitle from '../../components/Layout/PageTitle';

class TodoApp extends Component {
    render() {
        return (
            <div className="container-fluid">
            <div className="mainWrap">
              <PageTitle titlePage="Todos App"/>
              <div className="mainWrap__content">
                  <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <AddTodo />
                            <VisibleTodoList />
                            <Footer />
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        );
    }
}

export default connect() (TodoApp);
