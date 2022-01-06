import React, { Component } from 'react';
import Input  from './components/Input';
import Dropdown from './components/Dropdown';
import RadioGroup from './components/RadioGroup';
import Checkbox from './components/Checkbox';
import TextArea from './components/Textarea';
import Button from './components/Button';
import userDate from './db.json';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            name : '',
            age: '',
            gender: 'male',
            selectedPets: [],
            address: ''
        }
    }

    handleChange = (event) => {
        if(event.target.name === 'security'){
            if(this.state.selectedPets.indexOf(event.target.value) === -1){
                let selectedPetsNew = [...this.state.selectedPets, event.target.value];
                this.setState({
                    selectedPets: selectedPetsNew
                })
            }
            
        } else {
            this.setState({
                [event.target.name] : event.target.value
            })
        }
        
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const formPayload = {
            name : this.state.name,
            age : this.state.age,
            gender: this.state.gender,
            security: this.state.selectedPets,
            address: this.state.address
        }

        console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(event);

    }

    handleClearForm = (event) => {
        event.preventDefault();
		this.setState({
			name : '',
            age: '',
            gender: 'male',
            selectedPets: [],
            address: ''
		});

    }


    render() {
        return (
            <div>
                <h3>Employee Registration form</h3>
                <div>
                <Input 
                        title={'Name: '}
                        name={'name'}
                        placeholder = {'Enter Name'}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <br />

                <div>
                <Dropdown 
                        title={'Age: '}
                        name={'age'}
                        placeholder = {'Please select age'}
                        value={this.state.age}
                        options={userDate.ageOptions}
                        onChange={this.handleChange}
                    />
                </div>
                <br />

                <div>
                    <RadioGroup 
                        title = {'Gender : '}
                        type={'radio'}
                        name={'gender'}
                        onChange={this.handleChange}
                        options={userDate.siblingOptions}
                        selected={this.state.gender}
                    />
                </div>
                <br />

                <div>
                    <Checkbox 
                        title = {'Security Question : '}
                        name={'security'}
                        onChange={this.handleChange}
                        options={userDate.petSelections}
                        selected={this.state.selectedPets}
                    />
                </div>

                <div>
                    <TextArea 
                        title = {'Address : '}
                        name={'address'}
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <Button 
                        name='Submit'
                        onClick={this.handleFormSubmit}
                    />
                </div>

                <div>
                    <Button 
                        name='Reset'
                        onClick={this.handleClearForm}
                    />
                </div>

                <br />
                <br />
                <br />
                <div>{JSON.stringify(this.state)}</div>
            </div>
        );
    }
}

export default FormContainer;