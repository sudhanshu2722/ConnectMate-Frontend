import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { post } from '../../utils/api';
// TODO : need to move in utility folder
const countries = [
    { code: '+1', name: '(+1) United States' },
    { code: '+44', name: '(+44) United Kingdom' },
    { code: '+91', name: '(+91) India' },
    { code: '+61', name: '(+61) Australia' },
    { code: '+1', name: '(+1) Canada' },
    { code: '+49', name: '(+49) Germany' },
    { code: '+33', name: '(+33) France' },
    { code: '+81', name: '(+81) Japan' },
    { code: '+86', name: '(+86) China' },
    { code: '+55', name: '(+55) Brazil' },
];


const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+91');
    const [error, setError] = useState('');

    const handlePhoneNumberChange = (e) => {
        const number = e.target.value;

        // Check if the input value contains only digits and if its length is less than or equal to 10
        if (/^\d+$/.test(number) && number.length <= 10) {
            setPhoneNumber(number);
            setError('')
        } else {
            setError('Phone number must be 10 digits long');
        }
    };

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate the phone number again before submitting
        if (phoneNumber.length === 10) {
            try {
                await post('sign-up', { phoneNumber, countryCode })
                console.log('Phone number:', countryCode + phoneNumber);
            } catch (error) {
                setError(error.message || 'There was an error, please try again');
            }
        } else {
            setError('There was an error, please try again');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">create your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="countryCode" className="sr-only">
                                Country Code
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="sr-only">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div>
                    <Link to="/">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
