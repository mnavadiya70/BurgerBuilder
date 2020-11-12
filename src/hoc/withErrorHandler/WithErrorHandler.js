import { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount(){
            this.request = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            });
            this.response = axios.interceptors.response.use(response => response, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.request);
            axios.interceptors.response.eject(this.response);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render() {
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modelClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }

    }
}

export default errorHandler;