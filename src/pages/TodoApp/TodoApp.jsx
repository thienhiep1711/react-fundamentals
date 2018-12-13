import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchTodos} from './actions/actions';
import Footer from './Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import PageTitle from '../../components/Layout/PageTitle';

class TodoApp extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTodos())
    }
    render() {
        const { error, loading, items } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
        return <div>Loading...</div>;
        }
        return (
            <div className="container-fluid">
            <div className="mainWrap">
              <PageTitle titlePage="Todos App"/>
              <div className="mainWrap__content">
                  <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <AddTodo/>
                            {
                                items && <VisibleTodoList items={items} />
                            }
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

const mapStateToProps = state => ({
    items: state.todos.items,
    loading: state.todos.loading,
    error: state.todos.error
  });
  

export default connect(mapStateToProps) (TodoApp);
